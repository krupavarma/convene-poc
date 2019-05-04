import { Component, OnInit } from '@angular/core';
import {CreateSurvey} from '../shared/entities/createSurvey';
import {Storage} from '../shared/utils/storage';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  createSurvey: any = new CreateSurvey();

  title = 'convene-poc';
  surveyList = [];

  constructor() { 
  let data:any = Storage.getLocalItem('surveyList');
   console.log(data);
   if(data){
    data.forEach(element => {
      this.surveyList.push(element)
    });
   }
   
  }

  ngOnInit() {
  }
  create(){
    console.log(this.createSurvey);
    this.surveyList.push({'surveyName':this.createSurvey.name});
    Storage.setLocalItem('surveyList',this.surveyList);
  }
  getSuveyName(data){
    Storage.setLocalItem('surveyName',data.surveyName)
  }
}
