import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProjectListComponent } from './components/project-list/project-list';
import { ProjectFormComponent } from './components/project-form/project-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/edit/:id', component: ProjectFormComponent },
  { path: '**', redirectTo: '/' }
];
