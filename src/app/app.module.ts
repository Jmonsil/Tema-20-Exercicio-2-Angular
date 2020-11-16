import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ComponentesModule } from './componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ComponentesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
