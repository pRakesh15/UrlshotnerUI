import { LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { baseUrl } from "@/main";
import { useContextStore } from "@/Context/ContextApi";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
    const [loading,setLoading]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(); 
    const {setToken }=useContextStore();
      const navigate=useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
      // const formData = new FormData();
      // formData.append("username", data.username);
      // formData.append("email", data.email);
      // formData.append("password", data.password);
      // formData.append("role", data.role); // Allow role selection

  
      // console.log(formattedData);
  
      //add the logic
      setLoading(true);
      try {
       const response=await axios.post(`${baseUrl}/auth/user/login`,data,{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true,
      })

      localStorage.setItem("AUTH_TOKEN",JSON.stringify(response?.data?.token))
      setToken(JSON.stringify(response?.data?.token));
      toast.success("User Login successfully !!!")
        navigate("/dashBoard");
        
  
      } catch (error:any) {
        console.log(error)
        toast.error(error.message);
      } finally{
        setLoading(false);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-svh bg-[#037164] text-[#FFFFE0]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your information below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="johndoe" {...register("username", { required: "Username is required" })} />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
              </div>
  
            
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
  
             
  
              <Button type="submit" className="w-full bg-green-800 cursor-pointer">
                {
                  loading?"Loading....":"Login"
                }
                
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="underline underline-offset-2 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline underline-offset-2 hover:text-primary">
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
}


export default Login;