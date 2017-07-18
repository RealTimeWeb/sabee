const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);

$('<h1>Hello</h1>').appendTo('body');
console.log($('h1').text());