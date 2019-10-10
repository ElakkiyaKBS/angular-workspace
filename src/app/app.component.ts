import { Component,ViewChild, ElementRef, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  title: any;
  selectedOpt:any;
  show:any;
  changed:any;
  focused:any;
  clicked:boolean = false;
  showContent:boolean = false;
  indexVal:number;
  
  testArray = [
    {"veh_code":"VEH100086","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2012","purch_year":"2016","new_used":"Used","cost":"4000000","reg_no":"KRD 798 EA","reg_date":"24-03-2016","agency":"MVAA","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100085","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2010","purch_year":"2011","new_used":"New","cost":"3325000","reg_no":"AKD 886 AY","reg_date":"27-09-2011","agency":"MVAA","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100084","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"YARIS","year":"2010","purch_year":"2014","new_used":"Used","cost":"2000000","reg_no":"GGE 395 CU","reg_date":"01-04-2014","agency":"MVAA","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100083","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"HILUX","year":"2010","purch_year":"2013","new_used":"Used","cost":"4000000","reg_no":"MUS 142 XF","reg_date":"19-07-2013","agency":"MVAA","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100009","make":"SUZUKI","chassis_no":null,"engine_no":null,"model":"EVERY","year":"2002","purch_year":"2019","new_used":"Used","cost":"800000","reg_no":"LSD 422 XG","reg_date":"24-01-2019","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100008","make":"SUZUKI","chassis_no":null,"engine_no":null,"model":"EVERY","year":"2002","purch_year":"2018","new_used":"Used","cost":"800000","reg_no":"LSD 423 XG","reg_date":"24-01-2019","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100007","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2006","purch_year":"2018","new_used":"Used","cost":"2100000","reg_no":"FST 552 FM","reg_date":"11-02-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100006","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2006","purch_year":"2018","new_used":"Used","cost":"2100000","reg_no":"FST 551 FM","reg_date":"11-02-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100005","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2007","purch_year":"2018","new_used":"Used","cost":"2100000","reg_no":"FST 550 FM","reg_date":"11-02-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100004","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2007","purch_year":"2018","new_used":"Used","cost":"2100000","reg_no":"FST 549 FM","reg_date":"11-02-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100003","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2006","purch_year":"2018","new_used":"Used","cost":"2100000","reg_no":"FST 548 FM","reg_date":"11-02-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100002","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"COROLLA","year":"2012","purch_year":"2018","new_used":"Used","cost":"4000000","reg_no":"KTU 767 FN","reg_date":"21-11-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100001","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"SIENNA","year":"2010","purch_year":"2018","new_used":"Used","cost":"1780000","reg_no":"AGL 725 FM","reg_date":"29-11-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""},
    {"veh_code":"VEH100000","make":"TOYOTA","chassis_no":null,"engine_no":null,"model":"SIENNA","year":"2010","purch_year":"2018","new_used":"Used","cost":"1750000","reg_no":"AGL 724 FM","reg_date":"29-11-2018","agency":"","old_reg_no":"","old_reg_date":null,"old_agency":""}
    ]

@Input() comp2input;
@Input() secondtext;

  constructor(){
    this.title = "";
  }
showImages(e,t:HTMLInputElement){
console.log(t.value);
}
blur(e:HTMLInputElement){
this.show= "erase text";
}
change(){
  this.changed= "change text";
}
focus(){
  this.focused= "focused text";
}
weekdays(e,t:HTMLInputElement){
}
buttonClicked(){
 this.clicked = !this.clicked;
}
showClick(i){
  this.showContent= !this.showContent;
  this.indexVal = i;
}
}


