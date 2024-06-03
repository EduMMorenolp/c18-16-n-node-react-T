
export default function MenuItem({children, onClick}) {
    return (
        <div onClick={onClick} className="px-4 py-3 w-ful hover:bg-neutral-100 transition  font-semibold">
          {children}
        </div>
    )
}
