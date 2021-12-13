# Membuat arsitektur basic mvc dengan sequelize dan express
Di folder ini, ada dua model.
1. Users di file `app.js`
2. Todos di file `todo-app.js`, crud nya udah lengkap

## Setting environtment
Inisialisasi node
```bash
node init -y
```

Instalasi package yang diperlukan
```bash
npm install express mysql2 sequelize
npm install --save-dev nodemon
npm install -g sequelize-cli
```

Inisialisasi folder dengan sequelize
```bash
sequelize init
```
Setelah inisialisasi, ada folder:
```
|- config
|- migrations
|- models
|- node_modules
|- seeders
```

## Membuat database
File `config/config.json` disesuaikan dengan nama database dan akunnya. Contoh:
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "basic_mvc_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "basic_mvc_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "basic_mvc_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

Buat database dengan command
```bash
sequelize db:create
```
Defaultnya akan dibuat yang `development`. Kalau mau lebih spesifik:
```bash
sequelize db:create --env test
sequelize db:create --env development
sequelize db:create --env production
```
Harusnya, databasenya udah terbuat:D

## Membuat model/tabel
Membuat model dengan command: (ingat, pemisah atribut pake koma)
```bash
sequelize model:generate --name <nama_tabel> --attributes <nama_atribut1>:<tipe1>, <nama_atribut2>:<tipe2>

sequelize model:generate --name User --attributes firstName:string, lastName:string, email:string, password:string
```

Nanti terbuat file di folder `model` dan `migration`.

## Migrasi model
Migrasi model dengan command
```bash
sequelize db:migrate
```

Harusnya juga udah terbuat sih tabelnya:D

## Membuat seed
Untuk membuat data awal, karena saat migrasi tabel masih kosong.
```bash
sequelize seed:generate --name todoSeeder
```
Terus definisikan data yang mau dimasukkan. Setelah itu, jalankan seeder
```bash
sequelize db:seed:all # untuk semua seeder
sequelize db:seed --seed <nama_seeder> # spesifik seeder tertentu
```

## Menggunakan model
Di file yang digunakan untuk melakukan query, import model yang mau digunakan.
```javascript
const { User } = require('./models/index');
const user_model = require('./models').User;
```
Kalau mau query dari client, gabungin dengan express.

Kalau mau pake nodemon, di file `package.json` ditambahin script
```json
"scripts": {
    "start": "nodemon app.js"
}
```

## Catatan
- File Migrasi: Isi fungsi dari up adalah method positif, yang down method negatif. Jadi isi fungsi up sama down harus berlawanan. Misal, up membuat tabel, down menghapus/drop tabel. <br>
  Dokumentasi: [QueryInterface Sequelize](https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html)