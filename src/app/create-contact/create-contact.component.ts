import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { PersonInfo } from '../shared/personInfo.model'; 

@Component({
    selector: 'app-create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
    contactForm: FormGroup; 
    personInfo: PersonInfo; 
    showSysMsg:boolean = false;
    userId:number; 

    constructor(private formBuilder: FormBuilder, 
                private dataService: DataService,
                ) { }
    

    ngOnInit() {
        
        this.contactForm = this.formBuilder.group({ 
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],  
            homeNumber: ['', Validators.required], 
            officeNumber: ['', Validators.required],  
            workNumber: ['', Validators.required],  
        }); 
    } 
   

    get f() { return this.contactForm.controls; }
  
    
    reset(){ this.contactForm.reset();}

    onSubmit(){ 
        this.personInfo = {
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            phoneNumbers: {
                homeNumber: this.f.homeNumber.value, 
                officeNumber: this.f.officeNumber.value, 
                workNumber: this.f.workNumber.value
            } 
        } 

        this.dataService.addToList(this.personInfo) 
        this.showSysMsg = true;
        
        setTimeout(()=>{this.showSysMsg = false;this.reset(); }, 3000);
        
    }  
}
