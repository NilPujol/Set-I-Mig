import { Component, OnInit } from '@angular/core';
import { BarallaSetIMig } from '../../Model/Entitats/Implementations/Baralla/BarallaSetIMig';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-baralla-set-imig',
  templateUrl: './baralla-set-imig.component.html',
  styleUrls: ['./baralla-set-imig.component.css']
})
export class BarallaSetIMigComponent implements OnInit {
  //baralla!: BarallaSetIMig;
  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
    //this.baralla = new BarallaSetIMig();
    console.log(this.barallaService)
  }

  public getBaralla(): BarallaSetIMig {
    return this.barallaService.getBaralla();
  }
}
