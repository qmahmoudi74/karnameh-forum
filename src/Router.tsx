import Layout from "layout";
import HomePage from "pages/home";
import NotFoundPage from "pages/not-found";
import QuestionIdPage from "pages/question-id";
import QuestionsPage from "pages/questions";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<HomePage />} />

        <Route path="questions" element={<Layout />}>
          <Route index={true} element={<QuestionsPage />} />
          <Route path=":questionId" element={<QuestionIdPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
