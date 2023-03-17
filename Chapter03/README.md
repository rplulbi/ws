# Belajar API
## Apa itu API RESTful?
API RESTful adalah antarmuka yang digunakan oleh dua sistem komputer untuk bertukar informasi secara aman melalui internet. Sebagian besar aplikasi bisnis harus berkomunikasi dengan aplikasi internal dan pihak ketiga lainnya untuk melakukan berbagai tugas. Misalnya, untuk menghasilkan slip gaji bulanan, sistem akun internal Anda harus berbagi data dengan sistem perbankan pelanggan Anda untuk mengotomatiskan tagihan dan berkomunikasi dengan aplikasi absensi internal. API RESTful mendukung pertukaran informasi ini karena mengikuti standar komunikasi perangkat lunak yang aman, andal, dan efisien.

## Apa itu API?
Antarmuka Program Aplikasi (API) menentukan aturan yang harus Anda ikuti untuk berkomunikasi dengan sistem perangkat lunak lain. Developer mengekspos dan membuat API sehingga aplikasi lain dapat berkomunikasi dengan aplikasinya secara terprogram. Contohnya, aplikasi absensi mengekspos API yang meminta nama lengkap pegawai dan rentang tanggal. Saat menerima informasi ini, API memproses absensi pegawai secara internal dan mengembalikan jumlah jam kerja dalam rentang tanggal tersebut.
Anda dapat menganggap sebuah API web sebagai gateway antara klien dan sumber daya pada web.

## Apa itu REST?
Representational State Transfer (REST) adalah arsitektur perangkat lunak yang memberlakukan syarat mengenai cara API bekerja. REST pada awalnya dibuat sebagai panduan untuk mengelola komunikasi pada jaringan kompleks seperti internet. Anda dapat menggunakan arsitektur berbasis REST untuk mendukung komunkasi berperforma tinggi dan andal sesuai skala. Anda dapat dengan mudah menerapkan dan memodifikasinya, membawa visibilitas dan portabilitas lintas platform ke semua sistem API.

Developer API dapat merancang API menggunakan beberapa arsitektur yang berbeda. API yang mengikuti gaya arsitektur REST disebut sebagai API REST. Layanan web yang menerapkan arsitektur REST disebut sebagai layanan web RESTful. Istilah API RESTful umumnya merujuk pada API web RESTful. Namun, Anda dapat menggunakan istilah API REST dan API RESTful secara bergantian.

## Berikut adalah beberapa prinsip gaya arsitektur REST:
* Antarmuka seragam
Antarmuka seragam adalah desain fundamental dari semua layanan web RESTful. Ini mengindikasikan bahwa server mentransfer informasi dalam format standar. Sumber daya terformat disebut representasi dalam REST. Format ini dapat berbeda dari representasi internal sumber daya pada aplikasi server. Contohnya, server dapat menyimpan data sebagai teks tetapi mengirimkannya dalam format representasi HTML.
Antarmuka seragam memberlakukan empat hambatan arsitektur:

Permintaan harus mengidentifikasi sumber daya. Permintaan melakukannya dengan menggunakan pengidentifikasi sumber daya seragam.
Klien memiliki cukup informasi dalam representasi sumber daya untuk memodifikasi atau menghapus sumber daya jika diinginkan. Server memenuhi syarat ini dengan mengirimkan metadata yang menjelaskan sumber daya lebih lanjut.
Klien menerima informasi mengenai cara untuk memproses representasi lebih lanjut. Server mencapainya dengan mengirimkan pesan deskriptif mandiri yang berisi metadata mengenai cara klien dapat menggunakannya sebaik mungkin.
Klien menerima informasi mengenai semua sumber daya terkait lainnya yang dibutuhkan untuk menyelesaikan tugas. Server mencapainya dengan mengirim hyperlink di dalam representasi sehingga klien dapat menemukan lebih banyak sumber daya secara dinamis.
