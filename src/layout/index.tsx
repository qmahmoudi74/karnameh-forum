import Header from "layout/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="px-24 container mx-auto py-12">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
