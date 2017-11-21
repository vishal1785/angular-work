import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { AppComponent }  from './app.component';
import { RouteComponent }  from './route/route.component';
import { AppProduct } from './product/product.component';
import { AppInventory } from './inventory/inventory.component';
import { HighlightComponent }  from './highlight/highlight.component';
import { HighlightDirective }  from './highlight/highlight.directive';
import { ServerComponent } from './server/server.component';
import { NavComponent } from './navigation/nav.component';

const appRoutes: Routes = [
   { path: 'Product', component: AppProduct },
   { path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,
                  TabsModule.forRoot(),AccordionModule.forRoot(),
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, RouteComponent, AppInventory, AppProduct,
                  HighlightComponent,HighlightDirective, ServerComponent, NavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
