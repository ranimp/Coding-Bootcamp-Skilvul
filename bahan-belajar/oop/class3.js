class SkilvulChat {
    constructor(num) {
        this.num = num
    }
    encrypt(str) {
        str = str.toUpperCase();

        let result = '';
        let charcode = 0;

        for (let i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) + this.num;
            result += String.fromCharCode(charcode);
        }
        return console.log(result);
    }
    decrypt(str) {
        str = str.toLowerCase();

        let result = '';
        let charcode = 0;

        for (let i = 0; i < str.length; i++) {
            charcode = (str[i].charCodeAt()) - this.num;
            result += String.fromCharCode(charcode);
        }
        return console.log(result);
    }
}

const mySkilChat = new SkilvulChat(2);
mySkilChat.encrypt('I love JavaScript!'); // returns 'K NQXG LCXCUETKRV!'
mySkilChat.decrypt('K <3 OA ECV'); // returns 'i <3 my cat'