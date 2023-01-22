import React from 'react'
import '../dist/css/Coin.css'
import { CustomIconButton } from './Home';
import { RiBitCoinLine } from 'react-icons/ri';
function Coin() {
  return (
    <div className='coin__container'>
      <div>
        <div>
          <CustomIconButton Icon={RiBitCoinLine} iconColor='#00B1B5' backgroundColor='#ECF5F8'/>
          <p>Coins</p>
        </div>
        <div>
        $1,541.08
        </div>
      </div>
      <div>
        {
          Array.from({length:4},(v,i)=>
          <CoinTile/>
          )
        }
      </div>
    </div>
  )
}

function CoinTile(){
  return(
    <div className='cointile'>
      <div>
        <div></div>
        <div>Coin name</div>
      </div>
      <div>
      7.338080
      </div>
    </div>
  )
}
export default Coin;