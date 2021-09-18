import {Component} from '@angular/core'
import pkg from '../../../package.json'

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-welcome [title]="title" [description]="description"></app-welcome>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = pkg.name.toUpperCase()
  description = pkg.description
}
