const prisma = require('../models/prisma')
const { hashPassword } = require('../utils/auth')


const getParentsController = async (req, res) =>{
    try {
      const allParents = await prisma.parents.findMany({
          include: {
              user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    userDetail: true
                },

              }
          }
      })

      

      res.json(allParents);
    } catch (error) {
        console.log("error", error.message)
      res.status(500).json({ error: 'Hubo un error al buscar los padres' });
    }
}


const createParentController = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        birthdate, 
        gender, 
        address, 
        phone, 
        dni,
        email,
        password,
        roleId 
    } = req.body
   try {
    const userExists = await prisma.users.findUnique({
        where:{ 
            email 
        }
    })

    if (userExists) {
        const error = new Error('El Padre ya esta registrado')
        return res.status(409).json({ error: error.message })
    }


    const dniExists = await prisma.userDetails.findUnique({
        where: { 
            dni: dni
        }
    });



    if (dniExists) {
        const error = new Error('El DNI ya está registrado');
        return res.status(409).json({ error: error.message })
    }
    
    const userPassword = await hashPassword(password);
    
    const newUser = await prisma.users.create({
        data: {
            name: `${firstName} ${lastName}`,
            email: email,
            password: userPassword,
            role: {
                connect: { id: roleId }
            },
            userDetail: {
                create: {
                    firstName: firstName,
                    lastName: lastName,
                    birthdate: new Date(birthdate),
                    gender: gender,
                    address: address,
                    phone: phone,
                    dni: dni
                }
            },
        }
    })

    await prisma.parents.create({
        data: {
            userId: newUser.id,
        }
    });

    res.send('Cuenta creada con éxito');
   } catch (error) {
        res.status(500).json({ error: 'Hubo un error' });
   }
}

const getParentByIdController = async (req, res) =>{
    const parentId = parseInt(req.params.id);
    try {
        const parent = await prisma.parents.findUnique({
            where: {
                id: parentId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        userDetail: true
                    },
                    
                },
            }
        })

        if (!parent) {
            const error = new Error('No se encontró ningún padre con el ID proporcionado.');
            return res.status(400).json({ error: error.message });
        }
        res.status(200).json(parent);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Hubo un error al buscar el padre por ID' });
    }
}


module.exports = {
     createParentController, 
     getParentsController, 
     getParentByIdController
}