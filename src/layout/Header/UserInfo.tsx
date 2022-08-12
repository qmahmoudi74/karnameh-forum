import { FC } from "react";
import { MdArrowDropDown } from "react-icons/md";

const UserInfo: FC = () => {
  return (
    <section className="flex items-center shrink-0 gap-4">
      <img
        loading="lazy"
        src="/images/1.jpeg"
        alt="avatar"
        className="rounded-full w-11 h-11 border"
      />

      <div>کاظم زارع</div>
      <MdArrowDropDown size={32} className="text-gray-400" />
    </section>
  );
};

export default UserInfo;
