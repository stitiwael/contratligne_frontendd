import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-contrats-list',
  templateUrl: './contrats-list.component.html',
  styleUrls: ['./contrats-list.component.css']
})
export class ContratsListComponent implements OnInit {

  contrats !: any;

  constructor(private contratservice : ContratService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.contratservice.getContrats().subscribe(
      data => {
      this.contrats = data;
      console.log(this.contrats); 
    }
    );
  }

  public showclientcontrats(id : any){
    this.router.navigate(["/show/clientcontrat", id]);
  }

}
