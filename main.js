// Mock DOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
global.window = window;
const { document } = window.window;
global.document = document;
window.console = global.console;

// Load JQuery
$ = require('jquery')(window);
global.jQuery = require('jquery');
$ = jQuery;
//global.jQuery.fn = {};

var clonedInstanceMethods = {};
for (var instancemethod in jQuery.prototype){
    Object.assign(clonedInstanceMethods,jQuery.prototype[instancemethod])
}

// Knockout
const ko = require('knockout');
// Bootstrap
const bootstrap = require('bootstrap');

$('<h1>Hello</h1>').appendTo('body');
console.log($('h1').text());