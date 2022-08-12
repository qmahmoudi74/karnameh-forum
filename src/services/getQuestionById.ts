import axiosInstance from "services/axiosInstance";
import { QuestionType } from "types";

interface Request {
  questionId: number;
}

const getQuestionById = async ({ questionId }: Request) =>
  (await axiosInstance.get<QuestionType>(`/questions?questionId=${questionId}`))
    .data;

export default getQuestionById;
