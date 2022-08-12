import NewQuestionModal from "layout/Header/NewQuestionButton/NewQuestionModal";
import { FC, useState } from "react";
import { MdAdd } from "react-icons/md";

const NewQuestionButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <button
      onClick={onOpen}
      className="bg-green-600 text-white hover:bg-green-500"
    >
      <NewQuestionModal isOpen={isOpen} onClose={onClose} />
      <MdAdd size={20} />
      <span>سؤال جدید</span>
    </button>
  );
};

export default NewQuestionButton;
