import Layout from "layout";
import AnswersPage from "pages/AnswersPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import QuestionsPage from "pages/QuestionsPage";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<HomePage />} />

        <Route element={<Layout />}>
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/questions/:questionId" element={<AnswersPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
