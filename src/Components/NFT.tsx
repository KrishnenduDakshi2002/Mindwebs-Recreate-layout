import React from "react";
import "../dist/css/NFT.css";
import {ImStack} from 'react-icons/im'
function NFT() {
  return (
    <div className="nft">
      {/* cards container */}
      <div>
        {/* cards */}
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        {/* stack icon */}
        <div>
          <ImStack size={12}/>
          <span>36</span>
        </div>
      </div>

      <div>
        <p>Rarible</p>
        <p>$411.88</p>
      </div>
    </div>
  );
}

export default NFT;
