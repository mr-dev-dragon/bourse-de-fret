import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    data: {
      title: 'Public',
      type: 'module',
      menu: true,
    },
  },
  {
    path: '**',
    component: TestComponent,

    data: {
      title: 'Public',
      type: 'module',
      menu: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
