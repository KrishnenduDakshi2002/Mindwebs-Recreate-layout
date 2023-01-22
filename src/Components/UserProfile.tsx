import React from "react";
import "../dist/css/UserProfile.css";
import { CustomIconButton } from "./Home";
import UserProfileLogo from "../assets/UserProfileLogo.png";
import { IoArrowUp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { HiQrCode } from "react-icons/hi2";
function UserProfile() {
  return (
    <div className="user__profile">
      <div>
        <div>
          <img src={UserProfileLogo} alt="" />
        </div>
        <div>
          <p>dxlfqz...Truk</p>
          <p>Decimal</p>
        </div>
      </div>
      <div>
        <div>
          <CustomIconButton Icon={MdContentCopy} iconColor="gray" />
        </div>
        <div>
          <CustomIconButton Icon={HiQrCode} iconColor="gray" />
        </div>
      </div>
      <div>
        <p>$2,117.96</p>
      </div>
    </div>
  );
}

function ProfileIcon() {
  return <div></div>;
}

export default UserProfile;
