//jshint esversio:6

module.exports = function () {

  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

  return today.toLocaleDateString("en-US", options);
}

// module.exports = function () {
//
//   let today = new Date();
//   let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//
//   return today.toLocaleDateString("en-US", options);
// }

// module.exports = getDate;
//
// function getDate() {
//
//   let today = new Date();
//   let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//
//   return today.toLocaleDateString("en-US", options);
// }
