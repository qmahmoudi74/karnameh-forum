import Question from "components/Quetsion";
import { FC, useEffect, useState } from "react";
import getQuestionsList from "services/getQuestionsList";
import { QuestionType } from "types";

const QuestionsPage: FC = () => {
  const [questionList, setQuestionList] = useState<QuestionType[]>([]);

  useEffect(() => {
    getQuestionsList().then(setQuestionList);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {questionList.map((question) => (
        <Question key={question.questionId} question={question} />
      ))}
    </div>
  );
};

export default QuestionsPage;
