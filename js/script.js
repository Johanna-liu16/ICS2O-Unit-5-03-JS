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
  //input
  const seventeenUp = document.getElementById("seventeenUp").checked
  const thirteenUp = document.getElementById("thirteenUp").checked
  const fiveUp = document.getElementById("fiveUp").checked
  //process
  if (seventeenUp == true) {
    document.getElementById("answers").innerHTML = 
      "You can to watch R-rated movies."
  } else if (thirteenUp == true) {
      document.getElementById("answers").innerHTML = 
        "You can watch PG-13 rated movies."
  } else if (fiveUp == true) {
      document.getElementById("answers").innerHTML = 
        "You are eligible to watch G and PG rated movies alone."
  } else {
      document.getElementById("answers").innerHTML = 
        "You are most likely not eligible to watch any rated movies alone."
  }
}