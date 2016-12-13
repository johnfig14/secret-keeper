import { Component } from '@angular/core';
import {SecretsService} from "./secrets.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getSecrets();
  }
  title = 'app works!';
  secrets : any;
  secretText : any;
  secretTextOutput : any;
  constructor (protected secretService : SecretsService){
    this.secretText = "I like musicals!";
    this.secretTextOutput = "I hate chocolate!";
  };

  getSecrets(): void {
    this.secretService.getSecrets().then(secrets => this.secrets = secrets);
  }
}


