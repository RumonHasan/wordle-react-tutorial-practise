import words from './words.txt';
export const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

// generating words file
export const generateWordSet = async ()=>{
    let wordSet;
    await fetch(words).then((response)=>response.text()).then((resultWord)=>{
        const wordArray = resultWord.split('\n');
        wordSet = new Set(wordArray);
    });
    return {wordSet};
};
