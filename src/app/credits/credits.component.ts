import { Component, OnInit } from '@angular/core';
import { CreditsModel } from '../models/alerts.model';
import { StreamdotbotService } from '../services/streamdotbot.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  constructor(private sbSocket: StreamdotbotService) { }

  credits: CreditsModel;
  creditsFetched = false;

  ngOnInit() {
    this.sbSocket.onopen = (ev) => {
      var msg = { "request": "GetCredits", "id": "credits" };
      this.sbSocket.send(JSON.stringify(msg));
    };

    console.log("Socket connected");

    this.sbSocket.onmessage = (event) => {
      var data: CreditsModel = JSON.parse(event.data);
      console.log(data);
      this.credits = data;
      if (data.id == "credits") {
        this.creditsFetched = true;
      }
    }
  }

}
