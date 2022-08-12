import Question from "components/Quetsion";
import { FC, useEffect, useState } from "react";
import { getQuestionsList } from "services";
import { QuestionResponse } from "services/service-types";
import { useAppSelector } from "store/hooks";
import { selectQuestionModal } from "store/slices/questionModalSlice";

const QuestionsPage: FC = () => {
  const { isOpen } = useAppSelector(selectQuestionModal);
  const [questionList, setQuestionList] = useState<QuestionResponse[]>([]);

  useEffect(() => {
    if (!isOpen) getQuestionsList().then(setQuestionList);
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-8">
      {questionList.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsPage;
