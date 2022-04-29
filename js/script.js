// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-03-JS/sw.js", {
    scope: "/ICS2O-Unit-5-03-JS/",
  })
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  var rRated = parseInt(document.getElementById("r-rated").value)
  var pg = parseInt(document.getElementById("pg").value)
  var gRated = parseInt(document.getElementById("g-rated").value)

  // process
  if (rRated == true) {
    document.getElementById("r-rated").innerHTML =
      "You can watch a R rated movie alone."
  } else if (pg == true) {
    document.getElementById("answers").innerHTML =
      "You can watch a PG-13 rated movie."
  } else if (gRated == true) {
    document.getElementById("answers").innerHTML =
      "You can watch a G of a PG rated movie."
  } else {
    document.getElementById("answers").innerHTML =
      "You are too young for most things."
  }
}