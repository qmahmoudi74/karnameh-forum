import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center gap-12">
      <h2 className="text-2xl font-bold">صفحه مورد نظر شما وجود ندارد!</h2>
      <Link to="/">
        <button className="bg-green-600 text-white hover:bg-green-500">
          رفتن به صفحه اصلی وبسایت
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
