import axiosInstance from "services/axiosInstance";
import { AnswerType } from "types";

interface Request {
  questionId: number;
}

const getAnswaresList = async ({ questionId }: Request) =>
  (await axiosInstance.get<AnswerType[]>(`/answers?questionId=${questionId}`))
    .data;

export default getAnswaresList;
