import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section
            className="flex flex-1 justify-center items-center 
          flex-col py-10
          bg-black
          "
          >
            <Outlet />
          </section>
          <img
            className="hidden xl:block h-96 my-auto cont w-1/2 object-contain bg-no-repeat"
            src="/img/2000px-Circle_frame2_2.png"
          ></img>
        </>
      )}
    </>
  );
};

export default AuthLayout;
