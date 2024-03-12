import { Outlet, Link } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 w-full hidden lg:flex gap-40 justify-center py-4 items-center z-20">
        <h1>Header</h1>
        <nav className={'flex gap-2'}>
          <Link className="text-white text-center transition-colors hover:bg-white rounded-lg hover:text-rose-600 p-3 w-[100px]" to={'/'}>Home</Link>
          <Link className="text-white text-center transition-colors hover:bg-white rounded-lg hover:text-rose-600 p-3 w-[100px]" to={'/'}>About</Link>
          <Link className="text-white text-center transition-colors hover:bg-white rounded-lg hover:text-rose-600 p-3 w-[100px]" to={'/'}>Contact</Link>

        </nav>
        <button className="text-white hover:text-rose-600 hover:bg-white text-center p-3 rounded-lg transition-colors ">
          tel: 123456789
        </button>
      </header>
      <main className="bg-rose-900">
        <Outlet />
      </main>
      <footer>
      </footer>

    </>
  )
}

export default Layout
