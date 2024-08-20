import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrewCardComponent } from './crew-card/crew-card.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'crew/:id', component: CrewCardComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
