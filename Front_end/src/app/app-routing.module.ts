import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InventarioComponent } from './body/inventario/inventario.component';
import { OrdentrabajoComponent } from './body/ordentrabajo/ordentrabajo.component';
import { PersonalComponent } from './body/personal/personal.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: BodyComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'ordentrabajo', component: OrdentrabajoComponent },
  { path: 'personal', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
