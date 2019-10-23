var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: [
    "*.drupal.org",
    "*.dreditor.github.io",
    "*.devdrupal.org"
  ],
  contentScriptFile: data.url("%PKG.NAME%.js")
});
