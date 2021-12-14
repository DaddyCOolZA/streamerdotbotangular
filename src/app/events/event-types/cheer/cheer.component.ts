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
  constructor() { }

  ngOnInit(): void {
  }

}
