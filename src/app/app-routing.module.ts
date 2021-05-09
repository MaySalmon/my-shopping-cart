import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { AdminComponent } from './components/admin/admin.component'
import { NewitemComponent } from './components/admin/newitem/newitem.component'
import { EdititemComponent } from './components/admin/edititem/edititem.component'
import { StateComponent } from './components/shared/state/state.component'

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'shop' , component: ShoppingCartComponent},
    { path: 'admin', component: AdminComponent },
    { path: 'newitem', component: NewitemComponent},
    { path: 'edititem/:id', component: EdititemComponent},
    { path: 'state', component: StateComponent},
    { path: '**', component: PageNotFoundComponent },

    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
         RouterModule
    ]
})

export class AppRoutingModule{

}

export const routingComponent= [PageNotFoundComponent,
    EdititemComponent,
    NewitemComponent,
    AdminComponent]