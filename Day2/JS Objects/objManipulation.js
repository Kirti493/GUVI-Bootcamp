var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
      {
        name: 'bar',
        activities: ['be grumpy', 'eat bread omblet'],
        weight: 8,
        furcolor: 'white',
      },
      {
        name: 'foo',
        activities: ['sleep', 'pre-sleep naps'],
        weight: 3,
      },
    ],
  };

// Add height and weight to Fluffy
cat.height = '25 cms'
cat.weight = '5 kgs'

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy'

//List all the activities of Fluffyy’s catFriends.
for(let i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].activities)
}

//Print the catFriends names.
for(let i=0; i<cat.catFriends.length; i++){
    console.log(cat.catFriends[i].name)
}

//Print the total weight of catFriends
for(let i=0; i<cat.catFriends.length; i++){
    console.log(cat.catFriends[i].weight)
}

//Print the total activities of all cats
var activityLen = cat.activities.length;
for(let i=0; i<cat.catFriends.length; i++){
    activityLen += cat.catFriends[i].activities.length;
} 
console.log(activityLen)

//Add 2 more activities to bar & foo cats
cat.catFriends[0].breed = 'Korats';
cat.catFriends[0].eyeColor = 'Brown';
cat.catFriends[1].breed = 'British Shorthairs';
cat.catFriends[1].eyeColor = 'Blue';
console.log(cat.catFriends)

//Update the fur color of bar
cat.catFriends[0].furcolor = 'Black';
console.log(cat.catFriends[0])

