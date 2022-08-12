import avatar from "images/avatar.png";
import { FC } from "react";
import { MdArrowDropDown } from "react-icons/md";

const UserInfo: FC = () => {
  return (
    <section className="flex items-center shrink-0 gap-4 cursor-pointer">
      <img
        src={avatar}
        alt="avatar"
        className="rounded-full w-11 h-11 border"
      />

      <div>الناز شاکردوست</div>

      <MdArrowDropDown size={32} className="text-gray-400" />
    </section>
  );
};

export default UserInfo;
