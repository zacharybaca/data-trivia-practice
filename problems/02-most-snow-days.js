/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/
function getMaxSnowDays(seasonInfo) {
        let sumArr = [];

        for (let j = 0; j < seasonInfo.length; j++) {
            let seasonObj = seasonInfo[j]
            for (let key in seasonObj) {
                if (key === "snowDays") {
                    sumArr.push(seasonObj[key])
                }
            }
        }
        return sumArr.reduce((acc, currVal) => acc + currVal, 0);
}

function citiesWithMostSnowDays(climateData) {
    // Your code here
    let amountOfDays = 0;
    let snowiestCity;
    let newArr = [];
    for (let i = 0; i < climateData.length; i++) {
        let seasonInfo = climateData[i].monthlyAvg;
        let snowDays = getMaxSnowDays(seasonInfo);
        if (snowDays > amountOfDays) {
            amountOfDays = snowDays;
            snowiestCity = {"city": `${climateData[i].city}, ${climateData[i].country}`, "totalSnowDays": amountOfDays};
        }
    }
    newArr.push(snowiestCity);
    return newArr;
}

console.log(citiesWithMostSnowDays(climateData));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
