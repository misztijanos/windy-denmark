import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,
} from '../constants/constants'

export const cityListReducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case CITY_LIST_REQUEST:
      return { loading: true, cities: [] }
    case CITY_LIST_SUCCESS:
      return { loading: false, cities: action.payload }
    case CITY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
