function generateTable() {
    const number = parseInt(document.getElementById("numberInput").value);
    const outputDiv = document.getElementById("output");

    if (isNaN(number) || number < 1 || number > 12) {
        alert("กรุณาใส่ตัวเลขระหว่าง 1 ถึง 12");
        return;
    }

    let tableHTML = "<table>";
    tableHTML += "<tr><th>เลขคูณ</th><th>ผลลัพธ์</th></tr>";

    for (let i = 1; i <= 12; i++) {
        tableHTML += `<tr><td>${number} × ${i}</td><td>${number * i}</td></tr>`;
    }

    tableHTML += "</table>";
    outputDiv.innerHTML = tableHTML;

}