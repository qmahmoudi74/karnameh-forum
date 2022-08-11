import QuestionsPage from "pages/questions";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={null} />

        <Route path="questions" element={<QuestionsPage />}>
          <Route path=":questionId" element={<QuestionsPage />} />
        </Route>

        <Route path="*" element={null} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
