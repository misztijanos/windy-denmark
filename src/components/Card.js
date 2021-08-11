import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Card.module.css";
import { addWeather } from "../actions/actions";
const Card = ({ city }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("card.js:");
    console.log(city);
    if (!city.weather) {
      dispatch(addWeather(city));
    }
  }, [dispatch, city]);

  const cutMunicipality = (name) => {
    let arr = name.split(" ");
    if (arr[arr.length - 1] === "Municipality") {
      arr.pop();
    }
    return arr.join(" ");
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>{cutMunicipality(city.name)}</h3>
      <div className={styles.card_body}>
        <div className={styles.card_main}>
          <i></i>
          {city.main && <p>{`${city.main.temp}°`}</p>}
        </div>
        <p>Partly Cloudy, Gentle Breeze</p>
        <div className={styles.card_data}>
          <p>Wind speed</p>
          <p>Wind direction</p>
          <p>Cloudcover</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
