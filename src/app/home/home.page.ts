import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Cat } from '../models/cat.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  cats!:Cat[];
  loadig:boolean=false;

  constructor(private api_sservice:ApiService) {}

  ngOnInit(): void {
    this.getCatImage();
  }

  getCatImage(){
    this.loadig=true;
    this.api_sservice.getApiUrl().subscribe(data=>{
      console.log(data);
      this.cats=data;
      this.loadig=false;
    });
  }


}
