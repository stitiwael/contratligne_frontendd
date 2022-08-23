import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FolderService } from 'src/app/services/folder.service';
import {NgForm} from '@angular/forms';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {

  file !: any;

  public fileadded!: boolean;

  addFileForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });

  
  constructor(private folderService: FolderService) {}

  ngOnInit(): void {}

 onChange(file : any){

  this.file = file[0];
 }

  onUploadFile(): void {
   // const formData : FormData = new FormData();
   // formData.append('file', this.file);
    
    console.log(this.file)
    this.folderService.uploadFile(this.file).subscribe((response: any) => {
      console.log(response);
      this.fileadded = true;
      
    });
  }
  reportProgress(event: HttpEvent<any>) {
    throw new Error('Method not implemented.');
  }
}
