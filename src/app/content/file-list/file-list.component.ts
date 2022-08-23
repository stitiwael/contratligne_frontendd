import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files !: any

  constructor(private folderService : FolderService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.folderService.getAllFiles().subscribe((response: any) => {
      console.log(response);
      
      this.files = response;
      
    });
  }

  public updateFile(id : any){
    this.router.navigate(["update/file", { id: id }]);
  }


 

}
