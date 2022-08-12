import { FC } from "react";
import { MdAdd } from "react-icons/md";
import { useAppDispatch } from "store/hooks";
import { onQuestionModalOpen } from "store/slices/questionModalSlice";

const NewQuestionButton: FC = () => {
  const dispatch = useAppDispatch();

  const onOpen = () => dispatch(onQuestionModalOpen());

  return (
    <button
      onClick={onOpen}
      className="bg-green-600 text-white hover:bg-green-500"
    >
      <MdAdd size={20} />
      <span>سؤال جدید</span>
    </button>
  );
};

export default NewQuestionButton;
