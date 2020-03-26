const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const countries = require("i18n-iso-countries");

const doCovidReq = async (isoCode) => {
    let returnValueRaw = await fetch('https://covidapi.info/api/v1/country/' + isoCode);
    let returnValue = await returnValueRaw.json();
    return returnValue;
};

router.get('/', function(req, res, next) {
    doCovidReq(`${req.query.country}`)
        .then(countryJSON => {
            console.log(countryJSON);
            res.render('ps4',
                {country: countries.getName(`${req.query.country}`, "en"),
                 cases: countryJSON.result})});
});

module.exports = router;