"use strict";
class invoice {
    // client: string
    // details: string
    // amount: number
    // constructor(c: string, d: string, a: number){
    // this.client = c
    // this.details = d
    // this.amount = a
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inv_one = new invoice("devin", "web dev", 45);
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
