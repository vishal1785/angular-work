import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
    selector:'app-nav',
    templateUrl: './nav.component.html'
})

export class NavComponent{
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