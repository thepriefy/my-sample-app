import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // comments: {name: string, text: string}[] = [
  //   {name: 'testUser', text: 'Example text'}
  // ];

  userName = '';
  userText = '';

  comments: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.comments = db.list('/items');
  }

  // onPostMsg() {
  //   this.comments.push({name: this.userName, text: this.userText});
  //   this.userName = '';
  //   this.userText = '';
  // }

  addItem() {
    // this.items.push({ text: newName });
    this.comments.push({name: this.userName, text: this.userText});
  }
  // updateItem(key: string, newText: string) {
  //   this.comments.update(key, { text: newText });
  // }
  deleteItem(key: string) {
    console.log(key);
    this.comments.remove(key);
  }
  // deleteEverything() {
  //   this.comments.remove();
  // }
}
