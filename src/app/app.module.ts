import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateComponent } from './tiles/translate/translate.component';
import { MagickeyComponent } from './tiles/magickey/magickey.component';
import { SelectionComponent } from './tiles/selection/selection.component';
import {FormsModule} from "@angular/forms";
import { PreviewComponent } from './tiles/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent,
    MagickeyComponent,
    SelectionComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
