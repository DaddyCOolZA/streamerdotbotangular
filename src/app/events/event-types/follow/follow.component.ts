import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  @Input() eventData: FollowData;
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
