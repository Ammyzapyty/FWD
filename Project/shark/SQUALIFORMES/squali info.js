const sharks = [
    {
        name: "Bramble shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550293112132-UV55U33P1HR00V5V54VP/bramble-shark-echinorhinus-brucus-both.jpg?format=500w"
    },
    {
        name: "Cookiecutter shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550295378611-6UN5XXP6CS0C4Y14XLIG/cookiecutter-shark-isistius-brasiliensis.jpg?format=500w"
    },
    {
        name: "Great Lanternshark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550583165144-7GDHCTF78C40T68Q1WG0/great-lanternshark-etmopterus-princeps.jpg?format=500w"
    },
    {
        name: "Greenland shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550583736207-OABS1R711TBL9B5EVXRT/greenland-shark-somniosus-microcephalus.jpg?format=500w"
    },
    {
        name: "Gulper shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550596271880-5DZ83UW32G1ACW3V9HN5/gulper-shark-centrophorus-granulosus.jpg?format=500w"
    }
]

const container = document.getElementById("shark-container");

sharks.forEach(shark => {
    const div = document.createElement("div");
    div.className = "shark-item";

    const pageName = "minisquali/" + shark.name.toLowerCase().replace(/\s+/g, "") + ".html";

    div.innerHTML = `
        <a href="${pageName}">
            <img src="${shark.img}" alt="${shark.name}">
        </a>
        <p>${shark.name}</p>
    `;

    container.appendChild(div);
});