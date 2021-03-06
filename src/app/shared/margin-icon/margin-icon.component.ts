import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'psa-margin-icon',
  templateUrl: './margin-icon.component.html',
  styleUrls: ['./margin-icon.component.css']
})
export class MarginIconComponent implements OnInit {
  @Input() iconName: String;

  constructor() {}

  ngOnInit() {}
}
