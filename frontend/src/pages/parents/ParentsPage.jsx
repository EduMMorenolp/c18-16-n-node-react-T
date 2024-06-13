import React from 'react'
import Search from '../../components/Search'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getParents } from '../../api/ParentAPI'
import ParentItem from './ParentItem'

export default function ParentsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['parents'],
    queryFn: getParents
  })

  if (isLoading) return 'Cargando...'

  return (
    <div className="w-full px-6 pt-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl text-marineBlue font-bold">Acudientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 md:mt-8">
        <Search placeholder="Buscar acudientes..." />
        <Link
            to="/parents/create-parent"
            className="flex h-10 items-center rounded-lg bg-btnBg-light px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear acudiente</span>{' '}
            <PlusIcon className="h-5 w-5 md:ml-4" />
        </Link>
      </div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-200 p-2 md:pt-0">
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-200 text-left text-sm font-normal uppercase">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        ID
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Apellidos
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Telefono
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data?.map((parent) => (
                    <ParentItem
                      key={parent.id}
                      parent={parent}
                    />    
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">

      </div>
    </div>
  )
}
