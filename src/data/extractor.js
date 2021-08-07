let cities = require('./currentCityList.json')
const fs = require('fs')
let danishCities = cities.filter((city) => city.country === 'DK')
console.log(`Successfully extracted ${danishCities.length} Danish cities`)
const data = JSON.stringify(danishCities)
fs.writeFile('danishCities.json', data, (err) => {
  if (err) console.log(err)
  else {
    console.log('File written successfully\n')
  }
})
