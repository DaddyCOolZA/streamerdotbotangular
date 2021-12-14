import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RaidData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.scss']
})
export class RaidComponent implements OnInit {
  @Input() eventData: RaidData;
  @Output() eventDone = new EventEmitter<string>();

  eventDuration = 10000;
  constructor() { }

  ngOnInit(): void {
    this.handleRaid();
  }

  handleRaid() {
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
