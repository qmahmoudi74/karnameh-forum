import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <Link to="/questions">
        <button className="bg-green-600 text-white hover:bg-green-500">
          رفتن به صفحه سؤالات
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
