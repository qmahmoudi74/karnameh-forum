import Answer from "components/Answer";
import Question from "components/Quetsion";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswersList, getQuestion } from "services";
import { AnswersResponse, QuestionResponse } from "services/service-types";

const QuestionIdPage: FC = () => {
  const { questionId: id } = useParams();
  const [question, setQuestion] = useState<QuestionResponse>();
  const [answerList, setAnswersList] = useState<AnswersResponse[]>([]);

  const questionId = parseInt(id!);

  useEffect(() => {
    getQuestion({ questionId }).then(setQuestion);
    getAnswersList({ questionId }).then(setAnswersList);
  }, [questionId]);

  return (
    <div className="flex flex-col gap-16">
      {question ? (
        <Question question={question} hasDetailsButton={false} />
      ) : (
        <div>...</div>
      )}

      <div className="flex flex-col gap-8">
        <h2 className="font-bold">پاسخ‌ها</h2>
        {answerList.length > 0 ? (
          answerList.map((answer) => <Answer key={answer.id} answer={answer} />)
        ) : (
          <div>پاسخی وجود ندارد!</div>
        )}
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">پاسخ‌ خود را ثبت کنید</h2>
          <div className="text-xs">پاسخ‌ خود را بنویسید</div>
        </div>

        <textarea
          placeholder="متن پاسخ..."
          className="h-48 resize-none border rounded-lg p-4"
        />

        <button className="bg-green-600 text-white hover:bg-green-500 w-48 justify-center">
          ارسال پاسخ
        </button>
      </div>
    </div>
  );
};

export default QuestionIdPage;
