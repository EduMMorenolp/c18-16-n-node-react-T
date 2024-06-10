import { Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Notification() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate("/notifications")} className="relative flex items-center justify-center py-1 mt-2">
      <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">4</span>
      <Bell className="size-7 text-black" />
    </button>
  )
}
