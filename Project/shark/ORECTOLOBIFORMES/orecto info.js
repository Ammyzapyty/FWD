const sharks = [
    {
        name: "Bluegrey Carpet Shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550292153840-HNIH1X7HJE82B7JVYXZ7/bluegrey-carpetshark-geteroscyllium-colcloughi.jpg?format=500w"
    },
    {
        name: "Epaulette shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550533954822-F3L9KDMYKP60L7OP5VE8/epaulette-shark-hemiscyllium-ocellatus.jpg?format=500w"
    },
    {
        name: "Nurse shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550600104578-7KBW9ONLXXQMQS1GTU6X/nurse-shark-ginglymostoma-cirratum.jpg?format=500w"
    },
    {
        name: "Spotted wobbegong" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550621319317-1W12QISJLT3OXK8K4BSI/spotted-wobbegong-orectolobus-maculatus.jpg?format=500w"
    },
    {
        name: "Tawny nurse shark" ,
        img: "https://images.squarespace-cdn.com/content/v1/5bae466429f2cc29475d636e/1550621661018-9W1DKA0V0WGKSI0BPPU7/tawny-nurse-shark-nebrius-ferrugineus.jpg?format=500w"
    }
]

const container = document.getElementById("shark-container");

sharks.forEach(shark => {
    const div = document.createElement("div");
    div.className = "shark-item";

    const pageName = "miniorecto/" + shark.name.toLowerCase().replace(/\s+/g, "") + ".html";

    div.innerHTML = `
        <a href="${pageName}">
            <img src="${shark.img}" alt="${shark.name}">
        </a>
        <p>${shark.name}</p>
    `;

    container.appendChild(div);
});