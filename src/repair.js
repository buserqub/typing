import dataEng from './dataEng.json'
import dataRus from './dataRus.json'

let data = dataRus;
let mydata = JSON.parse(JSON.stringify(data));
console.log(mydata);