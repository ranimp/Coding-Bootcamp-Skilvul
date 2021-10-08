class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.marbleCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
    }

    gettingHit() {}
}
function marbleAttack (p1, p2) {
    if(p1 > p2) {
        return console.log(p1)
    }
    else if (p1 = p2){
        console.log ('tie')
    }
    else {
        return console.log(p2)
    }
} 

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
marbleAttack(p1, p2); // return p1

const p3 = new Player('p1', 5);
const p4 = new Player('p2', 5);
 
marbleAttack(p3, p4); // return Tie

  