import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const app_routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);