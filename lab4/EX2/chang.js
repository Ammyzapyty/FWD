function change() {
    const labels = document.getElementsByTagName("label");
    labels[0].innerText = "First Name:";
    labels[1].innerText = "Last Name:";
    labels[2].innerText = "Country:";

    const countrySelect = document.getElementById("contryselect");
    countrySelect.innerHTML = "";

    const countriesEN = [
        "Select a country", "Thailand", "Vietnam", "Laos", "Malaysia",
        "Singapore", "Philippines", "Myanmar", "Cambodia", "Brunei"
    ];

    countriesEN.forEach(function (country) {
        const option = document.createElement("option");
        option.text = country;
        countrySelect.appendChild(option);
    });

    const button = document.querySelector("button");
    button.innerText = "Change to Thai";
    button.setAttribute("onclick", "changeToThai()");

}

function changeToThai() {
    const labels = document.getElementsByTagName("label");
    labels[0].innerText = "ชื่อ:";
    labels[1].innerText = "นามสกุล:";
    labels[2].innerText = "ประเทศ:";

    const countrySelect = document.getElementById("contryselect");
    countrySelect.innerHTML = "";

    const countriesTH = [
        "เลือกประเทศ", "ไทย", "เวียดนาม", "ลาว", "มาเลเซีย",
        "สิงคโปร์", "ฟิลิปปินส์", "เมียนมาร์", "กัมพูชา", "บรูไน"
    ];

    countriesTH.forEach(function (country) {
        const option = document.createElement("option");
        option.text = country;
        countrySelect.appendChild(option);
    });

    const button = document.querySelector("button");
    button.innerText = "เปลี่ยนเป็นภาษาอังกฤษ";
    button.setAttribute("onclick", "change()");

}
