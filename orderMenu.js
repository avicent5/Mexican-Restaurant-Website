let openShoppingCart = document.querySelector('.shopping');
let closeShoppingCart = document.querySelector('.close_shopping');
let body = document.querySelector('body');
let addItemToCart = document.querySelector('.order_page_button');
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
let addToCartDiv = (divPic, divTxt) =>{
    // might need to create a container div to scroll between lots of items
   let div = document.createElement("div");
   let divImage = document.createElement("img");
   div.style.width = "400px";
   div.style.height = "125px";
   div.style.margin = "auto";
   div.style.marginBottom = "1rem";
   div.style.marginTop = "1rem"
   div.style.backgroundColor = "blue";
   // edit image size
   div.style.color = "black";
   div.innerHTML = `
   <img src= "${divPic}" 
   alt="Special Deal"
   style="height: 125px;
   width: 150px;">
   <p style="text-align: center;"> ${divTxt} </p>`;
   
   document.querySelector('.item').appendChild(div);
   itemCounter++;
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
        newCard.addEventListener('click', () => {addToCartDiv(postCardData.picture, postCardData.body)});
        // use .remove to get rid of div thats created from event listener above
    } )

}
displayContainerMethod(cardContent,'card',1, newCardContainer);
//displayContainerMethod(mexPlateCardContent,'mex_plate_card', 2, mexPlateCardContainer);


// add paramater to get picture and add other contents to it

// add eventListener here...

// take in array
let addToCart = (arr) => {
   arr.map( (postAddToCartData) => {
    const newDiv = document.createElement("div");
    newDiv.addEventListener('click',  () => {addToCartDiv(postAddToCartData.picture, postAddToCartData.body)});

   })
}
addItemToCart.addEventListener("click", () => {addToCartDiv("TacoImages/steakTacoOrderPage.png", 'Steak Taco')});



// possible solution
/*
create an matching id and set it to the switch case, if they match then hardcode innerHTML to desired contents
*/
// create an array of your desiered contents and hardcode into the scroll div 