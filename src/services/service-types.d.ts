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
  title: string;
  content: string;
  createdAt: string;
}

export interface QuestionResponse extends QuestionType {
  answers: AnswerType[];
  user: UserType;
}

export interface AnswersResponse extends AnswerType {
  question: QuestionType;
  user: UserType;
}

export interface GetAnswersListRequest {
  questionId: number;
}

export interface GetQuestionRequest extends GetAnswersListRequest {}
