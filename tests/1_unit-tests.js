const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  
  test('#1 Translate Mangoes are my favorite fruit. to British English', (done) => {
    assert.include(translator.process('Mangoes are my favorite fruit.', 'american-to-british'), 
                  { text: 'Mangoes are my favorite fruit.',
                    translation: "Mangoes are my <span class='highlight'>favourite</span> fruit.", });
    done();
  });
  test('#2 Translate I ate yogurt for breakfast. to British English', (done) => {
    assert.include(translator.process('I ate yogurt for breakfast.', 'american-to-british'), 
                  { text: 'I ate yogurt for breakfast.',
                    translation: "I ate <span class='highlight'>yoghurt</span> for breakfast.", });
    done();
  });
  test("#3 Translate We had a party at my friend's condo. to British English", (done) => {
    assert.include(translator.process("We had a party at my friend's condo.", 'american-to-british'), 
                  { text: "We had a party at my friend's condo.",
                    translation: "We had a party at my friend's <span class='highlight'>flat</span>.", });
    done();
  });
  test("#4 Translate Can you toss this in the trashcan for me? to British English", (done) => {
    assert.include(translator.process("Can you toss this in the trashcan for me?", 'american-to-british'), 
                  { text: "Can you toss this in the trashcan for me?",
                    translation: "Can you toss this in the <span class='highlight'>bin</span> for me?", });
    done();
  });
  test("#5 Translate The parking lot was full. to British English", (done) => {
    assert.include(translator.process("The parking lot was full.", 'american-to-british'), 
                  { text: "The parking lot was full.",
                    translation: "The <span class='highlight'>car park</span> was full.", });
    done();
  });
  test("#6 Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
    assert.include(translator.process("Like a high tech Rube Goldberg machine.", 'american-to-british'), 
                  { text: "Like a high tech Rube Goldberg machine.",
                    translation: "Like a high tech <span class='highlight'>Heath Robinson device</span>.", });
    done();
  });
  test("#7 Translate To play hooky means to skip class or work. to British English", (done) => {
    assert.include(translator.process("To play hooky means to skip class or work.", 'american-to-british'), 
                  { text: "To play hooky means to skip class or work.",
                    translation: "To <span class='highlight'>bunk off</span> means to skip class or work.", });
    done();
  });
  test("#8 Translate No Mr. Bond, I expect you to die. to British English", (done) => {
    assert.include(translator.process("No Mr. Bond, I expect you to die.", 'american-to-british'), 
                  { text: "No Mr. Bond, I expect you to die.",
                    translation: "No <span class='highlight'>Mr</span> Bond, I expect you to die.", });
    done();
  });
  test("#9 Translate Dr. Grosh will see you now. to British English", (done) => {
    assert.include(translator.process("Dr. Grosh will see you now.", 'american-to-british'), 
                  { text: "Dr. Grosh will see you now.",
                    translation: "<span class='highlight'>Dr</span> Grosh will see you now.", });
    done();
  });
  test("#10 Translate Lunch is at 12:15 today. to British English", (done) => {
    assert.include(translator.process("Lunch is at 12:15 today.", 'american-to-british'), 
                  { text: "Lunch is at 12:15 today.",
                    translation: "Lunch is at <span class='highlight'>12.15</span> today.", });
    done();
  });
  test("#11 Translate We watched the footie match for a while. to American English", (done) => {
    assert.include(translator.process("We watched the footie match for a while.", 'british-to-american'), 
                  { text: "We watched the footie match for a while.",
                    translation: "We watched the <span class='highlight'>soccer</span> match for a while.", });
    done();
  });
  test("#12 Translate Paracetamol takes up to an hour to work. to American English", (done) => {
    assert.include(translator.process("Paracetamol takes up to an hour to work.", 'british-to-american'), 
                  { text: "Paracetamol takes up to an hour to work.",
                    translation: "<span class='highlight'>Tylenol</span> takes up to an hour to work.", });
    done();
  });
  test("#13 Translate First, caramelise the onions. to American English", (done) => {
    assert.include(translator.process("First, caramelise the onions.", 'british-to-american'), 
                  { text: "First, caramelise the onions.",
                    translation: "First, <span class='highlight'>caramelize</span> the onions.", });
    done();
  });
  test("#14 Translate I spent the bank holiday at the funfair. to American English", (done) => {
    assert.include(translator.process("I spent the bank holiday at the funfair.", 'british-to-american'), 
                  { text: "I spent the bank holiday at the funfair.",
                    translation: "I spent the <span class='highlight'>public holiday</span> at the <span class='highlight'>carnival</span>.", });
    done();
  });
  test("#15 Translate I had a bicky then went to the chippy. to American English", (done) => {
    assert.include(translator.process("I had a bicky then went to the chippy.", 'british-to-american'), 
                  { text: "I had a bicky then went to the chippy.",
                    translation: "I had a <span class='highlight'>cookie</span> then went to the <span class='highlight'>fish-and-chip shop</span>.", });
    done();
  });
  test("#16 Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    assert.include(translator.process("I've just got bits and bobs in my bum bag.", 'british-to-american'), 
                  { text: "I've just got bits and bobs in my bum bag.",
                    translation: "I've just got <span class='highlight'>odds and ends</span> in my <span class='highlight'>fanny pack</span>.", });
    done();
  });
  test("#17 Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    assert.include(translator.process("The car boot sale at Boxted Airfield was called off.", 'british-to-american'), 
                  { text: "The car boot sale at Boxted Airfield was called off.",
                    translation: "The <span class='highlight'>swap meet</span> at Boxted Airfield was called off.", });
    done();
  });
  test("#18 Translate Have you met Mrs Kalyani? to American English", (done) => {
    assert.include(translator.process("Have you met Mrs Kalyani?", 'british-to-american'), 
                  { text: "Have you met Mrs Kalyani?",
                    translation: "Have you met <span class='highlight'>Mrs.</span> Kalyani?", });
    done();
  });
  test("#19 Translate Prof Joyner of King's College, London. to American English", (done) => {
    assert.include(translator.process("Prof Joyner of King's College, London.", 'british-to-american'), 
                  { text: "Prof Joyner of King's College, London.",
                    translation: "<span class='highlight'>Prof.</span> Joyner of King's College, London.", });
    done();
  });
  test("#20 Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    assert.include(translator.process("Tea time is usually around 4 or 4.30.", 'british-to-american'), 
                  { text: "Tea time is usually around 4 or 4.30.",
                    translation: "Tea time is usually around 4 or <span class='highlight'>4:30</span>.", });
    done();
  });
  test("#21 Highlight translation in Mangoes are my favorite fruit.", (done) => {
    assert.include(translator.process('Mangoes are my favorite fruit.', 'american-to-british'), 
                  { text: 'Mangoes are my favorite fruit.',
                    translation: "Mangoes are my <span class='highlight'>favourite</span> fruit.", });
    done();
  });
  test("#22 Highlight translation in I ate yogurt for breakfast.", (done) => {
    assert.include(translator.process('I ate yogurt for breakfast.', 'american-to-british'), 
                  { text: 'I ate yogurt for breakfast.',
                    translation: "I ate <span class='highlight'>yoghurt</span> for breakfast.", });
    done();
  });
  test("#23 Highlight translation in We watched the footie match for a while.", (done) => {
    assert.include(translator.process("We watched the footie match for a while.", 'british-to-american'), 
                  { text: "We watched the footie match for a while.",
                    translation: "We watched the <span class='highlight'>soccer</span> match for a while.", });
    done();
  });
  test("#24 Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    assert.include(translator.process("Paracetamol takes up to an hour to work.", 'british-to-american'), 
                  { text: "Paracetamol takes up to an hour to work.",
                    translation: "<span class='highlight'>Tylenol</span> takes up to an hour to work.", });
    done();
  });
  
});
