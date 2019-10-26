import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  satelliteCount (value: string): number {
    let totalType = 0;
    for(let i = 0; i < this.satellites.length; i++){
        if (this.satellites[i].type === value){
            totalType+=1
        }
   }
  return totalType;
}
}