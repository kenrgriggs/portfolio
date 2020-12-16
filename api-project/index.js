const baseURL = 'https://api.spacexdata.com/v4/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
  e.preventDefault();
  
  fetch(baseURL) 
    .then(result => result.json())
    .then(json => {
      console.log(json);
      displayRockets(json);

    })
}

function displayRockets(rockets) {
  rockets.forEach(r => {
    let rocket = document.createElement('h2');
    rocket.innerText = `${r.name}`;
    let description = document.createElement('p');
    description.innerText = `${r.description}`;
    let image = document.createElement('img');
    image.src = r.flickr_images[1];
    console.log(image.src)
    spaceShips.appendChild(rocket);
    spaceShips.appendChild(description);
    spaceShips.appendChild(image);
  })
}