import React from "react";
import "../dist/css/Home.css";
import Receipt from "./Receipt";
import { IoArrowUp, IoImage } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import UserProfile from "./UserProfile";
import { IconType } from "react-icons";
import NFT, { NFTContainer } from "./NFT";
import Coin from "./Coin";

function Home() {
  return (
    <div className="home">
      <div>
        <div>
          <h1>Dashboard</h1>
          <div>
            {/* toggle switch */}
            <div>
              <div>Wallet</div>
              <div>Multisig</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <UserProfile />
        </div>
      </div>
      <div>
        <Receipt />
      </div>
      <div>
        <Coin />
      </div>
      <div>
        <NFTContainer />
      </div>
    </div>
  );
}

export function CustomIconButton({
  Icon,
  iconColor,
  backgroundColor,
}: {
  Icon: IconType;
  iconColor?: string;
  backgroundColor?: string;
}) {
  return (
    <button
      className="custom__icon__button"
      style={{ backgroundColor: backgroundColor != "" ? backgroundColor : "" }}
    >
      <Icon size={18} color={iconColor} />
    </button>
  );
}

export default Home;
