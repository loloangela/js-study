// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var target = collection[id];
  if(value == ""){
    delete target[prop];
  }else {
    if(target.hasOwnProperty(prop)){
      if (prop == "tracks") {
        target[prop].push(value);
      }else{
        target[prop] = value;
      }
    }else {
      if (prop == "tracks") {
        target[prop] = [];
        target[prop].push(value);
      }else {
        target[prop] = value;
      }
    }
  }
  console.log(target);
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "tracks", "The Shit I've been through");
updateRecords(2468, "tracks", "Purple Rain");
updateRecords(2548, "artist", "That Nigga There");
updateRecords(5439, "tracks", "Going Where I've Been");
updateRecords(2468, "artist", "");