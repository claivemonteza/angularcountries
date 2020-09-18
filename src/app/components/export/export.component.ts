import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/Country';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit{
  showOptions = false;
  files = ['CVS', 'XLS', 'XML'];
  ngOnInit(){

  }
  
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  exportExcel(){

  }

  exportXML() { }

  exportCSV(){
  
  }
}
