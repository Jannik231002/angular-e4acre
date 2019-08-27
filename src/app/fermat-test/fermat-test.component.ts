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

  ngOnInit() {
  }

}