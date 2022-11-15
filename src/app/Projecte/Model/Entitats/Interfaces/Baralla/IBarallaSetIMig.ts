import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { IBaralla } from "./IBaralla";

export interface IBarallaSetIMig extends IBaralla<ICartaSetIMig> {
  generar(): void;
}
