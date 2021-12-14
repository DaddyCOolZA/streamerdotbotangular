import { Component, OnInit } from '@angular/core';
import { EventQueueData, GiftData, MessageData, RaidData, StreamerBotMessage, SubData } from 'src/app/models/alerts.model';
import { StreamdotbotService } from 'src/app/services/streamdotbot.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  currentEvent = '';
  eventQue: EventQueueData[] = [];
  eventBusy = true;
  eventData: MessageData | SubData | GiftData | RaidData | any;
  constructor(private sbsocket: StreamdotbotService) { }

  ngOnInit(): void {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.sbsocket.onopen = (ev) => {
      // A list of all events to subscribe to can be found here https://wiki.streamer.bot/en/Servers-Clients/WebSocket-Server/Requests#getevents
      var msg = {
        "request": "Subscribe",
        "id": "AngularAlerts",
        "events": {
          "Twitch": [
            "Cheer",
            "Follow",
            "GiftBomb",
            "GiftSub",
            "Raid",
            "Resub",
            "Sub"
          ]
        }
      };
      this.sbsocket.send(JSON.stringify(msg));
    }
  }

  listen() {
    this.sbsocket.onmessage = (event) => {
      var data: StreamerBotMessage = JSON.parse(event.data);
      console.log(data);
      if (data.event) {
        if (data.event.type) {
          console.log(data.event.type);
          this.eventQue.push({ type: data.event.type, data: data.data });
        }
      }
      this.checkQue();
    }
  }

  completeEvent() {
    this.currentEvent = '';
    this.eventData = undefined;
    console.log("event complete");
    this.eventQue.shift();
    setTimeout(() => {
      this.checkQue();
    }, 100);
  }

  checkQue() {
    console.log(this.eventQue);
    this.eventData = this.eventQue[0] ? this.eventQue[0].data : null;
    this.currentEvent = this.eventQue[0] ? this.eventQue[0].type : '';
  }

}