const { cities } = require('./datasets/cities');

const cityPrompts = {
  // Return an array of the names of the Western cities.
  // Hint: Make sure to include south and midwest too!
  // ["denver", "chicago", "houston", "phoenix", "seattle"]
  locateAllWesternCities() {
    const citiesArray = Object.keys(cities)
    
    return results = citiesArray.filter(city => {
      return cities[city].region.includes('West') || cities[city].region.includes('west') 
    })
  },

  // Return an array of the names of the cities in alphabetical order.
  // ex: ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];
  alphabatizeCities() {
    return Object.keys(cities).sort()
  },

  // Return an array of the the state abbreviations.
  // ex: ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"]
  listStateAbbreviations() {
    const cityNames = Object.keys(cities)

    return cityNames.map(city => {
      return cities[city].state.slice(0, 2)
    })
  },

  // Return all of the top attractions for a given region. 
  // ex: Passing in 'southeast' should return 
  // [
  //   { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
  //   { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
  //   { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
  // ]
  findAttractionsByRegion(region) {
    const cityNames = Object.keys(cities)

    return cityNames.reduce ((acc, city) => {
      let state = cities[city].state.slice(5).toLowerCase()
      
      if (cities[city].region === region) {
        acc.push({[state]: cities[city].topAttractions})
      }

      return acc
    }, [])
  }
};

module.exports = cityPrompts;
