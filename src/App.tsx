import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Everyone can see it*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* Needs Log-In*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};
