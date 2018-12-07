import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BootDemoComponent} from './learn-bootstrap-demo/components/boot-demo/boot-demo.component';


const routes: Routes = [
  {path: '', component: BootDemoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
