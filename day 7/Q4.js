var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
let l = library.length;
for(let i = 0; i < l; i++){
    for(let j in library[i]){
        console.log(library[i][j]);
    }
    console.log("\n");
}