import { format } from "./../interfaces/format"

export class ListTemplate{
    constructor(public elem: HTMLUListElement){
    }

    render(item: format, heading: string, pos: "start" | "end"){
        const li = document.createElement('li');
  
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === 'start'){
        this.elem.prepend(li);
        } else {
        this.elem.append(li);
        }
    }
}