let openShoppingCart = document.querySelector('.shopping');
let closeShoppingCart = document.querySelector('.close_shopping');
let body = document.querySelector('body');
let addItemToCart = document.querySelector('.order_page_button');
let listcard = document.querySelector('.listcard');
let itemCounter = 0;

// might need to eliminate this later! (add function)


openShoppingCart.addEventListener('click', () =>{
    body.classList.add('active');
})
closeShoppingCart.addEventListener('click', () => {
    body.classList.remove('active');
})


//cardContent array is for Taco menu section
const myImage = new Image(); 
myImage.src = 'Images/taco_image1.png'; 
const cardContent = [
    {
        picture : 'TacoImages/chickenTacoOrderPage.png',
        heading : 'Chicken Taco',
        body : 'Price: $1.99 ',
        button : 'Add to cart',
        
        
    },
    {
        picture :"TacoImages/alPastorTacoOrderPage.png",
        heading : 'Al Pastor Taco',
        body : 'Price: $1.99',
        button : `Add to cart`
    },
    {
        picture : "TacoImages/beefTacoOrderPage.png",
        heading : 'Beef Taco',
        body : 'Price: $1.99',
        button : `Add to cart`
    },
]
const mexPlateCardContent = [
    {
        picture : "TacoImages/beefTacoOrderPage.png",
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    {
        picture : "TacoImages/beefTacoOrderPage.png",
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    {
        picture : "TacoImages/beefTacoOrderPage.png",
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    
]

const newCardContainer = document.querySelector('.card_container');
let newCardData = `

    <h1>This is box </h1>
    <p>content</p>
`
//const?
let incrementNumOfItems = (function(n) {
    //<span class="item_counter">1</span>
    return function(){
        n += 1;
        let incrementItem = document.getElementsByClassName("counter");
        let increment = document.getElementsByClassName("xi");
        for (let i = 0; i < incrementItem.length; i++){
            incrementItem[i].innerHTML = n;

    }
}
}(1));

let incrementNumOfItem = (idName) => {
    console.log(idName);
    let incrementItem = document.getElementById(idName);
        let k = Number(incrementItem.innerHTML) + 1;
        incrementItem.innerHTML = k;
};

let decrementNumOfItem = (idName) => {
    let decrementItem = document.getElementById(idName);
            decrementItem.innerHTML -= 1;
}


let hello = () =>{
  alert('Hello')
}

let addToCartDiv = (divPic, divItem ,divTxt) =>{
    // might need to create a container div to scroll between lots of items
    //let inputID = 1;
   let div = document.createElement("div");
   let divImage = document.createElement("img");
   div.style.width = "400px";
   div.style.height = "125px";
   div.style.margin = "auto";
   div.style.marginBottom = "1rem";
   div.style.marginTop = "1rem"
   div.style.backgroundColor = "blue";
   div.style.color = "white";
   div.innerHTML = `
   <img src= "${divPic}" 
   alt="Special Deal"
   style="height: 125px;
   width: 150px;
   float: left;
   margin-right: 20px;">
   <h3> ${divItem} </h3>
   <button id="decrease${itemCounter}" onclick="decrementNumOfItem('counter${itemCounter}')"> - </button>
   <span id="counter${itemCounter}">1</span>
   <button id="xi${itemCounter}" onclick="incrementNumOfItem('counter${itemCounter}')"> + </button> 
   
   <p> ${divTxt} </p>`;
   //style="text-align: center;"
   document.querySelector('.item').appendChild(div);
   itemCounter++;
// need to create a function that implements a counter for a button
   document.querySelector('.quantity').innerHTML = itemCounter;

}

// method is easier way to create cards without having to hard code!
const mexPlateCardContainer = document.querySelector('.mex_plate_card_container');
const specialDealCardContainer = document.querySelector('.special_deal_menu_container')
let mexPlateCardData = `<h1>This is box </h1>
<p>content</p>`;
// set counter id and match with switch (use id for switch param)
const displayContainerMethod = (cardArray, cardClass, cardDID, cardContainer) => {
    cardArray.map( (postCardData) => {
        const newCard = document.createElement("div");
        newCard.classList.add(cardClass);
        newCard.innerHTML =   `
        <img src= "${postCardData.picture}" 
        alt="Special Deal"
        style="height: 50%;
        width: 100%;">
        <h1 style="text-align: center;">${postCardData.heading}</h1>
        <p style="text-align: center;"> ${postCardData.body} </p>
        <button class="order_page_button">${postCardData.button}</button>
            `;
        cardContainer.appendChild(newCard);
        newCard.addEventListener('click', () => {addToCartDiv(postCardData.picture, postCardData.heading,postCardData.body)});
        // use .remove to get rid of div thats created from event listener above
    } )

}
displayContainerMethod(cardContent,'card',1, newCardContainer);
//displayContainerMethod(mexPlateCardContent,'mex_plate_card', 2, mexPlateCardContainer);


// add paramater to get picture and add other contents to it

// add eventListener here...

// take in array
function addToCard (key){
    if(listcard[key] == null){
        listcard[key] = cardArray[key];
        listcard[key] = 1;
    }
    reloadCard();
}
function reloadCard(){
    listcard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listcard.array.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        
    });
}
addItemToCart.addEventListener("click", () => {addToCartDiv("TacoImages/steakTacoOrderPage.png", 'Steak Taco', 'Price $1.99')});


// DEVELOPER NOTES
//-----------------------------------------
// possible solution
/*
create an matching id and set it to the switch case, if they match then hardcode innerHTML to desired contents

let incrementNumOfItem = () => {
        var $counter = document.querySelector('.item_counter');
        $counter.value = parseInt($counter.value) + 1;
};

let incrementNumOfItem = (function(n) {
    return function(){
        n += 1;
        let count = document.querySelector('.item_counter');
        for (let i = 0; i < incrementItem.length; i++){
         incrementItem[i].innerHTML = n;
    }
}
}(1));
resource below ...
https://stackoverflow.com/questions/48268411/javascript-html-how-to-implement-a-button-that-adds-a-click-counter-on-click
*/
// create an array of your desiered contents and hardcode into the scroll div 
//Might be useful for later : creates a pop up screen => javascript:(() => {alert('hello')})() 