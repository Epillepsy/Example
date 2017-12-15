let request = require('request');
let cheerio = require('cheerio');

const url = "https://medium.com";
const articleClass = ".u-flex.u-sizeFullWidth.u-height260.u-sm-flexWrap.u-xs-heightAuto.u-borderBox.u-marginBottom20.u-backgroundColorWhite.u-overflowHidden.u-relative.u-borderRadius2.u-borderBlackLightest";
const titleClass = "'h3.ui-h3.ui-xs-clamp2'";

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(body);
        let results = $(articleClass);
        results.each((i, elem) => {
          console.log($(elem).find(titleClass).text(), i);
        });
    }
})

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36';

const query = {
            method: 'GET',
            url: 'https://www.google.fr/search',
            timeout: 5000,
            headers: { 'User-Agent': USER_AGENT },
            qs: { q: `Medium` }
        };

request(query, (error, response, body) => {
  if (!error && response.statusCode == 200) {
      let $ = cheerio.load(body);
      let results = $('div._OKe');
      const name = results.find('div#rhs_title', 'span').first().text();
      const address = results.find('div._eFb div[data-local-attribute="d3adr"] span._Xbe').text();
      console.log(name);
  }
});
