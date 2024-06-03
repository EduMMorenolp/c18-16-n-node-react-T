import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import UsersTable from './UsersTable'
import Pagination from '../../components/Pagination'
import { users } from '../../utils/users'

export default function Users() {
  return (
    <div className="w-full px-6 pt-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">Usuarios</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search/>
        <Link
          to="/register"
          className="flex h-10 items-center rounded-lg bg-sky-900 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Crear usuario</span>{' '}
          <PlusIcon className="h-5 w-5 md:ml-4" />
        </Link>
      </div>
      <UsersTable users={users}/>
      <div className="mt-5 flex w-full justify-center">
        <Pagination/>
      </div>
    </div>
  )
}
