import axiosInstance from "services/axiosInstance";

interface Data {
  title: string;
  content: string;
  questionId: string;
}

const postNewQuestion = async (data: Data) =>
  axiosInstance.post<void>(`/questions`, data);

export default postNewQuestion;
