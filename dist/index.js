import { Invoice } from "./classes/invoice.js";
const inv_one = new Invoice("devin", "web dev", 45);
console.log(inv_one.format());
const anchor = document.querySelector("a");
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
