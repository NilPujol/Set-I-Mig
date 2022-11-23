import { ICarta } from "./ICarta";

export interface ICartaSetIMig extends ICarta {
  value: Number;
  visible: boolean;
  CalcularValor(num: number): number;
  girar(): void;
}
