import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {

  contrat!:any;

  addContratForm = new FormGroup({
    type_contrat: new FormControl('', [Validators.required]),
    code_contrat:  new FormControl('', [Validators.required]),
    date_debut:  new FormControl('', [Validators.required]),
    date_fin:  new FormControl('', [Validators.required]),
    client_name:  new FormControl('', [Validators.required])
  });

  constructor(private contratserv : ContratService) { }

  ngOnInit(): void {
  }

  public addContrat(){

    this.contrat = this.addContratForm.value;
    this.contratserv.addContrat(this.contrat).subscribe((response: any) => {
      console.log(response);
    });
  }

}
