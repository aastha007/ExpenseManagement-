import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

    id;

    constructor(private http: HttpClient, private router: Router) {}

    get isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    register(credentials){
        this.http.post<any>(`http://localhost:52198/api/account`, credentials).subscribe(res =>{
            this.authenticate(res);
            this.router.navigate(['/']);
        });
    }    
    
    login(credentials){
        console.log(credentials);
        this.http.post<any>(`http://localhost:52198/api/account/login`, credentials).subscribe(res =>{
            this.authenticate(res);
            this.http.get(`http://localhost:52198/api/user/${credentials.Email}`).subscribe((res)=>{
                this.router.navigate(['/home', res.id]);
                this.id = res.id;
            })
        })
    }

    authenticate(res) {
        localStorage.setItem('token', res)

        
    }

    logout() {
        localStorage.removeItem('token')
    }
}