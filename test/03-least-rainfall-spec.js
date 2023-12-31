const { expect } = require('chai');

const [ leastRainfall ] = require('../problems/03-least-rainfall');

const climateData = require('../climate-data');

describe('leastRainfall()', function () {

    const updated = leastRainfall(climateData, "August");

    const result = [
        'Athens, Greece: 5.8 mm',
        'Dubai, United Arab Emirates: 1.5 mm',
        'Granada, Spain: 6 mm',
        'Jerusalem, Israel: 0 mm',
        'Las Vegas NV, United States: 9.1 mm',
        'Lisbon, Portugal: 6 mm',
        'Los Angeles CA, United States: 0.2 mm',
        'Madrid, Spain: 8.5 mm',
        'Oakland CA, United States: 0.3 mm',
        'Rio de Janeiro, Brazil: 4.7 mm',
        'San Francisco CA, United States: 0.3 mm',
        'Sevilla, Spain: 0.8 mm',
        'Taghazout, Morocco: 1.3 mm',
        'Tel Aviv, Israel: 5.6 mm'
    ];

    const updated2 = leastRainfall(climateData, "December");

    const result2 = [
        'Bangkok, Thailand: 5.8 mm',
        'Beijing, China: 2.6 mm',
        'Dubai, United Arab Emirates: 7.5 mm',
        'Kolkata, India: 3 mm',
        'Mexico City, Mexico: 0.7 mm',
        'New Delhi, India: 10 mm',
        'Santiago, Chile: 4.9 mm'
    ];


    it("returns an array", function () {
        expect(updated).to.be.an('array')
    });

    it("returns an array containing strings", function () {
        expect(updated).to.have.length.gte(1);
        expect(updated[0]).to.be.a("string");
    });

    it("returns formatted strings including city, country, and rainfall",
    function () {
        expect(updated).to.have.length.gte(1);
        expect(updated[0]).to.include(", ");
        expect(updated[0]).to.include(": ");
        expect(updated[0]).to.include(" mm");
    });

    it("correctly includes ONLY cities with a rainfall LESS THAN 10 mm only",
    function () {
        expect(updated[2]).to.include("6 mm");
        expect(updated[2]).to.include("Granada, Spain");
        expect(updated[0]).to.not.include("10.1 mm");
        expect(updated[0]).to.not.include("New Delhi");
    });

    it("returns the correct output for cities with the least rainfall",
    function () {
        expect(updated).to.deep.equal(result);
        expect(updated2).to.deep.equal(result2);
    });
});
