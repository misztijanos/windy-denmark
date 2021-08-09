import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,
} from '../constants/constants'

import data from '../data/danishCities.json'

export const listCities = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST })
    if (!data) {
      throw Error("couldn't read cities from local file")
    }
    dispatch({ type: CITY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CITY_LIST_FAIL, payload: error })
  }
}
