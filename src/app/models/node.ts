export class Node {

    constructor(
        
        public name: String,
        public url: String,
        public dateDeCreation: Date,
        public parentNode: Node

       ) {}
}
