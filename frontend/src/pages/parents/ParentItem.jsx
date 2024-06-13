import { EyeIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function ParentItem({parent}) {
  return (
    <tr 
        key={parent.id} 
        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
    >
            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                {parent.id}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {parent.user.userDetail.firstName}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {parent.user.userDetail.lastName}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {parent.user.email}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {parent.user.userDetail.phone}
            </td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <Link
                        to={`/parents/${parent.id}/edit`}
                    >
                        <PencilIcon className="w-5" />
                    </Link>

                    <Link
                        to={`/parents/${parent.id}`}
                    >
                        <EyeIcon className="h-5 md:ml-4" />
                    </Link>
                    <Link
                        to={`/parents/${parent.id}/create-student`}
                    >
                        <UserPlusIcon className="h-5 md:ml-4" />
                    </Link>
                </div>
            </td>
        </tr>
  )
}
