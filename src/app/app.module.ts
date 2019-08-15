import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { BaseComponent } from './base/base.component';
import { FunctionTestComponent } from './function-test/function-test.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';

const appRoutes: Routes = [{
  path: '',
  component: FunctionTestComponent
},{
  path: 'base',
  component: BaseComponent
},{
  path: 'observable',
  component: ObservableComponent
},{
  path: 'operator',
  component: OperatorComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    FunctionTestComponent,
    BaseComponent,
    ObservableComponent,
    OperatorComponent
  ],
  imports: [
  BrowserModule,
    TestModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
