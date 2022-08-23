import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.css'],
})
export class UpdateFileComponent implements OnInit {
  file!: any;
  id !: any;

  fileUpdated!: boolean;

  editFileForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });

  constructor(private folderService: FolderService,
    private route : ActivatedRoute,
    ) {}

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');

  }

  onUpdateFile() {
    this.folderService.updateFile(this.id, this.file).subscribe((response: any) => {
      console.log(response);
      this.fileUpdated = true;
    });
  }

  onChange(file : any){

    this.file = file[0];
   }
}
