import styles from './Card.module.css'
const Card = ({ city }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>{city.name}</h3>
      <div className={styles.card_body}>
        <div className={styles.card_main}>
          <i></i>
          <p>12~</p>
        </div>
        <p>Partly Cloudy, Gentle Breeze</p>
        <div className={styles.card_data}>
          <p>Wind speed</p>
          <p>Wind direction</p>
          <p>Cloudcover</p>
        </div>
      </div>
    </div>
  )
}
export default Card
