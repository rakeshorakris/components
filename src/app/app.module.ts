// import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextfieldSmallComponent } from './textfield-small/textfield-small.component';
import { TextFieldLargeComponent } from './text-field-large/text-field-large.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './button-secondary/button-secondary.component';
import { ButtonTertiaryComponent } from './button-tertiary/button-tertiary.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    TextfieldSmallComponent,
    TextFieldLargeComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ButtonTertiaryComponent,
    ToggleComponent,
    CheckboxComponent,
    // MatIconModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
