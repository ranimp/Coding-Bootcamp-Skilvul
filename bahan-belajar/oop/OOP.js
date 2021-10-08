class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName
        this.lastName = lastName
        this.job = job
        this.skills = []
        Person._amount = Person._amount || 0;
        Person._amount++
    }
    amount() {
        return Person._amount;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstName, this.lastName] = fN.split(' ')
        } else {
            throw Error('Bad fullname')
        }
    }
    learn(skill) {
        this.skills.push(skill)
    }
}
class Job {
    constructor(company, position, salary) {
        this.company = company
        this.position = position
        this.salary = salary
    }
}

const john = new Person ({
    firstName : 'Agus',
    lastName : 'Nurjaman',
    job : new Job('Google', 'Front End Dev', 200000)
});
const roger = new Person ({
    firstName : 'Asep',
    lastName : 'Komarudin',
    job : new Job('Microsoft', 'Fullstack Dev', 1000000)
});

roger.learn('PHP')
roger.learn('MYSQL')
roger.learn('JS')
roger.fullName('roger budiman')
roger.amount(100)
console.log(roger)