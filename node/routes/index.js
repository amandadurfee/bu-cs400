//import {COVIDCountries} from "../../src/app/usaCovid";

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const COVIDCountries = [
  {
    isoCode: 'USA',
    count: 95,
    date: {
      confirmed: 938154,
      deaths: 53755,
      recovered: 100372
    }
  },
  {
    isoCode: 'CHN',
    count: 95,
    date: {
      confirmed: 83909,
      deaths: 4636,
      recovered: 78175
    }
  },
  {
    isoCode: 'ITA',
    count: 95,
    date: {
      confirmed: 195351,
      deaths: 26384,
      recovered: 63120
    }
  }
];
// router.get('/:iso', function(req, res, next) {
//   console.log(req.body);
//   // if usa do the usa thing,
//   res.send('hello world.');
// });


const doCovidReq = async (isoCode) => {
  let returnValueRaw = await fetch('https://covidapi.info/api/v1/country/' + isoCode);
  let returnValue = await returnValueRaw.json();
  return returnValue;
};

async function process (json) {
  let array = [];
  for (const key in json) {
    console.log("Key: " + key +", Confirmed Value: " + json[key].confirmed);
    await array.push({date: key, values: json[key]});
  }
  return array;
};

router.get('/:iso', function(req, res, next) {
  doCovidReq(`${req.url.slice(1)}`)

    .then(countryJSON => {
      process(countryJSON.result)
        .then(dates => {
          console.log(dates);
          res.send(dates);
        })
    })
    .catch(error => console.log(error))
});

module.exports = router;
