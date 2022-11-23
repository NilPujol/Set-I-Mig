import { ICartaSetIMig } from "../Carta/ICartaSetIMig";

export interface IJugador {
  nom: string;
  cartes: ICartaSetIMig[];
  agafarCarta(carta: ICartaSetIMig): void;
  contar(): number;
}
