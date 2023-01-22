import React from "react";
import "../dist/css/NFT.css";
import { ImStack } from "react-icons/im";
import { CustomIconButton } from "./Home";
import { BsImage } from "react-icons/bs";
import NFT1 from "../assets/nft-1.jpeg";
import NFT2 from "../assets/nft-2.jpeg";
import NFT3 from "../assets/nft-3.jpeg";
import NFT4 from "../assets/nft-4.png";
import NFT5 from "../assets/nft-5.jpeg";
import NFT6 from "../assets/nft-6.jpeg";

function NFTContainer() {
  return (
    <div className="nft__container">
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
        <NFT
          images={[NFT1, NFT2, NFT3]}
          title="Rariable"
          price="$411.88"
          noOfPhotos={36}
        />
        <NFT
          images={[NFT4, NFT5, NFT6]}
          title="BitTeam Marketplace"
          price="$165.00"
          noOfPhotos={4}
        />
      </div>
    </div>
  );
}

function NFT({
  images,
  title,
  price,
  noOfPhotos,
}: {
  images: Array<string>;
  title: string;
  price: string;
  noOfPhotos: number;
}) {
  return (
    <div className="nft">
      {/* cards container */}
      <div>
        {/* cards */}
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} />
          </div>
        ))}
        {/* stack icon */}
        <div>
          <ImStack size={12} />
          <span>{noOfPhotos}</span>
        </div>
      </div>

      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default NFT;
export { NFTContainer };
