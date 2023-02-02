import { Invoice } from "./classes/invoice.js" 
import { ListTemplate } from "./classes/listTemplate.js"
import { Payment } from "./classes/payment.js" 
import { format } from "./interfaces/format.js"

const inv_one = new Invoice("devin", "web dev", 45)
console.log(inv_one.format())

const anchor = document.querySelector("a");

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

const ul = document.querySelector('ul')!

const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let doc: format

    if(type.value === "invoice"){
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }
    
    list.render(doc, type.value, "end")
})