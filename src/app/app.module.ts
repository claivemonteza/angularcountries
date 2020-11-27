import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { CountryCardComponent } from './pages/country-card/country-card.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { ExportComponent } from './pages/export/export.component';
import { DetailComponent } from './pages/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryCardComponent,
    DropdownComponent,
    ExportComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
