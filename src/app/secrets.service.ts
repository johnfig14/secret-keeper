import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SecretsService {

  private secretsURL = 'http://localhost:4000/v1/secrets';  // URL to web api

  constructor(private http: Http) { }

  getSecrets(): Promise<any> {
    return this.http.get(this.secretsURL)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
