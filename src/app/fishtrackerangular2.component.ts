import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginComponent} from './login-component/login-component';
import {FishcatchesRoot} from './fishcatches/fishcatches-root.component';
import {LoginService} from './login-component/login-service';
import {HomeComponent} from './home-component/home-component';
import {LogoutComponent} from './logout-component/logout-component';
import {RegisterComponent} from './register-component/register-component';
import {AboutComponent} from './about-component/about-component';
import {LakesRoot} from './lakes/lakes-root.component';
declare var toastr;
@Component({
  moduleId: module.id,
  selector: 'fishtrackerangular2-app',
   providers: [LoginService],
  templateUrl: 'fishtrackerangular2.component.html',
  styleUrls: ['fishtrackerangular2.component.css'],
   directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true},
  {path: '/login', component: LoginComponent, name: 'Login'},
  {path: '/fishcatch/...', component: FishcatchesRoot, name: 'FishCatches'},
  {path: '/lake/...', component: LakesRoot, name: 'Lakes'},
  {path: '/logout', component: LogoutComponent, name: 'Logout'},
  {path: '/register', component: RegisterComponent, name: 'Register'},
  {path: '/about', component: AboutComponent, name: 'About'}
])
export class Fishtrackerangular2AppComponent {
    private isLoggedIn: boolean = false;
    public title : string = "FishTracker";

  constructor(private loginService: LoginService) {
    loginService.loginAlertService$.subscribe(
        message => { setTimeout(() => { this.isLoggedIn = message; }, 1); });
    loginService.logoutAlertService$.subscribe(
        message => { setTimeout(() => { this.isLoggedIn = message; }, 1); });
    loginService.CheckLogin();
  }

  ngOnInit() {
    if(localStorage.getItem("Token") !== null){
      toastr.success("Welcome Back!");
    }
  }
}
