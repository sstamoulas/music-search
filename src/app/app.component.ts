import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-search';
}


// export class AppComponent {
//   loading: Boolean = false;
//   data: any;

//   constructor(private http: HttpClient) {}

//   post(): void { 
//     this.loading = true;

//     this.http
//       .post('https://jsonplaceholder.typicode.com/posts',
//         JSON.stringify({
//           body: 'bar',
//           title: 'foo',
//           userId: 130
//         })
//       )
//       .subscribe(data => {
//         this.data = data;
//         this.loading = false;
//       });
//   }
// }