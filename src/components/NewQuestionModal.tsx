import { FC } from "react";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  onQuestionModalClose,
  selectQuestionModal
} from "store/slices/questionModalSlice";

const NewQuestionModal: FC = () => {
  const { isOpen } = useAppSelector(selectQuestionModal);
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(onQuestionModalClose());

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose} />

      <section className="max-w-screen-md w-full bg-gray-50 z-50 rounded-xl">
        <header className="h-12 shadow px-4 py-1 bg-white rounded-xl flex gap-4 items-center">
          <h3 className="font-bold">ایجاد سؤال جدید</h3>
          <MdClose
            size={20}
            className="cursor-pointer mr-auto"
            onClick={onClose}
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
              className="mr-auto text-red-600 hover:bg-red-100 transition-colors w-32 justify-center"
              onClick={onClose}
            >
              انصراف
            </button>

            <button
              className="bg-green-600 text-white hover:bg-green-500 w-32 justify-center"
              onClick={onClose}
            >
              ایجاد سؤال
            </button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default NewQuestionModal;
