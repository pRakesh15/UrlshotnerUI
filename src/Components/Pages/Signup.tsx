import { LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
  role: string;
};

function Signup() {
  const { register, handleSubmit,setValue,watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      role: "ROLE_USER", // Set default value for role
    },}); 
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // const formData = new FormData();
    // formData.append("username", data.username);
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    // formData.append("role", data.role); // Allow role selection

    console.log(data);
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
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" {...register("email", { required: "Email is required" })} />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select  
               onValueChange={(value) => setValue("role", value)}
               value={watch("role")}
            >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ROLE_USER">User</SelectItem>
                  {/* <SelectItem value="ROLE_ADMIN">ADMIN</SelectItem> */}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground ">Currently, only user role is available</p>
            </div>

            <Button type="submit" className="w-full bg-green-800 cursor-pointer">
              Create account
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
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
