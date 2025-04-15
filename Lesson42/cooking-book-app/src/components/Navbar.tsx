import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-gray-50">
      <ul className="flex gap-4 justify-end">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  )
}