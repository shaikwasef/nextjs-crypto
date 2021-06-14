//libraries
import {ChangeEvent, useState} from 'react'
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'
//components
import SearchBar from '../components/SearchBar/index'
import CoinList from '../components/CoinList'
//interfaces
import {filteredCoinInterface} from '../interfaces/components/CoinList.interface'
import Layout from '../components/SearchBar/Layout'



export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [search,setSearch] = useState<string>('');
  const allCoins = data.filter(coin => coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  const handleChange = (e : ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault();
    setSearch(e.target.value?.toLocaleLowerCase());
  }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar  type = "text"  placeholder = "Search..." onChange = {handleChange}/>
        <CoinList  filteredCoins  = {allCoins} />
      </div>
    </Layout>
  )
}



export const getServerSideProps = async () => {
  const {data} : {data : Array<filteredCoinInterface> }  = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  return {
    props: {
      data,
    },
  }
}


