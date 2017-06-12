import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments: {name: string, text: string}[] = [
    {name: 'testUser', text: 'Example text'}
  ];

  userName = '';
  userText = '';

  onPostMsg() {
    this.comments.push({name: this.userName, text: this.userText});
    this.userName = '';
    this.userText = '';
  }
}
