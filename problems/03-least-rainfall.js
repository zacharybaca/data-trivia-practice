/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/
function getMonthFromDate(month) {
    let newDate = new Date(`${month} 20, 69 00:20:18`)
    let monthNumber = newDate.getMonth();

    return monthNumber;
}
function getMonthOfRainfall(data, monthOfYear) {
    let month = getMonthFromDate(monthOfYear);

        let entries = Object.entries(data)
        for (let [key, value] of entries) {
            if (key === "monthlyAvg") {
                return value[month].rainfall
            }
        }
    }

function leastRainfall(climateData, month) {
    // Your code here
    let newArr = [];
    let leastRainFall = 10;

    for (let i = 0; i < climateData.length; i++) {
        let monthlyRainFall = getMonthOfRainfall(climateData[i], month);
        if (monthlyRainFall <= leastRainFall) {
            newArr.push(`${climateData[i].city}, ${climateData[i].country}: ${monthlyRainFall} mm`);
        }
    }
    return newArr;
}

 console.log(leastRainfall(climateData, "August"));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ leastRainfall ];
