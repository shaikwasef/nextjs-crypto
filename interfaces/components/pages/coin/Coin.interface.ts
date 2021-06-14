export interface CoinInterface{
    coin :  { 
        id : string ;
        symbol : string ;
        name : string ;
        image : {
         large :  string ;
        }
        market_data : {
            current_price :{usd :string}
        }
    }
}