import React, { useState } from "react";
import "../dist/css/Sidebar.css";
import { IoHome, IoImage } from "react-icons/io5";
import { IoIosSwap, IoMdLogOut } from "react-icons/io";
import { IconType } from "react-icons";
import { RiBroadcastLine, RiMastercardLine } from "react-icons/ri";
import { CiReceipt } from "react-icons/ci";
import { TbCoin } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
const BUTTONS = [
  {
    icon: IoHome,
    text: "Dashboard",
  },
  {
    icon: IoIosSwap,
    text: "Swap",
  },
  {
    icon: SiHiveBlockchain,
    text: "Cross-Chain",
  },
  {
    icon: RiMastercardLine,
    text: "Bond",
  },
  {
    icon: FaServer,
    text: "Masternode",
  },
  {
    icon: TbCoin,
    text: "Coins",
  },
  {
    icon: IoImage,
    text: "NFT",
  },
  {
    icon: CiReceipt,
    text: "Receipts",
  },
  {
    icon: RiBroadcastLine,
    text: "Broadcast",
  },
];
function Sidebar({ toggleMiniSidebar,className }: { toggleMiniSidebar: boolean;className?:string;}) {
  const [active, setActive] = useState(0);
  return (
    <div className={`sidebar`}>
      {BUTTONS.map((button, i) => (
        <SidebarButton
          hideText={toggleMiniSidebar}
          Icon={button.icon}
          setActive={() => setActive(i)}
          active={i === active ? true : false}
          index={i}
          text={button.text}
          className={className}
        />
      ))}

      <div>
        <SidebarButton
            backgroundColor="white"
          hideText={toggleMiniSidebar}
          Icon={MdLogout}
          setActive={() => {}}
          active={false}
          index={1}
          text="Sign out"
        />
      </div>
    </div>
  );
}

function SidebarButton({
  index,
  text,
  active,
  setActive,
  Icon,
  hideText,
  backgroundColor,
  className,
}: {
  index: number | string;
  text: string;
  active: boolean;
  setActive: () => void;
  Icon: IconType;
  hideText: boolean;
  backgroundColor?:string;
  className?:string; 
}) {
  return (
    <button
      onClick={() => setActive()}
      key={index}
      style={{backgroundColor : backgroundColor != "" ? backgroundColor : ''}}
      className={`${active ? "sidebar__button__active" : "sidebar__button"}  ${className}`}
    >
      <div>
        <div>
          <Icon size={22} />
        </div>
        {!hideText && <p>{text}</p>}
      </div>
    </button>
  );
}

function MiniSidebarButton({
  index,
  text,
  active,
  setActive,
  Icon,
}: {
  index: number | string;
  text: string;
  active: boolean;
  setActive: () => void;
  Icon: IconType;
}) {
  return (
    <button
      onClick={() => setActive()}
      key={index}
      className={`${active ? "sidebar__button__active" : "sidebar__button"}`}
    >
      <div>
        <Icon size={22} />
      </div>
      <p>{text}</p>
    </button>
  );
}

export default Sidebar;
