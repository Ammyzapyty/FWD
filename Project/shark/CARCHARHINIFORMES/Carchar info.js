const sharks = [
    {
        name: "Blacknose shark",
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550287898070-JQF9CDW6EZYMFHHRKFSG/blacknose-shark-carcharhinus-acronotu.jpg?format=500w"
    },
    {
        name: "Blacktip reef shark",
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550290000473-418KY9GO8O7RP33M094Y/blacktip-reef-shark-carcharhinus-melanopterus.jpg?format=500w"
    },
    {
        name: "Blacktip Shark",
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550290638890-RN987J28N6YS4QM94JNM/blacktip-shark-carcharhinus-limbatus.jpg?format=500w"
    },
    {
        name: "Blue shark",
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550291308234-D9Z7DHF434NKIBU4VDPR/blue-shark-prionace-glauca.jpg?format=500w"
    },
    {
        name: "Brown Shyshark",
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550293903993-JS15FNIKT4N4I52I8U50/brown-shyshark-haploblepharus-fuscus.jpg?format=500w"
    },
];

const container = document.getElementById("shark-container");

sharks.forEach(shark => {
    const div = document.createElement("div");
    div.className = "shark-item";

    const pageName = "minicarcharhiniformes/" + shark.name.toLowerCase().replace(/\s+/g, "") + ".html";

    div.innerHTML = `
        <a href="${pageName}">
            <img src="${shark.img}" alt="${shark.name}">
        </a>
        <p>${shark.name}</p>
    `;

    container.appendChild(div);
});