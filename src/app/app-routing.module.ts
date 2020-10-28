import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course-preview',
    pathMatch: 'full'
  },
  {
    path: 'course-preview',
    loadChildren: () => import('./modules/course-preview/course-preview.module').then(m => m.CoursePreviewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
