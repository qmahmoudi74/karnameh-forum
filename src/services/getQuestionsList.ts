import axiosInstance from "services/axiosInstance";
import { QuestionType } from "types";

const getQuestionsList = async () =>
  (await axiosInstance.get<QuestionType[]>(`/questions`)).data;

export default getQuestionsList;
