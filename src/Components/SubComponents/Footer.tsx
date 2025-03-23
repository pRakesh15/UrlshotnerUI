import { LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div>
        <footer className="border-t  bg-[#037164] text-[#FFFFE0]">
        <div className="p-12 container flex flex-col gap-6 py-8 md:py-12 lg:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-6 w-6" />
                <span className="text-lg font-bold">ShortLink</span>
              </div>
              <p className="text-sm text-muted-foreground">Simplify your links, amplify your reach</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="#" className="hover:underline">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="#" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="#" className="hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ShortLink. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 2H2v10h10V2zM22 2h-10v10h10V2zM12 12H2v10h10V12zM22 12h-10v10h10V12z" />
                </svg>
                <span className="sr-only">Slack</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer