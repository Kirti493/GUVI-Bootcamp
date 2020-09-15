(function (sentence) {
    let sentenceList = sentence.toLowerCase().split(' ');
    for (let i = 0; i < sentenceList.length; i++) {
      sentenceList[i] =
        sentenceList[i].toUpperCase();
    }
    console.log(sentenceList.join(' '));
  })('hi i hope everything is going well');