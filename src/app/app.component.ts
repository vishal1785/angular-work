import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: './app.component.html',
   //styleUrls: ['./app.component.css'],
   styles: [`
        h3{
            color: blue;
        }
   `]
})

export class AppComponent  {
    appTitle: string = 'Angular';
}
