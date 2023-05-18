const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  process(text, locale){

    let submitedText = text;
    let spanStart = ' <span class="highlight">';
    let spanEnd = '</span>'; 
    let britishOnlyReversed = [];

    for (let key of Object.entries(britishOnly)) {
      britishOnlyReversed.push([key[1], key[0]]);
    }
    

    if (locale == 'american-to-british') {

      let worldsListToBr = Object.entries(americanOnly).concat(Object.entries(americanToBritishSpelling));
      
      let titleOrNot = this.titleChecker(text, locale); 
      if (titleOrNot) {
        text = titleOrNot;
      }

      let timeOrNot = this.timeChecker(text, locale);
      if (timeOrNot) {
        text = timeOrNot;
      }
      
      for (let key of worldsListToBr){
        
        //let regex = new RegExp('[ ^]' + key[0] + '[ .]', 'ig');
        let regex = new RegExp('(' + key[0] + ')[ .]|( ' + key[0] + ')[ .]', 'ig');
        const matches = text.matchAll(regex);
        
        for (const match of matches) {
          //console.log("Match - " + match);


          if (match[0].toString().match(/[.]$/)) {
            
            text = text.replaceAll(regex, spanStart + key[1] + spanEnd + '.');
            
          } else {
            
            text = text.replaceAll(regex, spanStart + key[1] + spanEnd + " ");
            
          }
        }
      }
      //console.log ("text - " + text);
      return { text: submitedText,
               translation: text, };

    // if different locale
    } else {

        let worldsListToAm = britishOnlyReversed.concat(Object.entries(americanToBritishSpelling));
        //console.log(worldsListToAm);
      
        let titleOrNot = this.titleChecker(text, locale);        
        if (titleOrNot) {
              console.log(titleOrNot);
              text = titleOrNot;
        }

        let timeOrNot = this.timeChecker(text, locale);
        if (timeOrNot) {
          text = timeOrNot;
        }

        for (let key of worldsListToAm){
          //console.log(key);
          
          let regex = new RegExp('(' + key[1] + ')[ .]|( ' + key[1] + ')[ .]', 'ig');
          const matches = text.matchAll(regex);
          //console.log(matches);
          
          for (const match of matches) {
            console.log("Match - " + match);
  

            if (match[0].toString().match(/[.]$/)) {
              
              text = text.replaceAll(regex, spanStart + key[0] + spanEnd + '.').trimStart();
              
            } else {
              
              text = text.replaceAll(regex, spanStart + key[0] + spanEnd + " ").trimStart();
          
            }


          }
      }
        
        console.log(text);
        return { text: submitedText,
               translation: text, };
    }
    //console.log(test);
  }

  titleChecker(text, locale){

    let spanStart = ' <span class="highlight">';
    let spanEnd = '</span> '; 
    
    if (locale == 'american-to-british') {

      for (let key of Object.entries(americanToBritishTitles)) {

        let regex = new RegExp('[ ](' + key[0] + ' )|(^' + key[0] + ' )', 'gi');
        //console.log(regex.toString());
        let match = text.match(regex);

        //console.log("Match - " + match, " Key - " + key[0]);
        if (match) {
          
          text = text.replaceAll(regex, spanStart + key[1][0].toUpperCase() + key[1].slice(1) + spanEnd);
          return text.trimStart();
        }
          
      }
      return false;
      
    } else {
        for (let key of Object.entries(americanToBritishTitles)) {

          //console.log(key[1].toString().slice(0, -1));
          let regex = new RegExp('[ ](' + key[1] + ')[\. ]|(^' + key[1] + ' )', 'gi');
          //console.log(regex.toString());
          let match = text.match(regex);

          //console.log("Match - " + match, " Key - " + key[0]);
          if (match) {
            
            text = text.replaceAll(regex, spanStart + key[0][0].toUpperCase() + key[0].slice(1) + spanEnd);
            return text.trimStart();
          }
          
      }
      
      return false;
    }
  }
  
  timeChecker(text, locale) {

    let spanStart = '<span class="highlight">';
    let spanEnd = '</span>'; 
    
    if (locale == 'american-to-british') {

      let matches = [...text.matchAll(/\d{1,2}:\d{2}/g)];
      
      if (matches) {
        for (let match of matches){

          text = text.replaceAll(match, spanStart + match.toString().split(":")[0].trimStart() + "." + match.toString().split(":")[1].trimEnd() + spanEnd);
        }
        return text;
      }
        
      return false;
      
    } else {
      
      let matches = [...text.matchAll(/\d{1,2}\.\d{2}/g)];
      
      if (matches) {
        for (let match of matches){
          text = text.replaceAll(match, spanStart + match.toString().split(".")[0].trimStart() + ":" + match.toString().split(".")[1].trimEnd() + spanEnd);
          
        }

        return text;
      }

      return false;
    }
  }
  
}

module.exports = Translator;