import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayfiles',
  templateUrl: './displayfiles.component.html',
  styleUrls: ['./displayfiles.component.css']
})
export class DisplayfilesComponent implements OnInit {

  fileUrl !: any;
  Url !: any;

  constructor(private route : ActivatedRoute,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {

   
    
    this.fileUrl = this.route.paramMap.subscribe(
      params => {
        this.fileUrl = params.get("url");
        this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl);
      });
    
    

  }

 

 

}
