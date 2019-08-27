import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
  Kandidat: number = 13;
  Testanzahl: number = 5;
  Ergebnis = "noch nicht berechnet"
  constructor() { }

  fermattest() {
    this.Ergebnis = "Starte Fermat-Test der Zahl"
      + this.Kandidat + "...";
    let zeuge = 2;
    // Berechne zeuge^(zu testende Zahl-1) modulo zu testende Zahl
    let zwischenergebnis = 1
    for (let i = 0; i < this.Kandidat - 1; i++) {
      zwischenergebnis = zwischenergebnis * zeuge;
    }
    zwischenergebnis = zwischenergebnis % this.Kandidat;
    if (zwischenergebnis === 1) {
      this.Ergebnis += "Zeuge " + zeuge + "OK...";
    }
    else {
      this.Ergebnis += "Zeuge" + zeuge + "NICHT OK! ";
    }
  }

  ngOnInit() {
  }

}