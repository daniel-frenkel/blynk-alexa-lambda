const http = require('http');

exports.handler = async (event, context, callback) => {

    console.log(event.request.intent)
    if (event.request.intent.slots.OnOff.value == "on") {
        var responseJson =  {
            version: "1.0",
            response: {
              outputSpeech:
               {
                 type: "PlainText",
                 text: "OK",
               },
              shouldEndSession: true
              },
              sessionAttributes: {}
        };
        console.log("starting request...")
        return new Promise((resolve, reject) => {
        const options = {
            host: 'blynk-cloud.com',
            path: '/<your auth token>/update/V1?value=1',
            port: 80,
            method: 'GET'
        };

        const req = http.request(options, (res) => {
          resolve('Success');
          callback(null,responseJson);
        });

        req.on('error', (e) => {
          reject(e.message);
          var responseJson =  {
            version: "1.0",
            response: {
              outputSpeech:
               {
                 type: "PlainText",
                 text: "I got an error from Blink",
               },
              shouldEndSession: true
              },
              sessionAttributes: {}
        };
        callback(null,responseJson);
        });

        // send the request
        req.write('');
        req.end();
    });
    } else {
        return new Promise((resolve, reject) => {
            var responseJson =  {
            version: "1.0",
            response: {
              outputSpeech:
               {
                 type: "PlainText",
                 text: "OK",
               },
              shouldEndSession: true
              },
              sessionAttributes: {}
        };
        const options = {
            host: 'blynk-cloud.com',
            path: '/<your auth token>/update/V1?value=0',
            port: 80,
            method: 'GET'
        };

        const req = http.request(options, (res) => {
          resolve('Success');
          callback(null,responseJson);
        });

        req.on('error', (e) => {
          reject(e.message);
          var responseJson =  {
            version: "1.0",
            response: {
              outputSpeech:
               {
                 type: "PlainText",
                 text: "I got an error from Blink",
               },
              shouldEndSession: true
              },
              sessionAttributes: {}
        };
        callback(null,responseJson);
        });

        // send the request
        req.write('');
        req.end();
    });
    }
};
