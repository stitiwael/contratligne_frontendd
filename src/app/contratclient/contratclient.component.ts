import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientserviceService } from '../services/clientservice.service';

@Component({
  selector: 'app-contratclient',
  templateUrl: './contratclient.component.html',
  styleUrls: ['./contratclient.component.css']
})
export class ContratclientComponent implements OnInit {

  contrat!:any;

  constructor(
    private route : ActivatedRoute,
    private clientservice : ClientserviceService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientservice.get(id).subscribe(
      data => {
      this.contrat = data;
      console.log(this.contrat); 
    }
    );

  }

}
