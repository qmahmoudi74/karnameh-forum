export interface UserType {
  id: number;
  avatar: string;
  username: string;
}

export interface QuestionType {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface AnswerType {
  id: number;
  questionId: number;
  userId: number;
  content: string;
  createdAt: string;
}

interface RateType {
  id: number;
  answerId: number;
  userId: number;
  type: "like" | "dislike";
}

export interface QuestionResponse extends QuestionType {
  answers: AnswerType[];
  user: UserType;
}

export interface AnswerResponse extends AnswerType {
  question: QuestionType;
  user: UserType;
  rates: RateType[];
}

export interface GetAnswersListRequest {
  questionId: number;
}

export interface GetAnswerRequest {
  answerId: number;
}

export interface GetQuestionRequest extends GetAnswersListRequest {}
