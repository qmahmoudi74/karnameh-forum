import NewQuestionModal from "components/NewQuestionModal";
import Header from "layout/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <NewQuestionModal />
      <main className="px-24 py-12">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
