import { useNavigate } from 'react-router-dom'

export default function ProfileBuilder() {
  const navigate = useNavigate()
  return (
    <div className="hidden items-center space-x-3 lg:block">
       <button
          onClick={() => navigate("/teachers")}
          className="rounded-md  py-2 px-6 font-sans text-xs font-bold uppercase text-black bg-slate-100 hover:bg-slate-200 shadow-md"
        >
          Profesor
        </button>

        <button
          onClick={() => navigate("/parents")}
           className="rounded-md bg-slate-600 hover:bg-slate-700 py-2 px-6 font-sans text-xs font-bold uppercase text-white shadow-md"
        >
          Acudiente
        </button>
    </div>
  )
}
