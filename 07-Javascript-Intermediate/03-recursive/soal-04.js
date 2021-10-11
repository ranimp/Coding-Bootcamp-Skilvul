// soal - 04
function trianglePattern(a,b) {
    if (a === 0) {
        return;
    }
    let space = "";
    for (let index = 0; index < b; index++) {
        if (index < a - 1) {
            space += " " 
        }else{
         space += String.fromCharCode(64 + (b - a + (index - a) + 2))
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
  }
  
  trianglePattern(5, 5);