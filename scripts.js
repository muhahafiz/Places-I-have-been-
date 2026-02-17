
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

Places.prototype.deletePlaceById = function(id) {
  if (this.places[id]) {
    delete this.places[id];
    return true;
  }
  return false;
};

const places = new Places();

document.getElementById("placeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const timeOfyear = document.getElementById("timeOfyear").value;
  const landmark = document.getElementById("landmark").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, timeOfyear, landmark, notes);
  places.addPlace(newPlace);

  displayPlaces();
  this.reset();
})
function displayPlaces() {
  const container = document.getElementById("placesList");
  container.innerHTML = "";

  const allPlaces = places.getAllPlaces();

  for (let id in allPlaces) {
    const place = allPlaces[id];

    const div = document.createElement("div");
    div.className = "place-card";
    div.innerHTML = `
      <h3>${place.location}</h3>
      <p><strong>Season:</strong> ${place.timeOfyear}</p>
      <p><strong>Landmark:</strong> ${place.landmark}</p>
      <p><strong>Notes:</strong> ${place.notes}</p>
      <button onclick="deletePlace(${place.id})">Delete</button>
    `;
    container.appendChild(div);
  }
}
function deletePlace(id) {
  places.deletePlaceById(id);
  displayPlaces();
}