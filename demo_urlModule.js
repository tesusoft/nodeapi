var url = require('url');
var adr = 
'http://localhost:8080/default.htm?year=2024&month=january';

var q = url.parse(adr, true);
//returns the localhost:8080
console.log(q.host);
//return default.htm : pathname
console.log(q.pathname);
//return the query string
console.log(q.search);
//return an object { year : 2024, month: january}
var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);