import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from '../models/interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  getUserInfo():Observable<IUserInfo> {
    return this.http.get<IUserInfo>("https://api.github.com/users/mdsarfarazafzal");
  }

}
