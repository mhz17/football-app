import { Component, Input, NgModule } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Football } from './football.model';
import {deserialize} from 'serializer.ts/Serializer';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { last } from '@angular/router/src/utils/collection';

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

  removeValidation($event: any) {
    if (this.dt !== undefined) {
      this.errorMessage = '';
      this.dt = this.convertTime($event);
    }
  }

  convertTime(str: string) {
    const date = new Date(str);
    const mnth = ('0' + (date.getMonth() + 1)).slice(-2);
    const day  = ('0' + date.getDate()).slice(-2);
    const year  = ( date.getFullYear());
    return year + '-' + mnth + '-' + day;
}

  getAllData() {
    console.log(this.dt);
    if (this.dt === undefined || this.dt === null ) {
      this.footballData = null;
      this.errorMessage = 'Date cannot be blank';
    } else {
      this.errorMessage = '';
      this.service.getAllData(this.dt).subscribe(
        (data) => {
          this.footballData = data;
          for (const a of this.footballData) {
            deserialize<Football[]>(Football, a);
          }
        }, error => {
          this.errorMessage = error;
          return error;
        }
      );
    }

  }


}
