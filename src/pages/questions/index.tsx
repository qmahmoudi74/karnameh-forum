import { nanoid } from "@reduxjs/toolkit";
import Question from "components/Quetsion";
import { useState } from "react";
import { FC } from "react";
import { QuestionType } from "types";

const QuestionsPage: FC = () => {
  const [questionList] = useState<QuestionType[]>(
    new Array(50).fill(0).map(() => ({
      content:
        "در مرداد امسال، متاسفانه با جاری شدن سیل در شهرستان‌های نیریز و استهبان در استان فارس تعدادی از هموطنان عزیزمان که در بستر و حریم رودخانه رودبار در حال استراحت و گذران اوقات فراغت بودند، دچار غافلگیری فاجعه سیل شدند و تعدادی از آنان جان عزیزیشان را از دست دادند و تعدادی خودرو نیز نابود شد",
      createdAt: new Date().toISOString(),
      numberOfAnswers: 20,
      questionId: nanoid(),
      title: "تست کاربر",
      user: { avatarSrc: "asdasd", userId: "asdasd", userName: "سعید هاشمی" }
    }))
  );

  return (
    <div className="flex flex-col gap-8">
      {questionList.map((question) => (
        <Question key={question.questionId} question={question} />
      ))}
    </div>
  );
};

export default QuestionsPage;
