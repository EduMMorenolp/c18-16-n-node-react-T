import { Link } from 'react-router-dom';
import { EyeIcon, PencilIcon, PlusIcon } from '@heroicons/react/20/solid';

export function CreateTeacher() {
    return (
      <Link
        to="/teachers/create-teacher"
        className="flex h-10 items-center rounded-lg bg-btnBg-light px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Crear profesor</span>{' '}
        <PlusIcon className="h-5 w-5 md:ml-4" />
      </Link>
    );
}


export function UpdateTeacher({ id }) {
    return(
        <Link
         to={`/teachers/${id}/edit`}
        >
            <PencilIcon className="w-5" />
        </Link>
    )
}

export function DetailTeacher({ id }) {
    return(
        <Link
         to={`/teachers/${id}`}
        >
            <EyeIcon className="h-5 md:ml-4" />
        </Link>
    )
}
