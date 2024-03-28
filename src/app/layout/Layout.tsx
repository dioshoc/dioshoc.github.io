import React from "react";
import Footer from "@app/layout/footer";

export const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}