var capitaliseString = function (sentence) {
    let sentenceList = sentence.toLowerCase().split(' ');
    for (let i = 0; i < sentenceList.length; i++) {
      sentenceList[i] =
        sentenceList[i].toUpperCase();
    }
    return sentenceList.join(' ');
  };
  
  console.log(capitaliseString('hi i hope everything is going well'));