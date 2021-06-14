import styles from './Search.module.css'

interface SeacrhBarProps {
    type : string ;
    placeholder : string;
}

export default function SearchBar({...rest} : SeacrhBarProps){
    return (
        <div className = {styles.coin_search}>
            <input className = {styles.coin_input} {...rest} />
        </div>
    )
}
