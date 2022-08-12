import { nanoid } from "@reduxjs/toolkit";
import Answer from "components/Answer";
import Question from "components/Quetsion";
import { FC, useState } from "react";
import { AnswerType } from "types";

const QuestionIdPage: FC = () => {
  const [answerList] = useState<AnswerType[]>(
    new Array(2).fill(0).map(() => ({
      content:
        "در مرداد امسال، متاسفانه با جاری شدن سیل در شهرستان‌های نیریز و استهبان در استان فارس تعدادی از هموطنان عزیزمان که در بستر و حریم رودخانه رودبار در حال استراحت و گذران اوقات فراغت بودند، دچار غافلگیری فاجعه سیل شدند و تعدادی از آنان جان عزیزیشان را از دست دادند و تعدادی خودرو نیز نابود شد",
      createdAt: new Date().toISOString(),
      title: "تست کاربر",
      user: { avatarSrc: "asdasd", userId: "asdasd", userName: "سعید هاشمی" },
      answerId: nanoid(),
      numberOfDislikes: 20,
      numberOfLikes: 15,
      questionId: nanoid()
    }))
  );

  return (
    <div className="flex flex-col gap-16">
      <Question
        question={{
          content:
            "در مرداد امسال، متاسفانه با جاری شدن سیل در شهرستان‌های نیریز و استهبان در استان فارس تعدادی از هموطنان عزیزمان که در بستر و حریم رودخانه رودبار در حال استراحت و گذران اوقات فراغت بودند، دچار غافلگیری فاجعه سیل شدند و تعدادی از آنان جان عزیزیشان را از دست دادند و تعدادی خودرو نیز نابود شد",
          createdAt: new Date().toISOString(),
          numberOfAnswers: 20,
          questionId: nanoid(),
          title: "تست کاربر",
          user: {
            avatarSrc: "asdasd",
            userId: "asdasd",
            userName: "سعید هاشمی"
          }
        }}
        hasDetailsButton={false}
      />

      <div className="flex flex-col gap-8">
        <h2 className="font-bold">پاسخ‌ها</h2>
        {answerList.map((answer) => (
          <Answer key={answer.answerId} answer={answer} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">پاسخ‌ خود را ثبت کنید</h2>
          <div className="text-xs">پاسخ‌ خود را بنویسید</div>
        </div>

        <textarea
          placeholder="متن پاسخ..."
          className="h-48 resize-none border rounded-lg p-4"
        />

        <button className="bg-green-600 text-white hover:bg-green-500 w-48 justify-center">
          ارسال پاسخ
        </button>
      </div>
    </div>
  );
};

export default QuestionIdPage;
