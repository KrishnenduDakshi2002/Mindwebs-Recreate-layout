import "../dist/css/Receipt.css";
import { IoArrowUp, IoLogoBitcoin } from "react-icons/io5";
import { IconType } from "react-icons";
import { IoIosArrowDown, IoMdCheckmarkCircle } from "react-icons/io";
import { HiQrCode } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { CustomIconButton } from "./Home";
function Receipt() {
  return (
    <div className="receipt__container">
      <div>
        <CustomIconButton Icon={IoArrowUp} iconColor="#00BBFE" backgroundColor="#ddecf6"/>
        <div>
          <p>Send Coins</p>
        </div>
        <div>
          <p>
            Transfer your coins to whoever you want - friends, family or
            business partners
          </p>
        </div>
      </div>
      <div>
        <div>
          <Button
            LeftText="OxaeD3...7a98"
            LeftIcon={FaCheck}
            RightIcon={HiQrCode}
            LeftButtonBackground="#02B7BA"
            color="white"
          />
        </div>
        <div>
          <Button
            LeftText="BitTeam Token"
            RightText="BTT"
            LeftIcon={IoLogoBitcoin}
            RightIcon={IoIosArrowDown}
            LeftButtonBackground="#0063F4"
            color="white"
          />
        </div>
        <div>
          <Button RightText="BTT" LeftText="48.26" color=""/>
        </div>
        <div>
          <button>
            <div>
              <HiPlus size={20}/>
              <p>Add receipent</p>
            </div>
          </button>
        </div>
        {/* Toggle button and Advanced text */}
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <p>Advanced</p>
          </div>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

function Button({
  RightIcon,
  LeftIcon,
  LeftText = "",
  RightText = "",
  isTransparent,
  LeftButtonBackground,
  color,
  LeftIconSize,
}: {
  RightIcon?:IconType;
  LeftIcon?: IconType;
  LeftText?: string;
  RightText?: string;
  isTransparent?: boolean;
  LeftButtonBackground?: string;
  color: string;
  LeftIconSize?: number;
}) {
  console.log(typeof RightIcon);
  return (
    <button
      className={`receipt__button ${
        isTransparent ? "receipt__button_bg_transparent" : ""
      }`}
    >
      {LeftIcon != null && (
        <div
          style={{
            backgroundColor:
              LeftButtonBackground !== ""
                ? LeftButtonBackground
                : "transparent",
          }}
        >
          <LeftIcon color={color} size={LeftIconSize} />
        </div>
      )}
      <p>
        {LeftText}
        <span>{RightText}</span>
      </p>
      {RightIcon != null ? (
        <div>
          <RightIcon size={20} />
        </div>
      )
        :(
          <div className="max__button__container">
            MAX
          </div>
        )
    }
    </button>
  );
}

export default Receipt;
