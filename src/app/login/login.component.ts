import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserenvironmentsService } from '../userenvironments.service';


export interface USERENV{
    "organizationEnvironmentId": number,
    "organizationEnvironmentName": string
}

export interface AUTHUSER{
    "UserNameOrEmail": string,
    "Password":string,
    "EnvironmentID":number
}
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    public error: any;
    inputData!: string;
    visible: boolean = true;
    changeType: boolean = true;
    inputdata!: string;
    inputenv: boolean = false;
    data: USERENV[] = [];
    isFormSaved=false;
    color=false

    inputsForm!:FormGroup;

    constructor(private fb:FormBuilder, private userEnvironments: UserenvironmentsService,  private route: Router){}
  
    ngOnInit(): void {
      this.inputsForm=this.fb.group({
        UserNameOrEmail: ['', [ Validators.required,Validators.minLength(2),Validators.maxLength(35) ]],
        Password: ['', [ Validators.required,Validators.minLength(6) ]],
        EnvironmentID: ['', Validators.required]
                    
      });
    }

    get regCard() {
      return this.inputsForm.controls;
    }

    save(){
      this.error="";
      this.isFormSaved = true;
      if (this.inputsForm.invalid) {
        return;
        }
      for(var i=0;i<this.data.length;i++){
        if(this.data[i].organizationEnvironmentName == this.inputsForm.value.EnvironmentID)
        {
          this.inputsForm.value.EnvironmentID = this.data[i].organizationEnvironmentId
          break;
        }
      }
      if(this.inputsForm.value.EnvironmentID == 1){
        this.userEnvironments.checkingMaster(this.inputsForm.value).subscribe((response)=>{
          localStorage.setItem('Token', response.token)
          this.route.navigate(['home/dash'])
        },
        (error: HttpErrorResponse)=>{
          this.error = (error.error.message);
          this.isFormSaved = false;

        })
      }
      else{
        this.userEnvironments.checkingUser(this.inputsForm.value).subscribe((response)=>{
          localStorage.setItem('Token', response.token)
          this.route.navigate(['home/dash'])
        },
        (error: HttpErrorResponse)=>{
          this.error = (error.error.message);     
           this.isFormSaved = false;
        })
      }
     
    }
    onKeyUp(event:any){
      this.inputenv = false;
      this.color = false;
      this.error="";
      if(this.inputsForm.value.UserNameOrEmail!=this.inputData.length){
        this.userEnvironments.envData(this.inputsForm.value.UserNameOrEmail).subscribe(response => {
          this.data=response;
          this.color = true;
          this.inputenv = true;
        },
        (error: HttpErrorResponse) => {
          this.error = (error.error.message);
        }); 
      }
    }

    clear(){
      this.inputData = '';
      this.inputenv = false;
      this.data = [];
      this.isFormSaved=false;
      this.color=false

    }
    
    viewpass(){
      this.visible = !this.visible;
      this.changeType = !this.changeType
    }

}

