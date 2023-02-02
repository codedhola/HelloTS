import { format } from "./../interfaces/format.js"

export class Payment implements format{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  format() {
    return`${this.recipient} saved £${this.amount} for ${this.details}`;
  }
}
