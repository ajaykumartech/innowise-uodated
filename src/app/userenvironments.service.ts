import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {Observable, retry} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserenvironmentsService {
  returnvalue: boolean = true
  strurl:any;

  constructor(private http: HttpClient, private route: Router) {}

   APIURL = "https://insurance-api01.suvamglobal.com/master/"
   url2='https://insurance-api01.suvamglobal.com/domain/'
   DATAURL = 'http://localhost:8000/posts'



   callService(val:string): Observable<any>{
      return this.http.get(this.APIURL + 'serverstatus') 
   }

   envData(d:string): Observable<any> {
      var body = {
        "UserNameOrEmail": d
      }
      return this.http.post(this.APIURL + 'getuserenvironments', body)
   }

   checkingMaster(masteruser: string):Observable<any>{
      return this.http.post(this.APIURL + 'authenticatemaster', masteruser)
   }

   checkingUser(user:string):Observable<any> {
      return this.http.post(this.APIURL + 'authenticate', user)
   }


    d = ''
    async getDataa(token:any){
      await fetch('https://insurance-api01.suvamglobal.com/master/testauth', {
        method: 'GET',
        headers: {
          'Authorization': token
        },
      })
      .then((response) =>{ 
          this.d = response.statusText
      })
      return this.d
    }

    dashboardData(){
      return this.http.get(this.APIURL )
    }
    //Line graph
    graphId(id:number, token:any){
      var body = { 'Id': id}
      var headers = new HttpHeaders().set('Authorization', token )
      return this.http.post(this.url2 + 'dashboarddata' , body , {'headers': headers})
    }


    getDashboardData(token:any){
      var headers = new HttpHeaders().set('Authorization', token )
      return this.http.get(this.url2 + 'dashboard' , {'headers': headers}) 
    }

    getDashboardDatabyID(id:number, token:any){
      var body = {'Id': id}
      var headers = new HttpHeaders().set('Authorization', token )
      return this.http.post(this.url2 + 'dashboarddata' , body , {'headers': headers}) 
    }



  //Commision Summary API
    commissionSummary(token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.get(this.url2 + 'dashboard', {headers: Headers})  
    }

    commissionIdSummary(id:any, token: any){
      var body = {
        "Id": id
      }
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.post(this.url2+ 'dashboarddata', body, {headers: Headers})
    }


    // Policy Sales API
    policySummary(token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.get(this.url2 + 'dashboard', {headers: Headers})  
    }

    policyIdSummary(id:any, token: any){
      var body = {
        "Id": id
      }
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.post(this.url2+ 'dashboarddata', body, {headers: Headers})
    }
  
    // Profile Pic
    getProfilePic(token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.get(this.APIURL + 'testauth', {headers: Headers})  
    }
    
    // Notifications
    getNotificationCount1(token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.get(this.url2 + 'getnotificationscount', {headers: Headers}) 
    }
    
    getNotificationCount(token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.get(this.url2 + 'getnotifications', {headers: Headers}) 
    }

    changeNotificationState(body:any,token:any){
      let Headers = new HttpHeaders();
      Headers = Headers.set('Authorization', token)
      return this.http.post(this.url2+ 'changenotificationstate', body, {headers: Headers})
    }
    
  //customer page

  customerData(token:any, tabledata:any){
    var body = tabledata
    let Headers = new HttpHeaders();
    Headers = Headers.set('Authorization', token)
    return this.http.post(this.url2+ 'searchcustomer', body,{headers: Headers})
  }

  getsearchcustomer(data:any, token:any){ 
    var body = data
    var headers = new HttpHeaders().set('Authorization', token )
    return this.http.post(this.url2 + 'searchcustomer' , body , {'headers': headers})
   }

   
  //customer details  
  getcustomerDetails(customer:any, token:any){
    var headers = new HttpHeaders().set('Authorization', token )
    return this.http.get(this.url2 + 'getcustomerbasicdetails?CUID=' +customer, {'headers': headers})
   }

   getcustomertable(token:any, cuid:any){
    var headers = new HttpHeaders().set('Authorization', token)
    return this.http.get(this.url2 + 'getcustomerspecificdetails?CUID=' +cuid, {'headers': headers})
   }
  //  getcustomertable1(token:any, cuid:any){
  //   var headers = new HttpHeaders().set('Authorization', token)
  //   return this.http.get("http://localhost:3000/tableData")
  //  }

   getSchema(token:any){ 
    var headers = new HttpHeaders().set('Authorization', token )
    return this.http.get(this.url2 + 'getcustomerspecificschema' , {'headers': headers})
   }
 
   //Intelligence Data

   getintelligenceData(token:any, cuid:any){
    var headers = new HttpHeaders().set('Authorization', token)
    return this.http.get(this.url2 + 'getcustomerintelligence?CUID=' +cuid, {'headers': headers})
   }

   intelligencebuttonUrl(url:any, token:any){
    this.strurl = url.slice(1)
    console.log("url: ", this.strurl)
    var headers = new HttpHeaders().set('Authorization', token)
    return this.http.get(this.url2 + this.strurl, {'headers': headers} )
   }

}

