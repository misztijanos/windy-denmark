//32403c19ce1934f7329c58950d709aba
import axios from 'axios'
import Card from './Card'
import Loader from './Loader'
import Message from './Message'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listCities } from '../actions/actions'

const Cards = () => {
  const dispatch = useDispatch()
  const logData = async () => {
    try {
      const { data } = await axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=32403c19ce1934f7329c58950d709aba'
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const cityList = useSelector((state) => state.cityList)
  const { loading, error, cities } = cityList

  useEffect(() => {
    dispatch(listCities())
    logData()
  }, [dispatch])

  return (
    <div className="cards-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        cities.map((city) => <Card key={city.id} city={city} />)
      )}
    </div>
  )
}
export default Cards
