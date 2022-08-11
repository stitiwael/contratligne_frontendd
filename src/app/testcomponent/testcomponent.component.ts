import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestEntity } from '../test-entity';
import { TestService } from '../test.service';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

 public bdel!: boolean;
  testData!: TestEntity[] ;
  addDataForm = new FormGroup({
    dumpdata: new FormControl('', [Validators.required])
  });

  testen!: any;

  constructor(private testserv: TestService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
   
    this.testserv.getTestingData().subscribe(
      data => {
      this.testData = data;
      console.log(this.testData); 
    }
    );

  }

  public addData(){

    this.testen=this.addDataForm.value;
    this.testserv.addTestingData(this.testen).subscribe((response: any) => {
      console.log(response);
    });
    window.location.reload();
  // this.router.navigate(['/test']);
    
  }

  public deleteTD(id : any){
  this.testserv.deletedata(id).subscribe((response: any) => {
    console.log(response);
    if(response==true)
    this.testserv.getTestingData().subscribe(
      data => {
      this.testData = data;
      console.log(this.testData); 
    }
    );
    this.bdel=response;
  });
  
  //window.location.reload();

  }

  public updateData(id : any){
    this.router.navigate(['/update']);
  }

}
