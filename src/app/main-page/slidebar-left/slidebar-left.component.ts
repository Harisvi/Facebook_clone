import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar-left',
  templateUrl: './slidebar-left.component.html',
  styleUrls: ['./slidebar-left.component.scss']
})
export class SlidebarLeftComponent implements OnInit {
  name="";
  constructor() { }

  ngOnInit(): void {
  }
  Links=[
  {icon: 'people',name:'Friends'},
  {icon: 'group',name:'Groups'},
  {icon: 'store',name:'Store'},
  {icon: 'video_library',name:'Video'},
  {icon: 'memory',name:'Momory'},
  {icon: 'saved',name:'Saved'},
  {icon: 'flag',name:'Pages'},
  {icon: 'event',name:'Events'},
  {icon: 'work',name:'Recuriments'},
  {icon: 'expand_more',name:'More'}
]
}
