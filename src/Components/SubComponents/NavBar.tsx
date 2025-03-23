import { LinkIcon } from "lucide-react"
import { Link } from "react-router-dom"


function NavBar() {
  return (
    <div>
         <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-6 w-6" />
            <span className="text-lg font-bold">ShortLink</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link to="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar