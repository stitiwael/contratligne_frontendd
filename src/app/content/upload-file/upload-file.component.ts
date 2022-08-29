import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FolderService } from 'src/app/services/folder.service';
import {NgForm} from '@angular/forms';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { document } from 'ngx-bootstrap/utils';

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

  add(){

    let row = document.createElement('div');  

      row.className = 'row';

      row.innerHTML = `

      <br>

      <div class="input-group">

  <span class="input-group-text">Ajouter nouvelle meta-donné</span>
  <input type="text" placeholder="key" aria-label="First name" class="form-control" name="key">
  <input type="text" placeholder="value" aria-label="Last name" class="form-control" name="value">
</div>`;

      document.querySelector('.showInputField').appendChild(row);

  }
}
