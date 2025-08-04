const sharks = [
    {
        name: "Bluntnose sixgill shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550292630579-ATRA9DO5OJUQNKSZ5IJF/bluntnose-sixgill-shark-hexanchus-griseus.jpg?format=500w"
    },
    {
        name: "Broadnose sevengill shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550293536649-F7HZKN3W9UT2RYBMDP9P/broadnose-sevengill-shark-notorynchus-cepedianus.jpg?format=500w"
    },
    {
        name: "Frilled shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550534656589-5HVNXMF97RJKUS922WVU/frilled-shark-chlamydoselachus-anguineus.jpg?format=500w"
    },
    {
        name: "Sharpnose sevengill shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550607413195-4I96W80ZJKG769XY6TGT/sharpnose-sevengill-shark-heptranchias-perlo.jpg?format=500w"
    }
]

const container = document.getElementById("shark-container");

sharks.forEach(shark => {
    const div = document.createElement("div");
    div.className = "shark-item";

    const pageName = "minihexanchi/" + shark.name.toLowerCase().replace(/\s+/g, "") + ".html";

    div.innerHTML = `
        <a href="${pageName}">
            <img src="${shark.img}" alt="${shark.name}">
        </a>
        <p>${shark.name}</p>
    `;

    container.appendChild(div);
});