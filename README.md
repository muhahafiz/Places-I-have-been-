
# Places 
This is webpage authored by [Muhammad Hafiz](https://github.com/muhahafiz)

# Setup Instructions
1.Clone this page locally by running `git clone git@github.com:muhahafiz/`
2.After cloning `cd places` and run `code .` to open the project on Visual Studio Code.
3.Make sure you have {Live Server} `https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer`extension installed
4.Click the go live button on the bottom of the screen bar of VS Code as shown below 
![VS Code screenshot](images/Golive.png) to see the web application
The  websitepage should open.

# Links
[text](https://muhahafiz.github.io/Places-I-have-been-/)

# Technologies used
HtML and JavaScript

# Contact information
[Email Me](mailto:muhahafi340@gmail.com)

## License
MIT

## Copyright
 2026 Muhammad







# Warm Up Answers
1. What is the difference between creating an object using literal notation, and creating an object using a constructor?
   -literal notattion is the direct, explicit representation of a fixed value within code
   - A constructor is a function blueprint used to create multiple objects of the same type with consistent properties and methods.

2. What benefits do constructors offer?
   - They provide consistency (all objects have the same properties).
   - they offer scalability, making it easy to create 100 "Places" without writing out 100 literals.

3. What is a prototype? How does it differ from a constructor?
   - A constructor defines the initial state and properties of an instance
   - A prototype allows for methods to be shared from other objects
   
# the test driven development
# Describe: Place()

-it should create a Place object with location, timeofyear, landmark, and notes properties.

# the code

const testPlace = new Place("Naivasha", "Dry", "Lake", "Nice view");
**the result:** testPlace.location to be "Naivasha"

# Describe: Places.prototype.addPlace()

-it should add a place to the collection and assign it a unique ID.

# the code

const testPlaces = new Places();
const = new Place("Nairobi");
testPlaces.addPlace(1);
**the results:** id to equal 1 which is Nairobi 

# Describe: Places.prototype.deletePlaceById
  -it should delete every one of the places instead of one 
  **code:**
  Places.prototype.deletePlaceById = function (id) 
  if (this.places[id]) {
    delete this.places[id];
    return true;
  }
  return false;
  **the result:**it will delete all the places instead of one

# Describe: Places.prototype.getAllPlaces
-it should add a new mwthod where when called it return all the places
**code:**
Places.prototype.getAllPlaces;
**the result**it will return all places

# Describe: Places.prototype.getPlaceById()

-it should retrieve a specific place from the collection based on its ID.
**Code:**
testPlaces.getPlaceById(1);
**the result:** to return the "Nairobi" place object.

# Describe: Places.prototype.deletePlaceById()

-it should remove a place from the collection and return true if successful.

# the code

testPlaces.deletePlaceById(1);
**the result:** testPlaces.places[1] to be undefined.