import { useContextStore } from "@/Context/ContextApi";
import { LinkIcon, LogOut, User } from "lucide-react"
import { Link,useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


function NavBar() {
  const { token,setToken } = useContextStore();
  const navigate=useNavigate();

  //function for logout user

  const logOutHandler=()=>{
    setToken(null);
    localStorage.removeItem("AUTH_TOKEN");
    navigate("/");
    // console.log("user log out")
  }

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
            {
              token ?
                <div className="ml-auto flex items-center space-x-4 cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full cursor-pointer">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">User</p>
                          <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span className="cursor-pointer" onClick={logOutHandler}>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div> : <Link to="/login" className="text-sm font-medium hover:underline underline-offset-4">
                  Log in
                </Link>
            }

          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar