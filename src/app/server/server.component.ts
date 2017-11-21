import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverID : number = 151;
    serverStatus : string = 'offline';

    constructor(){
        setInterval(() => {
            this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';            
        },3000)
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}