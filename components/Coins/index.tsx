import React from 'react'
//interfaces
import { CoinInterface } from '../../interfaces/components/Coins/Coins.interface'

function Coins({name , id , symbol , marketcap , volume , image , priceChange } : CoinInterface) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Coins
