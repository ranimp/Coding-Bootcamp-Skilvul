class Network {
    constructor(data, users) {
    //   this.data = data;
      this.users = users;
      this.data = data - (this.users * 5)
    }
    movieTime(){
        return this.data >= 50
        // if (this.data >= 50) {
        //     return true
        // }
        // else {
        //     return false
        // }
    }
    videoCall() {
        return this.data >= 10
        // if (this.data >= 10) {
        //     return true
        // }
        // else {
        //     return false
        // }
    }
    connection() {
        setInterval(function() {
            console.log('You must reconnect the Internet Connection')
        }, 5000)
    }
  }

const library = new Network(50, 8) 

console.log(library.movieTime()) // returns false
console.log(library.videoCall()) // returns true
library.connection() // returns 