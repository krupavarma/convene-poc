import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatToolbarModule, MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes }   from '@angular/router';
import { SurveydetailsComponent } from './surveydetails/surveydetails.component';
import { SurveyComponent } from './survey/survey.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  {path:'survey',component:SurveyComponent},
  {path:'surveyDetails',component:SurveydetailsComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    SurveydetailsComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatIconModule,MatToolbarModule,MatButtonModule, MatCheckboxModule,MatInputModule,
    FormsModule,MatCardModule,RouterModule.forRoot(routes),MatDialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
