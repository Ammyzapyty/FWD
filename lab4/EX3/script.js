let balance = 0;

function additem() {
    const list = document.getElementById("list").value;
    const value = parseFloat(document.getElementById("value").value);
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;
    const tbody = document.getElementById("tbody");
    const now = document.getElementById("now");

    if (!list || !value || type === "00" || !date) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    const tr = document.createElement("tr");

    const tdDate = document.createElement("td");
    const tdList = document.createElement("td");
    const tdIncome = document.createElement("td");
    const tdExpense = document.createElement("td");

    tdDate.textContent = date;
    tdList.textContent = list;

    if (type === "1") {
        tdIncome.textContent = value;
        tdExpense.textContent = "0";
        balance += value;
    } else {
        tdIncome.textContent = "0";
        tdExpense.textContent = value;
        balance -= value;
    }

    tr.appendChild(tdDate);
    tr.appendChild(tdList);
    tr.appendChild(tdIncome);
    tr.appendChild(tdExpense);
    tbody.appendChild(tr);

    now.textContent = balance;

    document.getElementById("list").value = "";
    document.getElementById("value").value = "";
    document.getElementById("type").value = "00";
    document.getElementById("date").value = "";
}
