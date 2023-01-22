import React from "react";
import "../dist/css/NFT.css";
import {ImStack} from 'react-icons/im';
function NFT({images,title,price,noOfPhotos}:{images:Array<string>,title:string,price:string;noOfPhotos:number}) {
  return (
    <div className="nft">
      {/* cards container */}
      <div>
        {/* cards */}
        {
          images.map((image,i)=>(
          <div key={i}>
            <img src={image}/>
          </div>
          ))
        }
        {/* stack icon */}
        <div>
          <ImStack size={12}/>
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
