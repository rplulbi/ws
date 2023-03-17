## Persiapan Praktikum Web Service

- Instal Golang
- Instal Postman
- masukan Environment
![image](https://user-images.githubusercontent.com/15622730/225916958-5f2ffcb5-0f98-4c76-83ff-d686673f9015.png)

# Postman

1. Install postman. Pilih salah satu dari sini https://github.com/public-apis/public-apis. 
2. lakukan request ke public api dengan postman contoh : https://alexwohlbruck.github.io/cat-facts/docs/
![image](https://user-images.githubusercontent.com/11188109/218394186-d8621df9-9e04-4e7e-9d5f-bb6e84032db1.png)
3. Pilih menu </> atau code pilih javascript fetch
![image](https://user-images.githubusercontent.com/11188109/218394378-778f0deb-f3fd-4d3b-a276-1987c16bc76b.png)

# Tailwind

Untuk membuat antarmuka menggunakan komponen tailwind contoh :https://tailwindcomponents.com/component/multi-line-table

lakukan download. fork repo ini. kemudian open with code. taruh file htmlnya di folder di dalam folder site

![image](https://user-images.githubusercontent.com/15622730/225920294-1ed3649f-d71c-4094-9824-8c708a159716.png)

fork repo

![image](https://user-images.githubusercontent.com/15622730/225920374-001f7963-1b51-4848-b812-f6e3ce18e869.png)
lakukan clone repo yang di fork

install plugin live server
![image](https://user-images.githubusercontent.com/11188109/218396548-483f109a-c88c-4bc6-96d0-5d784a447556.png)


# Menghubungkan situs dengan Public API

1. Buat folder Nama di dalam folder Praktikum
2. Buat template tailwindcss simpan sebagai index.html
3. buat file js dengan nama croot.js panggil di bawah dengan script, sebelum tag </body>
    ```html
    <script src="./test.js"></script>
    ```
4. Buka dengan live server, inspect lihat di console.

![image](https://user-images.githubusercontent.com/15622730/225922088-3f53696e-7b02-4c01-9705-dbfe040b9745.png)

6. Isi dari script test.js contoh :
   ```js
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    hasil=""

    fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
      .then(response => response.text())
      .then(result => tampilkan(result))
      .catch(error => console.log('error', error));

    function tampilkan(result){
      console.log(result);
      hasil=JSON.parse(result);

      //document.getElementById("nama").innerHTML(result);
    }
    ```
    
    akan terlihat variabel hasil di console log
    
    ![image](https://user-images.githubusercontent.com/15622730/225922649-e45e3e0f-3214-4698-81be-1976de9f135a.png)    
    
    untuk akses variabel global hasil kita pakai console log
    
    ![image](https://user-images.githubusercontent.com/15622730/225923912-ad48cb50-168f-4aca-9df2-7bc29dd0b360.png)
    
    kemudian tambahkan ramuan looping untuk mengeluarkan semuanya
    
    ![image](https://user-images.githubusercontent.com/11188109/218428781-5b8a7467-b027-48e6-aaf2-8437be0ec8c8.png)
    

## Tugas

1. Buat folder NPM di dalam folder site di dalam folder chapter01. Pilih Public API
2. Ada dua file yang dibuat yaitu index.html dan asal.js. 
3. Buat html bisa membaca semua data dari API, pastikan setiap orang berbeda, tidak boleh sama API nya.
    ![image](https://user-images.githubusercontent.com/11188109/218429415-dc895212-8982-4d73-9010-32cf5e72906f.png)
4. Pull Request Dengan Subjek : Tugas_Nama, 



