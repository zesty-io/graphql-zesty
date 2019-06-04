if (process.argv.length <= 2) {
  
  console.error('Expecting a argument which is your zesty.io instance url');
  
}
let base = process.argv[2];

const http = require('http');
const https = require('https');
const fs = require('fs');

// remove trailing slash if there
if( (/\/$/).test(base) ){
    base = base.substring(0, base.length - 1);
}
// decide the protocol to make the request
const protocol = /http:/.test(base) ? http : https;

const file = fs.createWriteStream("schema.graphql");
const request = protocol.get(base+"/-/gql/zesty.schema", function(response) {
  response.pipe(file);
});

const resolvers = fs.createWriteStream("resolvers.js");
const request2 = protocol.get(base+"/-/gql/resolvers.js", function(response) {
  response.pipe(resolvers);
});

const datasource = fs.createWriteStream("datasource.js");
const request3 = protocol.get(base+"/-/gql/datasource.js", function(response) {
  response.pipe(datasource);
});