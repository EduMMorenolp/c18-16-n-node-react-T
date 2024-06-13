import React from 'react'
import Search from '../../components/Search'
import TableTeaches from './TableTeaches'
import { CreateTeacher } from './Buttons'

export default function TeachesPage() {
  return (
    <div className="w-full px-6 pt-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl text-marineBlue font-bold">Profesores</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 md:mt-8">
        <Search placeholder="Buscar profesores..." />
        <CreateTeacher/>
      </div>
        <TableTeaches/>
      <div className="mt-5 flex w-full justify-center">

      </div>
    </div>
  )
}
