import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { document } from 'ngx-bootstrap/utils';
import { DisplayfilesComponent } from '../displayfiles/displayfiles.component';
import { Node } from '../models/node';
import { FolderService } from '../services/folder.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  parent !: any;
  child !: any;
  schild !: any;



  constructor(private folderservice : FolderService,
    private router : Router) { }

  ngOnInit(): void {

    this.folderservice.getParentNodes().subscribe(
      data => {
      this.parent = data;
      console.log(this.parent);
      

    }
    );

    
  }

  public getChildFolders(name : any){

    this.folderservice.getChildNodes(name).subscribe(
      data => {
      this.child = data;
      console.log(this.child);
      

    }
    );


  }

  public getSousChildFolders(name : any){

    this.folderservice.getChildNodes(name).subscribe(
      data => {
      this.schild = data;
      console.log(this.schild);
      

    }
    );


  }

  public showFile(url : any){
    this.router.navigate(["show/file", { url: url }]);
    document.getElementById('iframe').contentWindow.location.reload();
    return false;

    
  }
 

}

