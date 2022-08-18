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
    typeContrat: new FormControl('', [Validators.required]),
    codeContrat:  new FormControl('', [Validators.required]),
    dateDebut:  new FormControl('', [Validators.required]),
    dateFin:  new FormControl('', [Validators.required]),
    clientName:  new FormControl('', [Validators.required])
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
