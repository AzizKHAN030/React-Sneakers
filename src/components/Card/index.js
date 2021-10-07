import styles from './Card.module.scss';

function Card(props) {
    return(
        <div className={styles.card}>
        <div className={styles.favourite}>
        <img src="./img/heart_liked.svg" alt="unliked" />
        </div>
        <img width = {133} height = {112} src={props.url} alt="" />
        <h5>{props.name}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>{props.price} сум.</b>
        </div>
        <button className={styles.button} onClick={props.onClick}>
            <img  width={11} heigth={11} src="./img/plus.svg" alt="" />
        </button>
        </div>
        </div>
    
    )
}

export default Card;