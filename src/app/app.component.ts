import { Component, Input, NgModule } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Football } from './football.model';
import {deserialize} from 'serializer.ts/Serializer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})
export class AppComponent {
  title = 'Football App';
  footballData: Football[];
  dt: string;

  constructor(private service: GetDataService) {
  }

  getAllData() {
    console.log('button clicked!');
    if (this.dt === undefined) {
      console.log('Empty date');
    } else {
      this.service.getAllData(this.dt).subscribe(
        (data) => {
          this.footballData = data;
          for (const a of this.footballData) {
            deserialize<Football[]>(Football, a);
          }
        }
      );
    }

  }


}
