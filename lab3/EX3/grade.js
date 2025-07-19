function grade() {
    const min = 40;
    const max = 100;
    const count = 8;

    const table = document.querySelector("table");

    for (let i = 1; i <= count; i++) {
        const row = table.rows[i];

        const score = Math.floor(Math.random() * (max - min + 1)) + min;


        let grade = '';
        if (score >= 80) {
            grade = 'A';
        } else if (score >= 70) {
            grade = 'B';
        } else if (score >= 60) {
            grade = 'C';
        } else if (score >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        while (row.cells.length < 4) {
            row.insertCell();
        }

        row.cells[2].textContent = score;
        row.cells[3].textContent = grade;
    }
}
