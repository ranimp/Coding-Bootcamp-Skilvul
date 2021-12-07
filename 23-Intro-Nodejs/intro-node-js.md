1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

   - Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser. Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.
   - Javascript adalah bahasa pemrograman. Sedangkan Node.js adalah runtime. Javascript awalnya browser/client-side oriented, tetapi dengan menggunakan Node.js sebagai runtime kita bisa menggunakan Javascript untuk melakukan berbagai proses di sisi server.

2. Mohon jelaskan arsitektur dari Node.js?

   - Node.js memiliki dua komponen utama, yaitu engine JavaScript V8 Google dan Libuv Library. Selain itu, platform tersebut menggunakan dua design pattern: object pool dan facade. Berikut adalah penjelasan singkat atas masing-masing komponen.

     1. Engine V8

        Engine V8 milik Google adalah sebuah compiler JavaScript yang dibuat menggunakan bahasa pemrograman C++. Dengan komponen ini, input berupa kode JavaScript dapat di-compile menjadi kode dalam tingkat assembly. V8 sendiri terdiri dari tiga komponen:

        - Compiler — mengubah JavaScript menjadi bahasa pemrograman lain
        - Optimizer — menciptakan sebuah abstract syntax tree yang akan diubah menjadi static single assignment dan dioptimasi
        - Garbage collector — V8 membagi penyimpanan yang ada menjadi dua, yaitu penyimpanan lama dan baru. Keduanya menyimpan objek JavaScript, tetapi penyimpanan baru juga merupakan tempat menaruh output dari compiler. Ketika penyimpanan baru sudah penuh, garbage collector memindahkan objek-objek lama ke penyimpanan lama agar kinerja Node.js tetap ringan

     2. Libuv library

        Library C++ ini bertugas mengelola operasi asynchronous I/O (input/output) di Node.js dan main event loop. Di dalamnya juga terdapat thread pool reserve yang menangani thread setiap operasi I/O.

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

   - built-in module adalah module bawaan dari node js dan tidak perlu diinstal lagi
   - external module adalah module yang diinstal menggunakan npm
   - custom module adalah module buatan sendiri

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
   - built-in module : http, fs, url
   - external module : moment, express, nodemon
   - custom module :
   ```
   exports.salamDunia = function () {
       return "Hello World";
   };
   ```
