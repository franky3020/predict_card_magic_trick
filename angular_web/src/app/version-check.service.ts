import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionRes } from './apiRes/VersionRes';

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {

  constructor(private http: HttpClient) { }

  getVersion() {
    return this.http.get<{ [version: string]: VersionRes }>("http://localhost:3000/appversion");
  }
}
