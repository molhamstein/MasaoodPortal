import { MainService } from './../../service/main.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: [any];
  @Input() fields: [string];
  @Input() count: number;
  @Input() limit: number;
  @Input() currentPage: number;
  @Input() withPage: boolean=true;

  @Output() actionOnRow = new EventEmitter<any>();
  @Output() changePage = new EventEmitter<number>();


  constructor(private mainSer: MainService) { }

  pageChanged(event) {
    this.changePage.next(event.page);

  }


  action(id, event, index) {
    this.actionOnRow.next({ "id": id, "event": event, "index": index });
  }
  ngOnInit() {
    console.log(this.data);
    console.log(this.fields);
  }



  getByStringKey(object, keyString) {
    return this.mainSer.globalServ.getByStringKey(object, keyString)
  }

  formatDate(date,viewTime) {
    return this.mainSer.globalServ.formatDate(date, viewTime)
  }

}
