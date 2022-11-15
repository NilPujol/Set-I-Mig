import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";

export class BarallaSetIMig implements IBarallaSetIMig {
  cartes!: Array<ICartaSetIMig>;
  constructor() {

  }
  generar(): void {
    throw new Error("Method not implemented.");
  }
  barrejar(): void {
    throw new Error("Method not implemented.");
  }
}
