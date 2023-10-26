// Side Nav Bar //
function openActionMovie() {
  document.getElementById("myActionMovie").style.display = "flex";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";

}
function openComedyMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "flex";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openHorrorMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "flex";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openthriller() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "flex";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openRomanceMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "flex";
}
// Movie_Details //

window.addEventListener('load', bootUpApp)

function bootUpApp() {
  fetchAndRender();
}

function fetchAndRender() {
  //fetch data
  fetch('./data.json')
    .then(response => response.json())
    .then(response => {
      const movieDetails = response

      const urlParams = new URLSearchParams(window.location.search);
      const movie_id = urlParams.get('id');
   

      for (let i = 0; i < movieDetails.length; i++) {

        const element = movieDetails[i];
        if (element.id === movie_id) {
          const movie_detail_container = document.createElement('div')
          movie_detail_container.id = 'movie_detail_container';
          movie_detail_container.innerHTML =
            `
        <img src=${element.img}>
         <h2>Movie Name:-${element.name}</h2>
         <h4>Directed by:- ${element.directed_by}</h4>
         <h4>Produced by:- ${element.produced_by}</h4>
         <h4>Starring:-	${element.starring}.</h4>
      `
          const movie_detail_box = document.querySelector("#movie_detail_box")
          movie_detail_box.appendChild(movie_detail_container);
        }

      }
    })
    .catch((error) => {
      alert(error)
    }
    )
}

