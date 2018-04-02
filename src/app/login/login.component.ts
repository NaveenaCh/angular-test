import { Component ,OnInit} from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { UserServiceService } from '../user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'login-root',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
private user={
	username:"",
	password:""
}
  constructor(private http: HttpClient,private spinnerService:Ng4LoadingSpinnerModule, private userService:UserServiceService,private router:Router,private toastr:ToastrService) {

  }

login(): void {
  if (!this.user) { return; }
  this.userService.login(this.user)
     .subscribe(result => {
        console.log("login response::",result);
    });
}
}
