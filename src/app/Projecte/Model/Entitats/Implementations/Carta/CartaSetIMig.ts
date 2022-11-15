import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig {
  value: Number;

  constructor(num: number, pal: string, img: string) {
    super(num, pal, img);
    this.value = this.CalcularValor(num);
  }
  private CalcularValor(num: number): number {
    if (num <= 7) return num;
    return 0.5;
  }
}
