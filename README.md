# Pemrograman III (Web Services)

Repository untuk perkuliahan web services kelas rekognisi pembelajaran lampau (RPL) sarjana terapan teknik informatika ULBI

## Jadwal Kuliah

- Jumat Pukul 19:00 - 20:00
- Sabtu Pukul 09:00 - 11:00

# gofiber

Golang Fiber Framework
Tugas, Semua Ada disini, upload ya, iya....
...

# Data Mahasiswa

Data Mahasiswa

## Daftar Nilai

| NPM     | Nama           | 1   |
| ------- | -------------- | --- |
| ISI NPM | NAMA MAHASISWA | 0   |

# Pendahuluan

Untuk perkuliahan yang harus dipersiapkan terdiri dari:

1. Instal Visual Studio Code (https://code.visualstudio.com/)
2. Instal Git SCM (https://git-scm.com/)
3. Fork Repository WS

## Perintah menggunakan gitbash

1. Jika sudah menambahkan file ketikan "git status"
2. Untuk upload ketikan "git add ." (seluruh file)
3. Untuk upload ketikan "git add NAMAFILE"
4. Berikan komentar "git commit -m "isi komentar"
5. Push "git push -u origin master" - jika berada di brance master - main (main)
6. Jika sudah terinisialisasi tinggal "git push" saja
7. Jika sudah fork jangan lupa sincronisasi repository
   ![image](https://user-images.githubusercontent.com/15622730/224335490-5d0d430c-293f-45ac-b3a3-1bd319f4a47c.png)
8. Untuk mengambil data yang sudah terupdate pada repo ketikan "git pull"

## Penggunaan SSH Key

1. Klik link berikut (https://www.roniandarsyah.com/2019/07/cara-mudah-konfigurasi-ssh-key-gitlab.html)

## Set config global

Just One time for first instalation of git scm,

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## Generate RSA Key

Just One time for first instalation of git scm,

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Get SSH Key

to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```

if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.
