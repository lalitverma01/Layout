const cardsData = [
    {
        title: "Gustavo Herwitz",
        description: "UI/UX Designer",
        imgUrl: "./assets/image/gustavo-herwitz-img.png",
    
    },
{
    title: "Phillip Curtis",
        description: "Graphic Designer",
            imgUrl: "./assets/image/phillip-cutis-img.png"
},
{
    title: "Talan Torff",
        description: "Web Developer",
            imgUrl: "./assets/image/talan-torff.png"
},
{
    title: "Abram Vaccaro",
        description: "App Developer",
            imgUrl: "./assets/image/abram-vaccaro-img.png"
}
];


const container = document.getElementById("cards-container");

cardsData.forEach(card => {
    const colElement = document.createElement("div");
    colElement.classList.add("col-12 col-md-6 col-xl-3");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = card.imgUrl;

    const contentElement = document.createElement("div");
    contentElement.classList.add("card-content");

    const titleElement = document.createElement("div");
    titleElement.classList.add("card-title");
    titleElement.textContent = card.title;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("card-description");
    descriptionElement.textContent = card.description;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(contentElement);

    colElement.appendChild(cardElement);

    container.appendChild(colElement);
});