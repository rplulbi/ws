# GRAPHQL

GraphQL https://graphql.org/ adalah bahasa kueri atau query language untuk mengambil dan memanipulasi data dari server. Ia memberikan antarmuka yang fleksibel dan efisien antara klien (seperti aplikasi frontend) dan server (backend) dalam pengembangan aplikasi.

Dalam tradisi RESTful API, klien harus mengirimkan permintaan HTTP ke endpoint tertentu untuk mendapatkan data yang diinginkan. Biasanya, endpoint ini mengembalikan data dalam format JSON, dan seringkali klien menerima lebih banyak atau kurang dari data yang sebenarnya dibutuhkan.
![image](https://github.com/rplulbi/ws/assets/15622730/b1ca17e3-ad02-4fe9-9995-09f6b094ad0a)


Dalam GraphQL, klien dapat mengirimkan kueri tunggal yang secara spesifik menyebutkan data yang dibutuhkan dan strukturnya. Kueri ini dikirim ke endpoint GraphQL tunggal, dan server mengembalikan data yang tepat sesuai dengan kueri tersebut.

``` graphql
query {
  user(id: 1) {
    name
    email
    posts {
      title
      body
    }
  }
}
```
Dalam contoh ini, kueri mengambil data pengguna dengan ID 1 beserta nama dan emailnya. Selain itu, kueri juga meminta daftar pos pengguna dengan judul dan isi.

Keuntungan utama GraphQL adalah fleksibilitasnya. Klien memiliki kontrol penuh atas data yang diperlukan dan strukturnya, sehingga mengurangi over-fetching dan under-fetching data. Ini juga memungkinkan pengembang untuk menggabungkan beberapa sumber data menjadi satu kueri tunggal.

Selain itu, GraphQL menyediakan fitur seperti validasi tipe data pada tingkat skema, introspeksi untuk mendapatkan informasi tentang skema yang tersedia, dan kemampuan untuk melakukan mutasi (pengubahan) data.

GraphQL dapat diimplementasikan dengan berbagai bahasa pemrograman, dan ada banyak alat dan framework yang mendukung pengembangan dan penggunaan GraphQL, seperti Apollo, Relay, dan banyak lainnya.

# CRUD pada GraphQL
GraphQL dapat digunakan untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data. Untuk melakukan operasi tersebut, kita perlu mendefinisikan tipe-tipe dan resolver yang sesuai dalam skema GraphQL.

Berikut adalah contoh penggunaan CRUD pada GraphQL:
1. Create (Membuat data baru): Untuk membuat data baru, kita menggunakan operasi mutation dalam GraphQL. Berikut adalah contoh penggunaan mutation untuk membuat pengguna baru:
``` graphql
mutation {
  createUser(input: {
    name: "Roni Andarsyah",
    email: "roniandarsyah@ulbi.ac.id"
  }) {
    id
    name
    email
  }
}
```

Dalam contoh ini, kita menggunakan mutation dengan nama createUser. Operasi ini menerima input berupa nama dan email pengguna baru, dan mengembalikan id, nama, dan email pengguna yang baru dibuat.

2. Read (Membaca data): Untuk membaca data, kita menggunakan operasi query dalam GraphQL. Berikut adalah contoh penggunaan query untuk mendapatkan informasi pengguna berdasarkan ID:
``` graphql
query {
  user(id: 1) {
    id
    name
    email
  }
}
```
Dalam contoh ini, kita menggunakan query dengan nama user. Operasi ini menerima input berupa ID pengguna dan mengembalikan id, nama, dan email pengguna yang sesuai dengan ID tersebut.

3. Update (Memperbarui data): Untuk memperbarui data, kita juga menggunakan operasi mutation dalam GraphQL. Berikut adalah contoh penggunaan mutation untuk memperbarui nama pengguna berdasarkan ID:
``` graphql
mutation {
  updateUser(id: 1, input: {
    name: "John Smith"
  }) {
    id
    name
    email
  }
}
```
Dalam contoh ini, kita menggunakan mutation dengan nama updateUser. Operasi ini menerima input berupa ID pengguna dan nama baru yang ingin diperbarui. Operasi ini mengembalikan id, nama, dan email pengguna setelah diperbarui.

4. Delete (Menghapus data): Untuk menghapus data, kita menggunakan operasi mutation juga. Berikut adalah contoh penggunaan mutation untuk menghapus pengguna berdasarkan ID:
``` graphql
mutation {
  deleteUser(id: 1) {
    id
    name
    email
  }
}
```
Dalam contoh ini, kita menggunakan mutation dengan nama deleteUser. Operasi ini menerima input berupa ID pengguna yang ingin dihapus. Operasi ini mengembalikan id, nama, dan email pengguna yang dihapus.

Untuk menerapkan operasi CRUD dalam GraphQL, kita perlu menentukan resolver yang sesuai untuk setiap operasi yang didefinisikan dalam skema GraphQL. Resolver adalah fungsi yang menghubungkan operasi GraphQL dengan logika bisnis yang sesuai untuk memanipulasi data pada backend.
