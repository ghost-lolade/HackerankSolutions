function checkMagazine(magazine, note) {
    // Write your code here
    var count = note.length;
    var visible = 0;
    for(var i = 0; i < note.length; i++) {
        if(magazine.includes(note[i])){
            var ind = magazine.indexOf(note[i]);
            magazine.splice(ind, 1);
            visible +=1;
        }
    }
    console.log(count == visible ? "Yes" : "No");

}

// The solution above fails two test cases out of 18