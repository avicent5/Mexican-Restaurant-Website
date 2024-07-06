//cardContent array is for Taco menu section
const cardContent = [
    {
        heading : 'card 1',
        body : 'this is body 1'
    },
    {
        heading : 'card 2',
        body : 'this is body 2'
    },
    {
        heading : 'card 3',
        body : 'this is body 3'
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
const cardContainerMethod = () => {
    cardContent.map( (postCardData) => {
        const newCard = document.createElement("div");
        newCard.classList.add('card');
        newCard.innerHTML = `
        <h1>This is box </h1>
        <p>content</p>
        `
        newCardContainer.appendChild(newCard);
    })
}
// method is easier way to create cards without having to hard code!
const mexPlateCardContainer = document.querySelector('.mex_plate_card_container');
let mexPlateCardData = `<h1>This is box </h1>
<p>content</p>`;
const displayContainerMethod = (cardArray, cardClass, cardData, cardContainer) => {
    cardArray.map( (postCardData) => {
        const newCard = document.createElement("div");
        newCard.classList.add(cardClass);
        newCard.innerHTML = cardData;
        cardContainer.appendChild(newCard);
    } )
}
cardContainerMethod();
displayContainerMethod(mexPlateCardContent,'mex_plate_card', mexPlateCardData, mexPlateCardContainer);


