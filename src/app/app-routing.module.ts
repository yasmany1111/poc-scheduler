import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'sandbox',
    loadChildren: () => import('./sandbox/sandbox.module').then((m) => m.SandboxModule)
  },
  {
    path: '',
    redirectTo: 'sandbox',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
