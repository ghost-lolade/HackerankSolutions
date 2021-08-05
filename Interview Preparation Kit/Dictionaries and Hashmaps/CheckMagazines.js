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

// The solution above fails two test cases out of 21

function checkMagazine(magazine, note) {
    let counter = {};
    
    for (let i = 0; i < magazine.length; i++) {
        if (!counter[magazine[i]]) {
            counter[magazine[i]] = 0;
        }
        counter[magazine[i]]++;
    }
    for (let i = 0; i < note.length; i++) {
        if (counter[note[i]]) {
            counter[note[i]]--;
        } else {
            console.log('No');
            return;
        }
    }
    console.log('Yes');

}