const EleventyFetch = require("@11ty/eleventy-fetch");

var lyneversion = require('../../lyneversion');

let url = lyneversion.url+lyneversion.branch+lyneversion.path+"expansion-panel/expansion-panel-content"+lyneversion.dok;

const md = async function() {
  return EleventyFetch(url, {
      duration: "1s",
      type: "text"
    });
}

module.exports = async function() {
    let result = await md();
    return result;
  };
