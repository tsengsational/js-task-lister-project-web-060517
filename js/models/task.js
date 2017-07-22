// Task Model
let count = 0

class Task {
  constructor(description, priority, list){
    this.description = description;
    this.priority = priority;
    this.id = count++ - 2;
    this.list = list;
  }

  list(){
    List.all
  }
}
