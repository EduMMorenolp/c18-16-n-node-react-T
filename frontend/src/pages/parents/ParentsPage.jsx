import React from 'react'
import Search from '../../components/Search'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'
import TableParents from './TableParents'

export default function ParentsPage() {
  return (
    <div className="w-full px-6 pt-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Acudientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 md:mt-8">
        <Search placeholder="Buscar acudientes..." />
        <Link
            to="/parents/create-parent"
            className="flex h-10 items-center rounded-lg bg-blue-600 hover:bg-blue-700 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear acudiente</span>{' '}
            <PlusIcon className="h-5 w-5 md:ml-4" />
        </Link>
      </div>
      <TableParents/>
      <div className="mt-5 flex w-full justify-center">

      </div>
    </div>
  )
}
