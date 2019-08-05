import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { PersonalComponent } from './body/personal/personal.component';
import { InventarioComponent } from './body/inventario/inventario.component';
import { OrdentrabajoComponent } from './body/ordentrabajo/ordentrabajo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DetalleordenComponent } from './body/ordentrabajo/detalleorden/detalleorden.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    PersonalComponent,
    InventarioComponent,
    OrdentrabajoComponent,
    DetalleordenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
