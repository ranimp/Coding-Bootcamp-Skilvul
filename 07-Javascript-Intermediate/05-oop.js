// soal - 01 - done

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// akan menghasilkan output :
// fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// tidak
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena pada fun2, fungsi/method tidak dideklarasikan dengan benar, sehingga yang keluar hanyalah {}
// const obj = {
//     fun1: function() {
//       console.log("fun1", this);
//     },
//     fun2: () => {
//       console.log("fun2", this);
//     }
//   };
  
//   obj.fun1();
//   obj.fun2();

// soal - 02 - done

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
// Encapsulation dibutuhkan saat kita ingin suatu data/variabel yang ada di dalam suatu kelas tidak bisa diubah/re-assign lagi.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// Inheritance dalam OOP adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
// inheritance dibutuhkan ketika kita ingin mengambil objek dan method yang ada di class parent dan tidak perlu membuat objek dan method yang sama di class child nya
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// Polymorpishm adalah konsep OOP yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk
// Polymorpishm sama sama seperti inheritance, hanya saja di polymorpishm metode nya bisa diubah dan tidak perlu mengikuti method yang ada pada class parent

// soal - 03

class Phone {
    constructor(brand, storage, ram) {
        this.brand = brand
        this.storage = storage
        this.ram = ram
    }
    getBrandName(){
        return this.brand
    }
    setBrandName(newBrand){
        return this.brand = newBrand
    }
    printSpecification(){
        return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
    }
    setSpecification(newStorage, newRam){
        this.storage = newStorage 
        this.ram = newRam
        return
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

console.log(phone.printSpecification());
phone.setSpecification(32, 2);
console.log(phone.printSpecification());

// soal-04

// class Course {
//     constructor(subject, quota, attendance) {
//         this.subject = subject
//         this.quota = quota
//         this.attendance = attendance
//     }
//     getSubject(){
//         return this.subject
//     }
//     getAttendance(){
//         return this.attendance
//     }
//     decreaseQuota(){
//         return this.quota -= 1
//     }
// }
// class CourseOffering {
//     constructor(course, grade, attendance){
//         this.course = course
//         this.grade = grade
//         this.attendance = Course.attendance
//     }
// }
// class Student {
//     constructor(name, gender, courseOfferings) {
//       super()
//       this.name = name;
//       this.gender = gender;
//       this.courseOfferings = [CourseOffering];
//     }
    
//     takeNewCourse(NewCourse) {
//         return this.courseOfferings.push(NewCourse)
//     }
    
//     takeATest() {
//         if (this.attendance >= this.attendance) {
//             Math.floor(Math.random() * 101)
//         }
//         else {
//             "Maaf absensi mu kurang"
//         }
//     }
    
//     courseAttendance(subject) {
//         this.subject += 1
//     }
//   }
  
  
// const biology = new Course("biology", 10, 3);
// const physics = new Course("physics", 10, 2);

// const johnWatson = new Student("john watson", "male");

// johnWatson.takeNewCourse(biology);
// johnWatson.takeNewCourse(physics);

// johnWatson.courseAttendance(physics);
// johnWatson.courseAttendance(physics);
// johnWatson.courseAttendance(biology);
// johnWatson.courseAttendance(physics);

// console.log(biology.quota);
// console.log(physics.quota);

// johnWatson.takeATest(biology);
// johnWatson.takeATest(physics);

// console.log(johnWatson.courseOfferings);


  