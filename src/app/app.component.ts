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
    appTitle: string = 'Welcome';
    allowNewServer = false;
    newServerStatus = 'server not created';
    newServerName = 'Console 1';
    
    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000)
    }

    onServerCreated(){
        this.newServerStatus = this.newServerName + " server created successfully";
    }

    onUpdateServer(event : Event){
        this.newServerName = (<HTMLInputElement>event.target).value;
    }
}
