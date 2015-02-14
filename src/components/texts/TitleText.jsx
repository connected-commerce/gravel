var createText = require("./_createText");

var TitleText = createText(
  {
    "styles":   {
                  "fontSize":                     20,
                  "fontWeight":                   500,
                  "opacity":                      .87,
                },

    "truncate": true
  }
);

module.exports = TitleText;
