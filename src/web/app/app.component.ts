import {Component} from '@angular/core'
import pkg from '../../../package.json'
import {WalletService} from "./wallet.service";

@Component({
  selector: 'app-root',
  template: `
    <app-panel
      [title]="title"
      [description]="description"></app-panel>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = pkg.name.toUpperCase()
  description = pkg.description

  constructor(
    wallet: WalletService,
  ) {
  }
}
