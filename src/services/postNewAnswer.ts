import axiosInstance from "services/axiosInstance";

interface Data {
  title: string;
  content: string;
}

const postNewAnswer = async (data: Data) =>
  axiosInstance.post<void>(`/questions`, data);

export default postNewAnswer;
