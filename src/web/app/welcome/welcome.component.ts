import {
  Component,
  Input,
} from '@angular/core'

@Component({
  selector: 'app-welcome',
  template: `
    <div style="text-align:center" class="content">
      <h1 class="title" *ngIf="title">{{title}}</h1>
      <span class="description" *ngIf="description" style="display: block">{{description}}</span>
      <img width="300" [alt]="title" src="../../asset/logo.svg">
    </div>
  `,
})
export class WelcomeComponent {
  @Input() title?: string;
  @Input() description?: string;
}
