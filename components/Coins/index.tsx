import React from 'react'
import clsx from 'clsx';
import Link from 'next/link'
//css
import styles from './Coins.module.css'
//interfaces
import { CoinInterface } from '../../interfaces/components/Coins/Coins.interface'

function Coins({name , id , symbol ,price , marketcap , volume , image , priceChange } : CoinInterface) {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
        <a>
            <div className ={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name} 
                    className={styles.coin_img} />
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                </div>
                <div className={styles.coin_data}>
                    <p className={styles.coin_price}>${price.toLocaleString()}</p>
                    <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className={clsx(styles.coin_percent,styles.red)}>
                            {priceChange.toFixed(2)}%
                        </p>
                    ) :
                    (
                        <p className={clsx(styles.coin_percent,styles.green)}>
                            {priceChange.toFixed(2)}%
                        </p>
                    )}
                    <p className={styles.coin_marketca}>
                        Mkt Cap : ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        </a>
        
        </Link>
    )
}

export default Coins
