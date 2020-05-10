import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxPackagesService {
  boxPackagesUrl = "http://www.mocky.io/v2/5e8465c23000008400cf4395";

  constructor(private httpClient: HttpClient) { }

  getBoxPackages(){
    return this.httpClient.get(this.boxPackagesUrl);
  }
}
