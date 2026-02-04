function sentenceWordCount(sentence){
let words = sentence.split(' ')
let wordCount = {}
for(let word of words){
  let wordLowerCase = word.toLowerCase();
  if(wordLowerCase.hasOwnProperty(wordCount)){
  wordCount[wordLowerCase]++
  }
    else{
  wordCount[wordLowerCase]=1
}
}
return wordCount
}
let mySentence = "I love JS and I love coding and JS is fun"
let result = sentenceWordCount(mySentence)
console.log(result)