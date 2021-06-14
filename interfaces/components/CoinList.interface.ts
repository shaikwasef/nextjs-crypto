
export interface filteredCoinInterface {
    key : string;
    name : string ;
    id : string ;
    current_price : number ;
    symbol : string ;
    market_cap : number ;
    total_volume : number ;
    image  :string ;
    price_change_percentage_24h : number ;
}

export interface filterCoinsListInterface {
        filteredCoins : filteredCoinInterface[];
}



