import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonInfo } from '../shared/personInfo.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})

export class EditContactComponent implements OnInit {
    contactForm: FormGroup; 
    personInfo: PersonInfo;  

    userId:number;
    status:boolean;

    
    constructor (private formBuilder:FormBuilder,
                private dataService: DataService,
                private activatedRoute: ActivatedRoute,
                private router: Router
       ) { }

    ngOnInit() {
        this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.personInfo = this.dataService.getUser(this.userId); 
        
        this.contactForm = this.formBuilder.group({ 
            firstName: [this.personInfo.firstName, Validators.required],
            lastName: [this.personInfo.lastName, Validators.required],  
            homeNumber: [this.personInfo.phoneNumbers.homeNumber, Validators.required], 
            officeNumber: [this.personInfo.phoneNumbers.officeNumber, Validators.required],  
            workNumber: [this.personInfo.phoneNumbers.workNumber, Validators.required],  
        }); 
 
    } 

    get f() { return this.contactForm.controls; }

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

        this.dataService.updateUser(this.personInfo, this.userId)  
        this.router.navigate(['/list']);
    }  
}
