import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { Question } from '../shared/entities/question';
import {CreateSurvey} from '../shared/entities/createSurvey';
import { Storage } from '../shared/utils/storage';
@Component({
  selector: 'app-surveydetails',
  templateUrl: './surveydetails.component.html',
  styleUrls: ['./surveydetails.component.css']
})
export class SurveydetailsComponent implements OnInit {
  ques: any = new Question();
  surveyName:any;
  show:boolean = false;
  options:any = [];
  // createSurvey: any =new  CreateSurvey();
  questions = [];
  constructor(public dialog: MatDialog) {
    let quesList:any = Storage.getLocalItem('questionList');
    this.surveyName = Storage.getLocalItem('surveyName');
    // console.log(quesList);
    if(quesList){
      quesList.forEach(element => {
      if(element.surveyName == this.surveyName){
        this.questions.push(element)
      }
     });
    }
   }

  ngOnInit() {
  }
  openDialog(template) {
    this.dialog.open(template)
  }
  add() {
    let questionList = Storage.getLocalItem('questionList')
    let surveyList:any = Storage.getLocalItem('surveyList')
    let surveyName = Storage.getLocalItem('surveyName')
    // this.questions.push(this.ques);
    surveyList.forEach(element => {
      console.log(element)
      if(element.surveyName == surveyName){
        this.questions.push({'question':this.ques.question,'surveyName':surveyName});
      }
      else{
        // this.questions.push(questionList);
      }
     
    });
   
  //  console.log(this.questions);
   console.log(this.questions)
   Storage.setLocalItem('questionList',this.questions)
   this.dialog.closeAll();
  }
  addRadio(){
    this.show = true;
    this.options.push(this.options.name);
    console.log(this.options);
  }
}
