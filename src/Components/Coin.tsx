import React from 'react'
import '../dist/css/Coin.css'
import { CustomIconButton } from './Home';
import { RiBitCoinLine } from 'react-icons/ri';
const COINS =[
  {
    name: 'Decimal',
    type: 'DEL',
    price : 7.338080
  },
  {
    name: 'BitTeam Token',
    type: 'BTT',
    price : 635.467521
  },
  {
    name: 'Minster Network',
    type: 'BIP',
    price : 0.207157
  },
  {
    name: 'Wordlex',
    type: 'WDX',
    price : 20.492678
  },
]
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
          COINS.map((coin,i)=>
          <CoinTile {...coin}/>
          )
        }
      </div>
    </div>
  )
}

function CoinTile({name,type,price,image}:{name:string;type:string;price:number;image?:string}){
  return(
    <div className='cointile'>
      <div>
        <div></div>
        <div>{name}
          <span>{type}</span>
        </div>
      </div>
      <div>
      {price}
      </div>
    </div>
  )
}
export default Coin;