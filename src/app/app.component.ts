import { Component, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, TodoList } from '../db/db';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoLists$ = liveQuery(() => db.todoLists.toArray());
  listName = 'My new list';

  async addNewList() {
    await db.todoLists.add({
      title: this.listName,
    });
  }

  async resetDatabase() {
    await db.resetDatabase();
  }

  identifyList(index: number, list: TodoList) {
    return `${list.id}${list.title}`;
  }
}
