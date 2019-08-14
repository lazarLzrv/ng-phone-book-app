import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'; 

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title:string
    
   

    constructor(private dataService:DataService) { }
  
    ngOnInit() {}
   
    ngDoCheck() {
        this.title = this.dataService.getTitle(); 
    }
}
