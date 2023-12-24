import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validation";
import GoBack from "@/components/shared/goback";
import LoadingImage from "@/components/shared/loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appWrite/api";

const SignUpForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });


  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
     const newUser = await createUserAccount(values);
       console.log(newUser);
    }


  return (
    <>
    <Form {...form}>
      <div className="sm:w-420 py-1  flex-center flex-col">
      <h3 className="h4-bold md:h2-bold pt-5 sm:pt-5">Time to create a new account</h3>
      <form  onSubmit={form.handleSubmit(onSubmit)}
       className="flex flex-col gap-5 w-auto mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Display name</FormLabel>
              <FormControl>
                <Input className="text-black" placeholder="My name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Username</FormLabel>
              <FormControl>
                <Input className="text-black" placeholder="@Example" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input className="text-black" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white"> Password </FormLabel>
              <FormControl>
                <Input type="password" className="text-black" placeholder="●●●●●●●●●" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="text-white bg-red-contrast font-semibold text-base" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2">
                <LoadingImage/>
              </div>

            ): "Sign Up"}


        </Button>
        <p className="text-small-regular text-light-2 text-center mt-2">Or if you already have an account you can <br/>
          <Link className="text-red-contrast underline" to={"/sign-in"}>just log in here :)  </Link>
        </p>
      </form>
      </div>
    </Form>
    <GoBack></GoBack>
    </> 
  );
};

export default SignUpForm;
