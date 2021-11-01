const express = require('express');
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const { parseString } = require('xml2js');
const { getXMLFileFromLink } = require('../functions/functions');

module.exports.homeRouteApi = (req,res) => {
    const homeObject = {
        route: '/',
        content: {
            project: 'MBP',
            author: 'avdo',
        }
    }

    res.json(homeObject);
}

module.exports.sendTestApi = (req,res) => {
    const object = {
        email: "email@email.com",
        user: "MBP",
        title: "Backend for XML files"
    };

    res.json(object);
}

module.exports.sendTestXML = (req,res) => {
    var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +
    '<Student>' +
        '<PersonalInformation>' +
            '<FirstName>Sravan</FirstName>' +
            '<LastName>Kumar</LastName>' +
            '<Gender>Male</Gender>' +
        '</PersonalInformation>' +
        '<PersonalInformation>' +
            '<FirstName>Sudheer</FirstName>' +
            '<LastName>Bandlamudi</LastName>' +
            '<Gender>Male</Gender>' +
        '</PersonalInformation>' +
    '</Student>';

    parseString(xmldata, (err, result) => {
        if(err){
            console.log('GRESKA', err);
        }

        let temp = JSON.stringify(result);
        res.json(temp);
    }); 
}

module.exports.sendXML1 = async (req,res) => {
    const f = (result) => {
        if(result){
            res.json(result);
        }
    }

    // ​Daily Treasury Yield Curve Rates

    getXMLFileFromLink('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/yield.xml', f);
}

module.exports.sendXML2 = async (req,res) => {
    const f = (result) => {
        if(result){
            res.json(result);
        }
    }

    // Daily Treasury Real Yield Curve Rates


    getXMLFileFromLink('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/real_yield.xml', f);
}

module.exports.sendXML3 = async (req,res) => {
    const f = (result) => {
        if(result){
            res.json(result);
        }
    }

    // Daily Treasury Bill Rates

    getXMLFileFromLink('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/daily_treas_bill_rates.xml', f);
}

module.exports.sendXML4 = async (req,res) => {
    const f = (result) => {
        if(result){
            res.json(result);
        }
    }

    // Daily Treasury Long-Term Rates and Extrapolation Factors

    getXMLFileFromLink('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/ltcompositeindex.xml', f);
}

module.exports.sendXML5 = async (req,res) => {
    const f = (result) => {
        if(result){
            res.json(result);
        }
    }

    // Daily Treasury Real Long-Term Rate Averages

    getXMLFileFromLink('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/real_ltcompositeindex.xml', f);
}


