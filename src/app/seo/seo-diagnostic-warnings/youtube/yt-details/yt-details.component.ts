import {Component, Input, OnInit} from '@angular/core';
import {warningTable} from '../models/youtube_model';

@Component({
  selector: 'app-yt-details',
  templateUrl: './yt-details.component.html',
  styleUrls: ['./yt-details.component.css']
})
export class YtDetailsComponent implements OnInit {

  @Input() warningData: warningTable;

  constructor() {
  }

  ngOnInit() {
  }

}
