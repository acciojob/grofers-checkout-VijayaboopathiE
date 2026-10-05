const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);


const getSum = () => {

    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(function(price) {
        total += Number(price.textContent);
    });


    const table = document.querySelector("table");

    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const totalCell = document.createElement("td");

    totalCell.colSpan = 2;

    totalCell.textContent = "Total Price: " + total;

    totalRow.appendChild(totalCell);

    table.appendChild(totalRow);
};


// Calculate automatically when page loads
getSum();


// Calculate when button is clicked
getSumBtn.addEventListener("click", getSum);