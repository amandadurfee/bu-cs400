//import {COVIDCountries} from "../../src/app/usaCovid";

const express = require('express');
const router = express.Router();
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


router.get('/:iso', function(req, res, next) {
  // res.send(COVIDCountries[0].date);
  res.send(COVIDCountries);
});
module.exports = router;
