import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientserviceService } from '../services/clientservice.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  clients!: any;

  constructor(private clientserv : ClientserviceService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.clientserv.getClients().subscribe(
      data => {
      this.clients = data;
      console.log(this.clients); 
    }
    );
  }

  public showclientcontrats(id : any){
    this.router.navigate(["show/clientcontrat", { id: id }]);
  }

}
