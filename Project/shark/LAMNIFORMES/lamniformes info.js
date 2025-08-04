const sharks = [
    {
        name: "Basking shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550286579003-1EOOSU9ZSEA29535EY1N/basking-shark-cetorhinus-maximus.jpg?format=500w"
    },
    {
        name: "Bigeye thresher shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550287217143-XWTX3835EZYQ1I5ZM1MN/bigeye-thresher-shark-alopias-superciliosus.jpg?format=500w"
    },
    {
        name: "Crocodile shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550329237356-CQFLI17P9TYUXGC8KNDL/crocodile-shark-pseudocarcharias-kamoharai.jpg?format=500w"
    },
    {
        name: "Goblin shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550535646146-6LZ94SW56UG3OEO1L3YK/goblin-shark-mitsukurina-owstoni.jpg?format=500w"
    },
    {
        name: "Longfin mako shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550597860389-R36ME8E2OAOPRB3RQAJB/longfin-mako-shark-Isurus-paucus.jpg?format=500w"
    }
]

const container = document.getElementById("shark-container");

sharks.forEach(shark => {
    const div = document.createElement("div");
    div.className = "shark-item";

    const pageName = "minilamni/" + shark.name.toLowerCase().replace(/\s+/g, "") + ".html";

    div.innerHTML = `
        <a href="${pageName}">
            <img src="${shark.img}" alt="${shark.name}">
        </a>
        <p>${shark.name}</p>
    `;

    container.appendChild(div);
});