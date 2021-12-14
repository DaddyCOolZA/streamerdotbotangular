import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GiftBombData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-giftbomb',
  templateUrl: './giftbomb.component.html',
  styleUrls: ['./giftbomb.component.scss']
})
export class GiftbombComponent implements OnInit {
  @Input() eventData: GiftBombData;
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
