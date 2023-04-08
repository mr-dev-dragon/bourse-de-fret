import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainRoutes } from './core/routes/routes';
import { LayoutComponent } from './public/components/layout/layout.component';


const routes: Routes = [
  {
    path: 'public',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    component: LayoutComponent,
    children: mainRoutes,
    data: {
      title: 'main Routes to the main module',
      type: 'content',
    },
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
