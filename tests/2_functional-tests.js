const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
/*
suite('Functional Tests', function() {
  this.timeout(5000);
  test("#1 Translation with text and locale fields: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          text: 'Mangoes are my favorite fruit.',
          locale: 'american-to-british',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { text: 'Mangoes are my favorite fruit.',
                                     translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.', })
          done();
        });
  });
  test("#2 Translation with text and invalid locale field: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          text: 'Mangoes are my favorite fruit.',
          locale: 'american-to-chinese',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { error: 'Invalid value for locale field' })
          done();
        });
  });
  test("#3 Translation with missing text field: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          locale: 'american-to-british',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { error: 'Required field(s) missing' });
          done();
        });
  });
  test("#4 Translation with missing locale field: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          text: 'Mangoes are my favorite fruit.',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { error: 'Required field(s) missing' } );
          done();
        });
  });
  test("#5 Translation with empty text: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          text: '',
          locale: 'american-to-british',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { error: 'No text to translate' } );
          done();
        });
  });
  test("#6 Translation with text that needs no translation: POST request to /api/translate", (done) => {
    chai.request(server)
        .post({
          text: 'Hello!',
          locale: 'american-to-british',
        })
        .end( (err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          assert.include(res.body, { translation: "Everything looks good to me!" } );
          done();
        });
  });
});
*/