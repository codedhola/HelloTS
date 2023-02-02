import { Invoice } from "./classes/invoice.js"
const inv_one = new Invoice("devin", "web dev", 45)
console.log(inv_one.format())


const anchor = document.querySelector("a");

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement


form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})