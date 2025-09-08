import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProjectListComponent } from './components/project-list/project-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: '**', redirectTo: '/' }
];
