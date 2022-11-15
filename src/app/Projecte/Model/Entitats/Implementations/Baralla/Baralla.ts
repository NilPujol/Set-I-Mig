import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { ICarta } from "../../Interfaces/Carta/ICarta";

export class Baralla implements IBaralla<ICarta> {
  cartes!: Array<ICarta>;
  constructor() {

  }
  barrejar(): void {
    throw new Error("Method not implemented.");
  }
}
