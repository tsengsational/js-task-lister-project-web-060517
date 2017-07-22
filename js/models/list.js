// List Model

let counter = 0
class List {
  constructor(title){
    this.title = title
    this.id = counter++
    this.tasks = []
    List.all.push(this)
  }

};

List.all = []
