function getLengthOfWord(word1){
    if(word1 == null){
        return -1;
    }
    else if(typeof word1 == 'string'){
        return word1.length;
    }
    else{
        return -1;
    }
   }
   console.log(getLengthOfWord("GUVI"))