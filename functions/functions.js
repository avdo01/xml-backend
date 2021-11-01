const express = require('express');
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const { parseString } = require('xml2js');

module.exports.getXMLFileFromLink = async (urlOfXML, f) => {
    await parser.on('error', function(err) { console.log('Parser error', err); });

    var data = '';
    const file = await https.get(urlOfXML, function(res) {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          res.on('data', function(data_) { data += data_.toString(); });
          res.on('end', function() {
            // console.log('data', data);
            parser.parseString(data, function(err, result) {
            //   console.log('FINISHED', err, result);
              if(err){
                  console.log('error', err);
              }
              f(result);
            });
          });
        }
      });
}