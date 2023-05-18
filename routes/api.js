'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body);
      //console.log(req.body.locale);
      if (!req.body.locale || !req.body.text) {

        if (req.body.text == ''){
          
          res.json({ error: 'No text to translate' });
        } else res.json( { error: 'Required field(s) missing' } );
        
      } else if (req.body.locale == 'american-to-british' || req.body.locale == 'british-to-american' ) {
        
        let translation = translator.process(req.body.text, req.body.locale);

        if (translation.translation == req.body.text) {
          res.json( { text: translation.text,
                      translation: "Everything looks good to me!" });
          
        } else {
          console.log(translation.translation);
          res.json( { text: translation.text, 
                      translation: translation.translation });
        }
        
      } else {
          
        res.json({ error: 'Invalid value for locale field' });
      }
    });
};
