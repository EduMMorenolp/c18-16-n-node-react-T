import React from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateTeacherPage() {
  const params = useParams()
  const teacherId = params.teacherId
  console.log(teacherId)
  return (
    <div>
      
    </div>
  )
}
