import NewQuestionButton from "layout/Header/NewQuestionButton";
import PageTitle from "layout/Header/PageTitle";
import UserInfo from "layout/Header/UserInfo";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="h-16 shadow-xl shadow-slate-100 bg-white px-24 flex sticky top-0">
      <div className="container mx-auto flex gap-12 items-center columns-12">
        <PageTitle />
        <div className="mr-auto" />
        <NewQuestionButton />
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
