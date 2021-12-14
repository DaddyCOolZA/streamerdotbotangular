import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheerData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-cheer',
  templateUrl: './cheer.component.html',
  styleUrls: ['./cheer.component.scss']
})
export class CheerComponent implements OnInit {
  @Input() eventData: CheerData;
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
