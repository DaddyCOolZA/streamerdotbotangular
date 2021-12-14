import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GiftSubData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-giftsub',
  templateUrl: './giftsub.component.html',
  styleUrls: ['./giftsub.component.scss']
})
export class GiftsubComponent implements OnInit {
  @Input() eventData: GiftSubData;
  @Output() eventDone = new EventEmitter<string>();

  eventDuration = 10000;
  constructor() { }

  ngOnInit(): void {
    this.handleAlert();
  }

  handleAlert() {
    this.playAudio();
    setTimeout(() => {
      this.eventDone.emit('done');
    }, this.eventDuration);
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../../assets/audio/raid.mp3";
    audio.load();
    audio.play();
  }
}
