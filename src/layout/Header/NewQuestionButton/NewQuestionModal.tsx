import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-30" />
      <section className="max-w-screen-md w-full bg-gray-50 z-50 rounded-xl">
        {children}
      </section>
    </div>,
    document.body
  );
};

const NewQuestionModal: FC<Props> = (props) => {
  return (
    <Modal {...props}>
      <header className="h-12 shadow px-4 py-1 bg-white rounded-xl flex gap-4 items-center">
        <h3 className="font-bold">ایجاد سؤال جدید</h3>
        <MdClose
          size={20}
          className="cursor-pointer mr-auto"
          onClick={props.onClose}
        />
      </header>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col p-8 gap-8"
      >
        <label htmlFor="" className="flex flex-col gap-2">
          موضوع
          <input
            placeholder="مشکل در اجرای کد"
            type="text"
            className="border rounded-lg px-4 py-2"
          />
        </label>

        <label htmlFor="" className="flex flex-col gap-2">
          متن سؤال
          <textarea
            placeholder="مشکل در اجرای کد"
            className="h-48 resize-none border rounded-lg p-4"
          />
        </label>

        <section className="flex gap-4">
          <button
            className="mr-auto border border-green-600 text-green-600"
            onClick={props.onClose}
          >
            انصراف
          </button>

          <button
            className="bg-green-600 text-white hover:bg-green-500"
            onClick={props.onClose}
          >
            ایجاد سؤال
          </button>
        </section>
      </form>
    </Modal>
  );
};

export default NewQuestionModal;
