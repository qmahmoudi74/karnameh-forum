export interface User {
  userId: string;
  userName: string;
  avatarSrc: string;
}

export interface QuestionType {
  user: User;
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  numberOfAnswers: number;
}

export interface AnswerType {
  user: User;
  questionId: string;
  answerId: string;
  title: string;
  content: string;
  createdAt: string;
  numberOfLikes: number;
  numberOfDislikes: number;
}
