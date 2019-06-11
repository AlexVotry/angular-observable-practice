import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  constructor() { }

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.hoverSection.addEventListener('click', onClick);
  }
  unsubscribe = () => {
    console.log('Called unsubscribe()');
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }
}

const onClick = (ev: Event) => console.log('click:', ev);
const onMouseMove = (ev: MouseEvent) => console.log('mousemove:', ev);