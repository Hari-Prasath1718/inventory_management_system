import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-stock',
  standalone: false,
  templateUrl: './stock.html',
  styleUrl: './stock.css',
})
export class Stock {
  constructor(private dialog: MatDialog) {}
// openDialog() {
//   this.dialog.open(, {
//     width: '400px'
//   });
// }
}
