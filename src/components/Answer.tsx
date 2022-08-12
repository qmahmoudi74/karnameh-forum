import { FC, useState } from "react";
import { MdMood, MdMoodBad } from "react-icons/md";
import { AnswersResponse } from "services/service-types";

interface Props {
  answer: AnswersResponse;
}

const getDate = (createdAt: string) => {
  const datetime = new Date(createdAt);

  const time = datetime.toLocaleString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const day = datetime.toLocaleString("fa", { day: "2-digit" });
  const month = datetime.toLocaleString("fa", { month: "2-digit" });
  const year = datetime.toLocaleString("fa", { year: "numeric" });

  return { time, day, month, year };
};

const Answer: FC<Props> = ({
  answer: {
    content,
    createdAt,
    title,
    id: answerId,
    user: { avatar }
  }
}) => {
  return null;
  // const [localLikes, setLocalLikes] = useState(
  //   rates.filter(({ type }) => type === "like").length
  // );

  // const [localDislikes, setLocalDislikes] = useState(
  //   rates.filter(({ type }) => type === "dislike").length
  // );

  // const { day, month, time, year } = getDate(createdAt);

  // const onLikeClick = async () => {
  //   await putRate({ answerId, userId, type: "like" });
  //   const answer = await getAnswerById({ answerId });
  //   setLocalLikes(answer.rates.filter(({ type }) => type === "like").length);
  // };

  // const onDislikeClick = async () => {
  //   await putRate({ answerId, userId, type: "like" });
  //   const answer = await getAnswerById({ answerId });
  //   setLocalLikes(answer.rates.filter(({ type }) => type === "dislike").length);
  // };

  // return (
  //   <section className="shadow rounded-xl">
  //     <header className="h-12 shadow px-4 py-1 bg-white rounded-xl flex gap-8 items-center">
  //       <div className="flex items-center gap-4">
  //         <img
  //           loading="lazy"
  //           src={avatar}
  //           alt="avatar"
  //           className="w-8 h-8 rounded-sm"
  //         />
  //         <h3 className="text-lg">{title}</h3>
  //       </div>

  //       <time className="mr-auto text-xs">{`ساعت: ${time} | تاریخ: ${year}/${month}/${day}`}</time>

  //       <div className="flex text-xs gap-4">
  //         <div className="flex gap-1 items-center leading-none text-green-300">
  //           <MdMood size={20} />
  //           {localLikes}
  //         </div>

  //         <div className="flex gap-1 items-center leading-none text-red-300">
  //           <MdMoodBad size={20} />
  //           {localDislikes}
  //         </div>
  //       </div>
  //     </header>

  //     <div className="p-4 flex flex-col">
  //       <p className="mb-4">{content}</p>

  //       <div className="flex items-center gap-4 mr-auto">
  //         <button
  //           className="mr-auto border border-green-600 text-green-600"
  //           onClick={onLikeClick}
  //         >
  //           <MdMood size={20} />
  //           پاسخ خوب بود
  //         </button>

  //         <button
  //           className="mr-auto border border-red-600 text-red-600"
  //           onClick={onDislikeClick}
  //         >
  //           <MdMoodBad size={20} />
  //           پاسخ خوب نبود
  //         </button>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Answer;
