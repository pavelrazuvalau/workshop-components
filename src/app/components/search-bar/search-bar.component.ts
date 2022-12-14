import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>;

  searchCriteria = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.search.emit(this.searchCriteria);
  }

}
