import { FC, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { getRandomUser } from "services";
import { UserType } from "services/service-types";

const UserInfo: FC = () => {
  const [userInfo, setUserInfo] = useState<UserType>();

  useEffect(() => {
    getRandomUser().then(setUserInfo);
  }, []);

  return userInfo ? (
    <section className="flex items-center shrink-0 gap-4">
      <img
        loading="lazy"
        src={userInfo.avatar}
        alt="avatar"
        className="rounded-full w-11 h-11 border"
      />

      <div>{userInfo.username}</div>
      <MdArrowDropDown size={32} className="text-gray-400" />
    </section>
  ) : (
    <div>...</div>
  );
};

export default UserInfo;
