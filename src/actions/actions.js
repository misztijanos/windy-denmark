import axios from "axios";
import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,
  CITY_WEATHER_ADD,
} from "../constants/constants";

import data from "../data/danishCities.json";

export const listCities = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST });
    if (!data) {
      throw Error("couldn't read cities from local file");
    }
    dispatch({ type: CITY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CITY_LIST_FAIL, payload: error });
  }
};

export const addWeather = (city) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=bbef49bbc66ff60a687a602fc3b73084`
    );
    if (!data) {
      throw Error("couldn't read city weather");
    }
    data.timestamp = Date.now();
    dispatch({ type: CITY_WEATHER_ADD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
