import Question from "components/Quetsion";
import { FC, useEffect, useState } from "react";
import { getQuestionsList } from "services";
import { QuestionResponse } from "services/service-types";

const QuestionsPage: FC = () => {
  const [questionList, setQuestionList] = useState<QuestionResponse[]>([]);

  useEffect(() => {
    getQuestionsList().then(setQuestionList);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {questionList.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsPage;
