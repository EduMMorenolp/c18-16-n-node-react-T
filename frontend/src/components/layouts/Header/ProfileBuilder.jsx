import { useNavigate } from 'react-router-dom'

export default function ProfileBuilder() {
  const navigate = useNavigate()
  return (
    <div className="hidden lg:flex items-center space-x-3">
       <button
         onClick={() => navigate('/teachers')}
          className="flex items-center rounded-md py-2 px-5 font-sans text-xs font-bold text-black bg-slate-100 hover:bg-slate-200 shadow-md"
        >
          <img src='/teacher.png' alt="Teacher Icon" className="w-5 h-5 mr-2" />
          Profesor
      </button>

        <button
          onClick={() => navigate("/parents")}
          className="flex items-center rounded-md py-2 px-5 font-sans text-xs font-bold text-black bg-slate-100 hover:bg-slate-200 shadow-md"
        >
          <img src='/parent.png' alt="Teacher Icon" className="w-5 h-5 mr-2" />
          Acudiente
        </button>
    </div>
  )
}
