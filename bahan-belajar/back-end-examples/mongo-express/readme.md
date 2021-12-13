# MongoDB
Dokumentasi: [Dokumentasi MongoDB](https://docs.mongodb.com/manual/)

## Cara conncet Compass ke localhost
Pilih tab `Fill in connection fields individually`, terus isi hostname dan port local. Klik `Connect`, harusnya sudah bisa.

## Mengakses MongoDB dari cmd
Copy path instalasi MongoDB ke environtment variables. Terus masuk ke cmd dengan command.
```
mongo -u [USERNAME] -p [PASSWORD]
```

## Membuat database
Gak perlu buat dulu, jadi langsung pakai. Kalau databasenya belum ada, nanti dibuatin otomatis.
```
use [NAMA_DATABASE]
```

## Membuat collection
Gak perlu buat collection, jadi langsung insert ke collection itu. Insertnya, bisa beda-beda field untuk setiap data.
```bash
# masuk ke databasenya dulu
use [NAMA_DATABASE]

# db.collectionName.insertOne({field: "value"})
db.users.insertOne({ name: "Rosa", email:"rosa@mail.com" })

# db.collectionName.insertMany([{data1}, {data2}])
db.users.insertMany([{ name: "Amalia", email:"amalia@mail.com" }, { name: "Abimanyu", email: "abimanyu@mail.com" }, { name: "Salima", email: "salima@mail.com", departmen: "Informatics" }])
```

## Mendapatkan data
```bash
db.collectionName.findOne({ field: value})
db.collectionName.find({ field: value})
```

# MongoDB menggunakan Express
## Pengaturan environtment
```bash
npm install express mongoose
npm install --save-dev nodemon
```
Edit script start `package.json`
```json
"scripts": {
    "start": "nodemon index.js"
},
```