// your code here
const cakeURL = "http://localhost:3000/cakes";
const mainCakeDiv = document.querySelector(".cake-details");
const cakeName = document.getElementById("cake-name");
const cakeImage = document.getElementById("cake-image");
const cakeDescription = document.getElementById("cake-description");
const cakeReviews = document.getElementById("review-list");
const cakeList = document.getElementById("cake-list");
// console.log(cakeList)

fetch(cakeURL)
  .then((res) => res.json())
  .then(renderCakes);

function renderCakes(cakes) {
  cakes.forEach(cake => {
    renderMainCake(cake); 
    renderCakesNavBar(cake);
  })
  // console.log(cakes)
}

function renderMainCake(cake) {
  console.log(cake.name);
  mainCakeDiv.innerHTML = `
    <h2>${cake.name} </h2>
    <img src="${cake.image_url}" id='cake-image' />
    <em id="cake-description">${cake.description}</em>
    <ul id="review-list"><li>${cake.reviews[0]}</li></ul>
    <ul id="review-list"><li>${cake.reviews[1]}</li></ul>
    `;  
    const reviewList = mainCakeDiv.querySelector('#review-list');
    cake.reviews.forEach(review => {
        const li = document.createElement('li');
        li.textContent = review;
        reviewList.appendChild(li);
    })
}

function renderCakesNavBar(cake) {    
    const li = document.createElement('li')
    li.textContent = cake.name;
    li.addEventListener('click', () => renderMainCake(cake));
    cakeList.appendChild(li);
}



// console.log(cakeReviews)
