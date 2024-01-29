
//var uc = require('upper-case');
// import uppercase from './node_modules/upper-case';

var http = require('http');
import { upperCase } from "upper-case";

//import {upperCase} from 'upper-case' ;
//const { upperCase } = require('upper-case/dist');

http.createServer(function (req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(upperCase("Hello World!<br>"));
//res.write("NodeJs is really interesting<br>");
//res.write("Let's have fun together<br>");
res.end();
}).listen(8080);