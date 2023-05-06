# Go Fiber
Go Fiber adalah sebuah framework web yang dikembangkan menggunakan bahasa pemrograman Go. Fiber dirancang untuk menawarkan kinerja yang sangat cepat dan mudah digunakan, serta memiliki API yang intuitif dan efisien.

## Berikut adalah beberapa hal yang perlu Anda ketahui tentang Go Fiber:
## Instalasi
Anda dapat menginstal Go Fiber dengan menjalankan perintah berikut menggunakan perintah go get:
```go
go get -u github.com/gofiber/fiber/v2
```
Setelah itu, Anda dapat membuat proyek baru menggunakan Go Fiber dengan mudah.

## Middleware
Go Fiber menyediakan middleware yang dapat digunakan untuk memproses permintaan HTTP. Middleware adalah fungsi yang dipanggil sebelum permintaan diteruskan ke penangan HTTP utama Anda. Go Fiber menyediakan beberapa middleware bawaan seperti middleware logger, middleware recovery, middleware CSRF, dan middleware kompresi. Anda juga dapat membuat middleware Anda sendiri.

## Routing
Go Fiber menyediakan router yang dapat digunakan untuk menangani rute HTTP. Router dapat digunakan untuk menentukan tindakan yang diambil oleh aplikasi Anda ketika permintaan tertentu diterima. Go Fiber menyediakan metode HTTP standar seperti GET, POST, PUT, DELETE, dll., dan juga dapat menangani parameter dinamis dan wildcard.

## Konteks
Go Fiber menggunakan konteks untuk memproses permintaan HTTP. Konteks digunakan untuk mengakses data yang terkait dengan permintaan saat ini, seperti header permintaan, parameter query, dll. Konteks juga dapat digunakan untuk mengembalikan respons ke klien.

## Pengujian
Go Fiber menyediakan paket pengujian bawaan untuk membantu Anda menguji aplikasi Anda. Anda dapat menggunakan paket ini untuk menguji penanganan permintaan HTTP, middleware, dan rute.

## Performa
Go Fiber dirancang untuk menawarkan kinerja yang sangat cepat. Hal ini dicapai dengan mengoptimalkan penggunaan CPU dan memori, serta dengan menggunakan teknik seperti pool goroutine dan zero-copy.

# Berikut ini adalah langkah-langkah dasar untuk membuat aplikasi Go Fiber:
- Pastikan Go Fiber sudah terinstal di komputer Anda. Jika belum, Anda dapat menginstalnya menggunakan perintah go get seperti yang saya jelaskan pada tutorial sebelumnya.
- Buat direktori baru untuk aplikasi Anda. Misalnya, Anda bisa membuat direktori bernama "my-app".
- Di dalam direktori "my-app", buat file dengan nama "main.go".
- Buka file "main.go" menggunakan editor teks atau IDE Go yang Anda gunakan.
Tulis kode program Go Fiber Anda di dalam file "main.go". 

Berikut adalah contoh kode dasar untuk membuat aplikasi Hello World menggunakan Go Fiber:
```go
package main

import "github.com/gofiber/fiber/v2"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) error {
    return c.SendString("Hello, World!")
  })

  app.Listen(":3000")
}
```
Kode program di atas akan membuat aplikasi Go Fiber dengan rute "/" yang akan merespons dengan pesan "Hello, World!"
- Simpan perubahan pada file "main.go" dan tutup editor teks Anda.
- Buka terminal atau command prompt dan navigasikan ke direktori "my-app".
- Jalankan perintah go run main.go untuk menjalankan aplikasi Anda.
- Buka browser menggunakan live server untuk mengakses aplikasi Hello World Anda.


