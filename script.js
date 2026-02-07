
function Place(location,timeOfyear,landmark, notes) {
  this.location = location;
  this.timeOfyear = timeOfyear;
  this.landmark = landmark;
  this.notes = notes;
}
function Places() {
  this.places = {};
  this.currentId = 0;
}
Places.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
};
Places.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};
Places.prototype.getAllPlaces = function() {
   return this.places;
};

Places.prototype.getPlaceById = function(id) {
   return this.places[id];
};

const places = new Places();

const Naivasha = new Place("Naivasha", "Dry Season", "LakeNaivasha", "Good Fishpoints");
const  Nairobi= new Place("Nairobi", "Dry season", "Archives", "Very busy but cool.");

places.addPlace(Naivasha)
places.addPlace(Nairobi)

console.log(places.getPlaceById(1))


    Place.prototype.deletePlaceById = function(id) {
        if (this.places[id]) {
            delete this.places[id];
            return true;
        }
        return false;
    };
  Place.prototype.deletePlaces = function(id) {
      this.places = {};
    };
  