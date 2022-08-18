import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FolderService } from '../services/folder.service';

@Component({
  selector: 'app-addnode',
  templateUrl: './addnode.component.html',
  styleUrls: ['./addnode.component.css']
})
export class AddnodeComponent implements OnInit {

  node!:any;

  addNodeForm = new FormGroup({
    dateDeCreation : new FormControl('', [Validators.required]),
    name:  new FormControl('', [Validators.required]),
    url:  new FormControl('', [Validators.required]),
    parentNodeName:  new FormControl('', [Validators.required]),
    
  });

  constructor(private folderservice : FolderService) { }

  ngOnInit(): void {
  }


  public addNode(){

    this.node = this.addNodeForm.value;
    this.folderservice.addNode(this.node).subscribe((response: any) => {
      
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    }
    
    
    );
  }


}
