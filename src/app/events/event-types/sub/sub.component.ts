import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReSubData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  @Input() eventData: ReSubData;
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
