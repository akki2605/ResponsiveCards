//This is when fetching from api
//var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };
//fetch('https://imdb-api.com/en/API/Top250Movies/k_6tl6bsnu',requestOptions)

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

var grid = document.getElementsByClassName("grid");

function appendData(data) {
  for (var i = 0; i < 12; i++) {

    //creating elements for the card
    var gridItem = document.createElement("div");
    var Card = document.createElement("div");
    var img = document.createElement("img");
    var content = document.createElement("div"); 
    var header = document.createElement("div");
    var text = document.createElement("div");
    var button = document.createElement("button");


    //assigining the class name for the elements
    gridItem.className="grid-item";
    Card.className = "card";
    img.className = "card-img";
    content.className="card-content";

    //Appending to the main grid and creating a DOM for the card
    grid[0].appendChild(gridItem)
    gridItem.append(Card);
    
    img.src = data.items[i].image;
    img.alt = data.items[i].id;

    Card.append(img,content);

    header.innerHTML =
      `<h1 class="card-header">` + data.items[i].title + `</h1>`;

    text.innerHTML =
      `<p class="card-text">` +
      data.items[i].fullTitle +
      `<br>Rating :` +
      data.items[i].imDbRating +
      `<br> Crew : ` +
      data.items[i].crew +
      `</p>`;
    content.append(header, text);

    button.className = "card-btn";
    button.innerHTML = "More Info <span>&rarr;</span>";
    content.append(button);
  }
}
