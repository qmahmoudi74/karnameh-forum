import axios from "axios";
import {
  AnswerResponse,
  AnswerType,
  GetAnswerRequest,
  GetAnswersListRequest,
  GetQuestionRequest,
  QuestionResponse,
  QuestionType,
  RateType
} from "services/service-types";

const http = axios.create({ baseURL: "http://localhost:3001" });

// GET
export async function getQuestion({ questionId }: GetQuestionRequest) {
  return (
    await http.get<QuestionResponse>(
      `/questions/${questionId}?_embed=answers&_expand=user`
    )
  ).data;
}

export async function getAnswer({ answerId }: GetAnswerRequest) {
  return (await http.get<AnswerResponse>(`/answers/${answerId}?_embed=rates`))
    .data;
}

export async function getRate({ answerId }: GetAnswerRequest) {
  return (await http.get<AnswerResponse>(`/rates/${answerId}`)).data;
}

export async function getQuestionsList() {
  return (
    await http.get<QuestionResponse[]>(
      "/questions?_embed=answers&_expand=user&_sort=createdAt&_order=desc"
    )
  ).data;
}

export async function getAnswersList({ questionId }: GetAnswersListRequest) {
  return (
    await http.get<AnswerResponse[]>(
      `/answers?questionId=${questionId}&_expand=question&_expand=user&_embed=rates`
    )
  ).data;
}

// POST
export async function postQuestion(req: QuestionType) {
  http.post("/questions", req);
}

export async function postAnswer(req: AnswerType) {
  http.post("/answers", req);
}

export async function postRate(req: RateType) {
  http.post("/rates", req);
}
