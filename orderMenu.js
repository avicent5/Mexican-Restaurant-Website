
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
const displayContainerMethod = (cardArray, cardClass, cardData, cardContainer) => {
    cardArray.map( (postCardData) => {
        const newCard = document.createElement("div");
        newCard.classList.add(cardClass);
        newCard.innerHTML =   `${postCardData.picture} ${postCardData.heading} ${postCardData.body} ${postCardData.button}`;
        cardContainer.appendChild(newCard);
        newCard.addEventListener('click', () => {
            body.classList.add('active');
           
        })
    } )
}
displayContainerMethod(cardContent,'card',newCardData, newCardContainer);
displayContainerMethod(mexPlateCardContent,'mex_plate_card', mexPlateCardData, mexPlateCardContainer);

let addToCart = () =>{
   
}

let openShoppingCart = document.querySelector('.shopping');
let closeShoppingCart = document.querySelector('.close_shopping');
let body = document.querySelector('body');
let addItemToCart = document.querySelector('.order_page_button');

addItemToCart.addEventListener('click', () => {
    body.classList.add('active');
   
})

openShoppingCart.addEventListener('click', () =>{
    body.classList.add('active');
})
closeShoppingCart.addEventListener('click', () => {
    body.classList.remove('active');
})
// mimic this, when it clicks, use function to add inner.html pic and taco type
