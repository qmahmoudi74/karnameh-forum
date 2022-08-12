import { FC } from "react";
import { MdOutlineComment } from "react-icons/md";
import { Link } from "react-router-dom";
import { QuestionType } from "types";

interface Props {
  question: QuestionType;
}

const Question: FC<Props> = ({
  question: { content, createdAt, numberOfAnswers, questionId, title, user }
}) => {
  const datetime = new Date(createdAt);

  const time = datetime.toLocaleString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const day = datetime.toLocaleString("fa", { day: "2-digit" });
  const month = datetime.toLocaleString("fa", { month: "2-digit" });
  const year = datetime.toLocaleString("fa", { year: "numeric" });

  return (
    <section className="shadow rounded-xl">
      <header className="h-12 shadow px-4 py-1 bg-white rounded-xl flex gap-4 items-center">
        <img
          src={user.avatarSrc}
          alt={user.userName}
          className="w-8 h-8 rounded-sm"
        />
        <h3 className="text-lg">{title}</h3>
        <time className="mr-auto text-xs">{`ساعت: ${time} | تاریخ: ${year}/${month}/${day}`}</time>

        <div className="flex text-xs gap-2">
          <MdOutlineComment size={16} className="text-gray-500" />
          {numberOfAnswers}
        </div>
      </header>

      <div className="p-4">
        <p className="mb-4">{content}</p>

        <Link to={`/questions/${questionId}`}>
          <button className="mr-auto border border-green-600 text-green-600">
            مشاهده جزئیات
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Question;
