import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/Jugador/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: CartaSetIMig;
  constructor(private barallaService: BarallaService, private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }
  agafar(carta: CartaSetIMig) {
    if (this.jugadorService.getJugador().contar() <= 7.5) {
      carta.girar();
      this.jugadorService.getJugador().agafarCarta(carta);
      this.barallaService.getBaralla().eliminar(carta);
    }
  }
}
