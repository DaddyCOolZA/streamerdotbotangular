import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReSubData } from 'src/app/models/alerts.model';

@Component({
  selector: 'app-resub',
  templateUrl: './resub.component.html',
  styleUrls: ['./resub.component.scss']
})
export class ResubComponent implements OnInit {
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
