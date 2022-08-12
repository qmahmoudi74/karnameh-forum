import axios from "axios";
import {
  AnswersResponse,
  GetAnswersListRequest,
  GetQuestionRequest,
  QuestionResponse,
  QuestionType,
  UserType
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

export async function getQuestionsList() {
  return (
    await http.get<QuestionResponse[]>(
      "/questions?_embed=answers&_expand=user&_sort=createdAt&order=asc"
    )
  ).data;
}

export async function getAnswersList({ questionId }: GetAnswersListRequest) {
  return (
    await http.get<AnswersResponse[]>(
      `/answers?questionId=${questionId}&_expand=question&_expand=user`
    )
  ).data;
}

export async function getRandomUser() {
  return (
    await http.get<UserType>(`/users/${Math.floor(Math.random() * 5 + 1)}`)
  ).data;
}

// POST
export async function postQuestion(req: QuestionType) {
  http.post("/questions", req);
}

export async function postAnswer(req: unknown) {}

// PUT
export async function putLike(req: unknown) {}
export async function putDislike(req: unknown) {}
