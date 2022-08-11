import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientserviceService } from '../services/clientservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  client!:any;


  addClientForm = new FormGroup({
    last_name: new FormControl('', [Validators.required]),
    name:  new FormControl('', [Validators.required]),
    adresse:  new FormControl('', [Validators.required]),
    phone_number:  new FormControl('', [Validators.required])

  });

  constructor(
    private clientservice : ClientserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  public addClient(){

    this.client = this.addClientForm.value;
    this.clientservice.addClient(this.client).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/show/listcontrat']);
    });


  }

}
