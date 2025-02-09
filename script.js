let totalExpense = 0;

function addExpense() {

    let name = document.getElementById("expense-name").value;
    let amount = parseFloat(document.getElementById("expense-amount").value);
    let category = document.getElementById("expense-category").value;
    

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    
    let list = document.getElementById("expense-list");
    let li = document.createElement("li");
    li.innerHTML = `${name} ($${amount}) - ${category} <button class='delete' onclick='removeExpense(this, ${amount})'>X</button>`;
    list.appendChild(li);

    
    totalExpense += amount;
    document.getElementById("total-expense").textContent = totalExpense;

    
    document.getElementById("expense-name").value = "";

    document.getElementById("expense-amount").value = "";

}

function removeExpense(element, amount) {
    element.parentElement.remove();
    totalExpense -= amount;
    document.getElementById("total-expense").textContent = totalExpense;
}






