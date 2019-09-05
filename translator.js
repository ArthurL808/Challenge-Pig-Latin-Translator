class Translator {
toPigLatin(sentence){
let results = ''
let idx = 0
let vowels = ['a','e','i','o','u']
//Split sentence into individual words and lowercase
let words = sentence.toLowerCase().split(" ");

for (let i = 0; i < words.length; i++) {
//Get each word out of a senctence and split into individual letters
let letters = words[i].split("");
//If first letter is a vowel add -ay to the end
if(vowels.includes(letters[0])){
let pigWord = letters.join('') + '-ay '
results += pigWord
}else {
//If first letter is not a vowel loop through letters till vowel is found then save the index
    for (let j = 0; j < letters.length; j++) {
        for (let x = 0; x < vowels.length; x++) {
        if(vowels[x] == letters[j]){
       idx = letters.indexOf(vowels[x])
       break;
        }    
        }
    }
   results += letters.slice(idx).join('')
   results += '-'
   results += letters.slice(0,1).join('').toUpperCase()
   results += letters.slice(1,idx).join('') + 'ay'
   console.log(results)
}
    
}
return results
}
}

module.exports = Translator;
