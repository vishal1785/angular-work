import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
   selector: 'app-inventory',
   templateUrl: './inventory.component.html',
   styleUrls: ['styles.css']
})

export class AppInventory  {
    public customClass: string = 'customClass';

    constructor(private _router:Router){}

    onBack(){
        this._router.navigate(['/Product']);
    }
}