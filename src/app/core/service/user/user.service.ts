import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = environment.apiUrl + '/api'
  constructor(private httpClient: HttpClient) {
  }
    addUser(user: any){
      return this.httpClient.post(this.URL+'/user/save',user);
    }

}
