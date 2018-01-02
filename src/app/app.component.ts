import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Football } from './football.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})
export class AppComponent {
  title = 'Football App';
  jsonData: any;

  constructor(private service: GetDataService) {
  }

  getAllData() {
    console.log('button clicked!');
    this.service.getAllData().subscribe(
      (data) => {
        this.jsonData = data;
        console.log('Here is data: ' + this.jsonData);
      }
    );
  }
}
