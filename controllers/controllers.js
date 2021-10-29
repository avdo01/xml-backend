const express = require('express');
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const { parseString } = require('xml2js');

module.exports.sendTestApi = (req,res) => {
    console.log('URL', req.url);

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

    console.log('URL:',req.url);
    parseString(xmldata, (err, result) => {
        if(err){
            console.log('GRESKA', err);
        }

        let temp = JSON.stringify(result);
        res.json(temp);
    }); 
}

module.exports.sendRealXML = async (req,res) => {
    console.log('URL:',req.url);
    var xmlFile;

    const f = (result) => {
        if(result){
            xmlFile = result;
            res.json(xmlFile);
        }
    }

    await parser.on('error', function(err) { console.log('Parser error', err); });

    var data = '';
    const file = await https.get('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/real_ltcompositeindex.xml', function(res) {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          res.on('data', function(data_) { data += data_.toString(); });
          res.on('end', function() {
            console.log('data', data);
            parser.parseString(data, function(err, result) {
              console.log('FINISHED', err, result);
              f(result);
            });
          });
        }
      });
    
    
    // res.json(file);
    // console.log('XML data:', xmlFile);
    // res.json(xmlFile);
}

