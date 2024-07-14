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
        picture : `<img src="TacoImages/chickenTacoOrderPage.png" 
        alt="Special Deal 1"
        style="height: 50%;
        width: 100%;">`,
        heading : '<h1 style="text-align: center;">Chicken Taco </h1>',
        body : '<p style="text-align: center;">Price: $1.99 </p>',
        button : ` <button class="order_page_button">Add to cart</button>`
        
    },
    {
        picture : `<img src="TacoImages/alPastorTacoOrderPage.png" 
        alt="Special Deal 1"
        style="height: 50%;
        width: 100%;">`,
        heading : '<h1 style="text-align: center;">Al Pastor Taco </h1>',
        body : '<p style="text-align: center;">Price: $1.99 </p>',
        button : ` <button class="order_page_button">Add to cart</button>`
    },
    {
        picture : `<img src="TacoImages/beefTacoOrderPage.png" 
        alt="Special Deal 1"
        style="height: 50%;
        width: 100%;">`,
        heading : '<h1 style="text-align: center;">Beef Taco </h1>',
        body : '<p style="text-align: center;">Price: $1.99 </p>',
        button : ` <button class="order_page_button">Add to cart</button>`
    },
]
const mexPlateCardContent = [
    {
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    {
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    {
        heading : 'Carne Asada Plate',
        body : 'rice, beans, tortillas'
    },
    
]

const newCardContainer = document.querySelector('.card_container');
let newCardData = `

    <h1>This is box </h1>
    <p>content</p>
`


// method is easier way to create cards without having to hard code!
const mexPlateCardContainer = document.querySelector('.mex_plate_card_container');
const specialDealCardContainer = document.querySelector('.special_deal_menu_container')
let mexPlateCardData = `<h1>This is box </h1>
<p>content</p>`;
// set counter id and match with switch (use id for switch param)
const displayContainerMethod = (cardArray, cardClass, cardData, cardContainer) => {
    cardArray.map( (postCardData) => {
        const newCard = document.createElement("div");
        newCard.classList.add(cardClass);
        newCard.innerHTML =   `${postCardData.picture} ${postCardData.heading} ${postCardData.body} ${postCardData.button}`;
        cardContainer.appendChild(newCard);
        newCard.addEventListener('click', addToCart);
        // use .remove to get rid of div thats created from event listener above
    } )
}
displayContainerMethod(cardContent,'card',newCardData, newCardContainer);
displayContainerMethod(mexPlateCardContent,'mex_plate_card', mexPlateCardData, mexPlateCardContainer);

// add paramater to get picture and add other contents to it
let addToCart = () =>{
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
   divImage.style.height = "20px";
   divImage.style.width = "50px"
   
   div.style.color = "white";
   div.innerHTML = `   <img src="Images/mexican_plate1.png" 
   alt="Special Deal 1"
   style="height: 125px;
   width: 125px;">`;
   document.querySelector('.item').appendChild(div);
   itemCounter++;
   document.querySelector('.quantity').innerHTML = itemCounter;

}
// add eventListener here...
addItemToCart.addEventListener('click', addToCart);

