import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { CartaSetIMig } from "../Carta/CartaSetIMig";

export class BarallaSetIMig implements IBarallaSetIMig {
  cartes: Array<CartaSetIMig> = new Array<CartaSetIMig>;
  constructor() {
    this.generar();
    this.barrejar();
  }
  generar(): void {
    let pals: Array<string> = ["Rombes", "Cors", "Trèvols", "Piques"];
    let imatges: Array<string> = ["♦", "♥", "♣", "♠"];
    for (let j = 0; j < pals.length; j++) {
      for (let i = 1; i <= 12; i++) {
        if (!(i == 8 || i == 9)) {
          this.cartes.push(new CartaSetIMig(i, pals[j], imatges[j]));
        }
      }
    }
  }
  eliminar(carta: CartaSetIMig) {
    //this.cartes.filter(c => carta.num != c.num || carta.pal != c.pal);
    this.cartes = this.cartes.filter(c => c != carta);
  }
  barrejar(): void {

    for (let i = this.cartes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
    }
  }
}
