1. Apa perbedaan antara static web server dan dynamic web server?

   static web server terdiri dari komputer dengan server HTTP. Disebut "statis" karena server mengirimkan file yang dihosting apa adanya ke browser. Sedangkan dynamic web server terdiri dari static web server ditambah perangkat lunak tambahan, seperti server aplikasi dan database. Disebut "dinamis" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser melalui server HTTP.

2. Jelaskan arsitektur static site dan dynamic site

   Static site adalah situs yang mengembalikan konten hard-coded yang sama dari server setiap kali resource tertentu diminta. Saat pengguna ingin menavigasi ke halaman, browser mengirimkan permintaan "GET" HTTP yang menentukan URL-nya.

   Dynamic site adalah situs di mana beberapa konten respons dihasilkan secara dinamis, hanya jika diperlukan. Pada dynamic site, halaman HTML biasanya dibuat dengan memasukkan data dari database ke dalam placeholder di template HTML. Dynamic site dapat mengembalikan data yang berbeda untuk URL berdasarkan informasi yang diberikan oleh pengguna atau preferensi yang disimpan dan dapat melakukan operasi lain sebagai bagian dari pengembalian respons (misalnya, mengirim notifikasi).

3. Apa saja yang dapat kita buat pada sisi server?

   - Penyimpanan dan pengiriman informasi yang efisien
   - User experience yang disesuaikan
   - Akses terkontrol ke konten
   - Simpan informasi sesi/status
   - Notifikasi dan komunikasi
   - Analisis data

4. Mohon jelaskan apa itu RESTful?

   REST, atau Representational State Transfer, adalah gaya arsitektur untuk menyediakan standar antara sistem komputer di web, sehingga memudahkan sistem untuk berkomunikasi satu sama lain. REST-compliant systems, atau disebut sistem RESTful, dicirikan oleh bagaimana mereka tidak memiliki state dan memisahkan masalah klien dan server.

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
   - GET — mengambil tertentu (berdasarkan id) atau kumpulan resource
   - POST — membuat resource baru
   - PUT — memperbarui resource tertentu (berdasarkan id)
   - HAPUS — menghapus resource tertentu berdasarkan id
6. Apa fungsi dari Response Codes?

   Response dari server berisi kode status untuk memberitahu klien tentang informasi tentang keberhasilan suatu operasi. Ini juga membantu developer untuk mengetahui apakah operasi sudah berhasil atau masih gagal.
