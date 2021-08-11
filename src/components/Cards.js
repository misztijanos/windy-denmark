//32403c19ce1934f7329c58950d709aba

import Card from "./Card";
import Loader from "./Loader";
import Message from "./Message";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listCities } from "../actions/actions";

const Cards = () => {
  const [numCities, setNumCities] = useState(9);

  const dispatch = useDispatch();

  const cityList = useSelector((state) => state.cityList);
  const { loading, error, cities } = cityList;

  useEffect(() => {
    if (!cities.length) {
      dispatch(listCities());
    }
  }, [cities, dispatch]);

  return (
    <div className="cards-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        cities.map(
          (city, index) =>
            index < numCities && <Card key={city.id} city={city} />
        )
      )}
      {numCities < cities.length && (
        <button onClick={() => setNumCities(numCities + 9)}>Load more</button>
      )}
    </div>
  );
};
export default Cards;
