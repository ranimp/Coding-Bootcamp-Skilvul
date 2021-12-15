1. Jelaskan apa yang dimaksud dengan container pada docker !
   - Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.
2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
   - VM memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya. Sedangkan container kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya
3. Apa yang dimaksud dengan docker file ?
   - docker file adalah blueprint untuk membuat image
4. Apa yang dimaksud dengan docker registery ?
   - docker registry adalah tempat untuk mengupload/download image
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
   - dengan menggunakan docker compose, caranya :
     1. Buat file NAMA_FILE.yaml di dalam project yang kamu buat
     2. Tulis beberapa perintah ke dalam sana
     3. Jalankan menggunakan perintah docker-compose NAMA_FILE.yaml up
