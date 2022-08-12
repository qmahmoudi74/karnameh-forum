import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTitle: FC = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/questions":
        setTitle("لیست سؤالات");
        break;

      default:
        setTitle("جزئیات سؤال");
        break;
    }
  }, [pathname]);

  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default PageTitle;
