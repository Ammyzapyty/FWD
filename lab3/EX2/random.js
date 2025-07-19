function random() {
    const numshow = [];
    for (let i = 0; i < 6; i++) {
        
        const num = Math.floor(Math.random() * 10);
        numshow.push(num);
    }

    const container = document.querySelector(".pic");
    container.innerHTML = "";

    numshow.forEach(num => {
        const img = document.createElement("img");
        img.src = `http://webdev.it.kmitl.ac.th/labdocs/lab3/images/${num}.png`;
        img.alt = num;
        container.appendChild(img);
    });
}