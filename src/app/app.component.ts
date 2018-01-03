import { Component, Input, NgModule } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Football } from './football.model';
import {deserialize} from 'serializer.ts/Serializer';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  errorMessage: string;

  constructor(private service: GetDataService) {
  }

  removeValidation() {
    if (this.dt !== undefined) {
      this.errorMessage = '';
    }
  }

  getAllData() {
    console.log('button clicked!');
    if (this.dt === undefined) {
      this.errorMessage = 'Date cannot be blank';
    } else {
      console.log(this.dt);
      // this.service.getAllData(this.dt).subscribe(
      //   (data) => {
      //     this.footballData = data;
      //     for (const a of this.footballData) {
      //       deserialize<Football[]>(Football, a);
      //     }
      //   }, error => {
      //     this.errorMessage = error;
      //     return error;
      //   }
      // );
    }

  }


}
