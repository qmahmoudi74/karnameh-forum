export interface User {
  userId: number;
  avatarSrc: string;
}

export interface QuestionType {
  user: User;
  questionId: number;
  title: string;
  content: string;
  createdAt: string;
  numberOfAnswers: number;
}

export interface AnswerType {
  user: User;
  questionId: number;
  answerId: number;
  title: string;
  content: string;
  createdAt: string;
  numberOfLikes: number;
  numberOfDislikes: number;
}
