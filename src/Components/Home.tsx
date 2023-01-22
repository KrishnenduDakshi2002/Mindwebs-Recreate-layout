import React from "react";
import "../dist/css/Home.css";
import Receipt from "./Receipt";
import { IoArrowUp, IoImage } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import UserProfile from "./UserProfile";
import { IconType } from "react-icons";
import NFT from "./NFT";
import Coin from "./Coin";
import NFT1 from '../assets/nft-1.jpeg';
import NFT2 from '../assets/nft-2.jpeg';
import NFT3 from '../assets/nft-3.jpeg';
import NFT4 from '../assets/nft-4.png';
import NFT5 from '../assets/nft-5.jpeg';
import NFT6 from '../assets/nft-6.jpeg';
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
        <div>
          <Coin/>
        </div>
        <div>
          {/* Icon + text   Price container */}
          <div>
            {/* icon and text container */}
            <div>
              {/* icon container */}
              <div>
                <CustomIconButton
                  Icon={BsImage}
                  iconColor="#932CF3"
                  backgroundColor="#f2f1f9"
                />
              </div>
              {/* NFT text */}
              <div>
                <p>NFTs</p>
              </div>
            </div>
            <div>
              <p>$576.88</p>
            </div>
          </div>
          <div className="scrollbar-hidden">
            <NFT images={[NFT1,NFT2,NFT3]} title="Rariable" price="$411.88" noOfPhotos={36}/>
            <NFT images={[NFT4,NFT5,NFT6]} title="BitTeam Marketplace" price="$165.00" noOfPhotos={4}/>
            {/* <NFT /> */}
          </div>
        </div>
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
      <Icon size={22} color={iconColor} />
    </button>
  );
}

export default Home;
