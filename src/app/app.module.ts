import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponent }  from './route.component';
import { AppProduct } from './product.component';
import { AppInventory } from './inventory.component';
import { HighlightComponent }  from './highlight.component';
import { HighlightDirective }  from './highlight.directive';
import { ServerComponent } from './server/server.component';

const appRoutes: Routes = [
   { path: 'Product', component: AppProduct },
   { path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, RouteComponent, AppInventory, AppProduct,
                  HighlightComponent,HighlightDirective, ServerComponent ],
  //bootstrap:    [ AppComponent ]
  //bootstrap:    [ RouteComponent ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
