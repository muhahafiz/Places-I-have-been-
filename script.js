function Place(location, timeOfyear, landmark, notes) {
  this.location = location;
  this.timeOfyear = timeOfyear;
  this.landmark = landmark;
  this.notes = notes;
}
function Places() {
  this.places = {};
  this.currentId = 0;
}
Places.prototype.assignId = function () {
  this.currentId++;
  return this.currentId;
};
Places.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};
Places.prototype.getAllPlaces = function () {
  return this.places;
};

Places.prototype.getPlaceById = function (id) {
  return this.places[id];
};
Places.prototype.deletePlaceById = function (id) {
  if (this.places[id]) {
    delete this.places[id];
    return true;
  }
  return false;
};
Places.prototype.deletePlaces = function () {
  this.places = {};
  return this.places;
};

const places = new Places();

const Naivasha = new Place(
  "Naivasha",
  "Dry Season",
  "LakeNaivasha",
  "Good Fishpoints",
);
const Nairobi = new Place(
  "Nairobi",
  "Dry season",
  "Archives",
  "Very busy but cool."
);
const Eldoret = new Place(
  "Eldoret",
  "Wet season",
  "Elgon view",
  "Chill calming atmosphere"
);
const Mombasa = new Place(
  "Mombasa",
  "Wet season",
  "Nyali beach",
  "Beach calming vibes"
);

places.addPlace(Naivasha);
places.addPlace(Nairobi);
places.addPlace(Eldoret);
places.addPlace(Mombasa);


console.log(places.getPlaceById(1));
console.log(places.getAllPlaces());
console.log(places.assignId());
console.log(places.deletePlaceById(2));
console.log(places.deletePlaces());