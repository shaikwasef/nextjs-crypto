import Layout from '../../components/SearchBar/Layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
//styles
import styles from './Coin.module.css';
import { CoinInterface } from '../../interfaces/components/pages/coin/Coin.interface';

export default function Coin( {coin}:CoinInterface) {
    console.log(coin)
    return (
        <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            <img
              src={coin.image.large }
              alt={coin.name}
              className={styles.coin_image}
            />
            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_ticker}>{coin.symbol}</p>
            <p className={styles.coin_current}>
              {coin.market_data.current_price.usd}
            </p>
          </div>
        </div>
      </Layout>
    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const {data}   = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    return {
      props: {
        coin :data,
      },
    }
  }
  