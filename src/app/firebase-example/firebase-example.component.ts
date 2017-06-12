import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-firebase-example',
  templateUrl: './firebase-example.component.html',
  styleUrls: ['./firebase-example.component.css']
})
export class FirebaseExampleComponent implements OnInit {

  // items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable <any>;

  constructor(db: AngularFireDatabase) {
    // this.items = db.list('/items');
    this.item = db.object('/1155121/item');
  }

  ngOnInit() {
  }

  saveItem(newName: string) {
    this.item.set({ name: newName });
  }
  updateItem(newSize: string) {
    this.item.update({ size: newSize });
  }
  deleteItem() {
    this.item.remove();
  }

}
