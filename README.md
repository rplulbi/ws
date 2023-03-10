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

## Absensi Kehadiran
| PART     | Hari/Tgl          | NPM     | Nama           | Kehadiran  |
| -------| -------| ------- | -------------- | --- |
| 1 | Jumat, 10/03/23 | Isi NPM | Yadi Mulyadi | Hadir  |
|  | Jumat, 10/03/23 | Isi NPM | Ardini Yuanita Lubis | Izin  |
| 2 | Sabtu, 11/03/23 | Isi NPM | Yadi Mulyadi | Hadir  |
|  | Sabtu, 11/03/23 | Isi NPM | Ardini Yuanita Lubis | Hadir  |

## Daftar Nilai

| NPM     | Nama           | 1   |
| ------- | -------------- | --- |
| ISI NPM | Yadi Mulyadi | 0   |
| ISI NPM | Ardini Yuanita Lubis | 0   |

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

Digunakan Hanya Satu kali untuk instalasi pada git scm,

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## Generate RSA Key

Digunakan Hanya Satu kali untuk instalasi pada git scm,

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## Get SSH Key

untuk mendapatkan kunci ssh di komputer Anda, dan masukkan pengaturan kunci github atau gitlab ssh Anda.

```sh
cat ~/.ssh/id_rsa.pub
```

jika tidak ada kunci yang muncul, harap buat kunci baru atur konfigurasi global git di bagian selanjutnya dan tambahkan kunci publik ke profil github Anda.
