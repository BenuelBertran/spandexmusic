/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

window.addEventListener("load", function() {
  const album = document.querySelector(".player__album");
  const albumButton = document.querySelector(".btn__album");
  const albumTitle = document.querySelector(".album__title");
  const albumBorder = document.querySelector(".album__border");
  const play = document.querySelector(".play");
  const playButton = document.querySelector(".player__play-button");
  const playButtonTitle = document.querySelector(".btn__title");
  const songs = document.querySelector(".player__songs-list");
  const songsListButton = document.querySelector(".btn__songs");
  const songsTitle = document.querySelector(".songs__title");
  const songsAdd = document.querySelector(".songs__add");

  albumButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    album.classList.toggle("hidden");
    albumButton.classList.toggle("btn__album--close");
  });
  
  songsListButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    songs.classList.toggle("hidden");
    songsListButton.classList.toggle("btn__songs--close");
  });
  
  play.addEventListener("click", function () {
    if (!play.classList.contains("active")) {
      playButton.classList.add("sssr-btn");
      album.classList.add("sssr-album");
      songs.classList.add("sssr-songs");
      playButtonTitle.innerText = "";
      albumTitle.style = "visibility: hidden;";
      songsTitle.style = "visibility: hidden;";
      albumBorder.style = "visibility: hidden;";
      songsAdd.style = "visibility: hidden;";
    }
    else {
      playButton.classList.remove("sssr-btn");
      album.classList.remove("sssr-album");
      songs.classList.remove("sssr-songs");
      playButtonTitle.innerText = "PLAY MUSIC";
      albumTitle.style = "visibility: none;";
      songsTitle.style = "visibility: none;";
      albumBorder.style = "visibility: none;";
      songsAdd.style = "visibility: none;";
    }
  });
});

