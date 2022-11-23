import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig {
  value: number;
  visible: boolean;

  constructor(num: number, pal: string, img: string) {
    super(num, pal, img);
    this.visible = false;
    this.value = this.CalcularValor(num);
  }
  public CalcularValor(num: number): number {
    if (num <= 7) return num;
    return 0.5;
  }
  girar(): void {
    this.visible = true;
  }
}
