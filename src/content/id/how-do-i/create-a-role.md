---
title: Bagaimana cara membuat peran?
description: Menetapkan sekumpulan izin bernama yang dapat diberikan kepada pengguna.
order: 310
task: true
permissions:
  - role:create
  - role-permission:update
keywords: [peran, izin, akses, kelompok, buat peran, menyeluruh]
related:
  - concepts/roles-and-permissions
  - how-do-i/assign-permissions
  - reference/permission-reference
---

## Untuk apa ini

Membuat **peran** — sekumpulan izin bernama. Pengguna diberi peran, bukan izin
satuan, sehingga peran adalah cara akses dirancang di aplikasi ini.

## Sebelum memulai

Tentukan dahulu peran ini *untuk apa* sebelum membuatnya. Sebuah peran sebaiknya
mencerminkan pekerjaan yang benar-benar dilakukan seseorang: "mencatat barang
datang", "mengurus gudang", "membaca laporan".

Dua kebiasaan menjaga peran tetap terkelola:

- **Namai menurut pekerjaannya, bukan orangnya.** "Petugas gudang", bukan "Budi".
- **Lebih baik beberapa peran kecil daripada satu peran besar.** Seorang pengguna
  dapat memegang banyak peran, dan peran sempit dapat digabungkan; satu peran
  luas harus digandakan dan disunting setiap kali ada yang membutuhkan kumpulan
  yang sedikit berbeda.

Membuat peran memerlukan peran menyeluruh pada akun Anda sendiri.

## Langkah-langkah

1. Buka **Organisasi › Peran**.
2. Pilih **Peran baru**.
3. Masukkan **Nama**.
4. Aktifkan **Menyeluruh** hanya jika peran ini harus menjangkau lebih dari satu
   instansi — lihat di bawah.
5. Pilih **Buat**.
6. Buka peran yang baru dibuat, masuk ke tab **Izin**, lalu
   [berikan izinnya](/how-do-i/assign-permissions).

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nama | Ya | Maksimal 50 karakter. Harus unik |
| Menyeluruh | Tidak | Menghapus batas instansi dari izin peran ini |
| Dapat diberikan instansi | Tidak | Memungkinkan admin instansi memberikan peran ini kepada penggunanya sendiri |

## Menyeluruh atau tidak

Biarkan mati untuk hampir setiap peran. Peran yang tidak menyeluruh bersifat
**terbatas pada instansi**: pemegangnya bekerja di dalam instansinya sendiri, dan
itulah yang Anda inginkan bagi orang-orang yang menjalankan satu lokasi.

Aktifkan bila peran harus melihat lintas instansi, atau bila peran membutuhkan
salah satu izin yang hanya bermakna secara organisasi: membuat atau menyunting
instansi dan peran, atau mengubah izin yang dibawa sebuah peran.

> [!IMPORTANT]
> Menyeluruh tidak memberi apa pun dengan sendirinya. Ia hanya menghapus
> pembatasan instansi dari izin yang sudah dimiliki peran itu. Peran menyeluruh
> tanpa izin tetap tidak dapat melakukan apa-apa.

Layar izin menandai kode yang mensyaratkannya. Begitu salah satunya diberikan,
mematikan status menyeluruh akan ditolak sampai izin tersebut dicabut.

## Dapat diberikan instansi atau tidak

Ini menentukan apakah admin instansi boleh membagikan peran tersebut kepada
penggunanya sendiri. Bawaannya mati, dan mati adalah jawaban yang aman.

Aktifkan untuk peran kerja sehari-hari yang diisi sendiri oleh sekolah atau
kantor — petugas gudang, petugas peminjaman, atau pengguna baca-saja. Biarkan
mati untuk apa pun yang ingin Anda pegang sendiri.

> [!WARNING]
> **Ini memberikan izin peran tersebut kepada setiap admin instansi.**
>
> Siapa pun yang membuat akun pengguna juga menetapkan kata sandinya, sehingga ia
> dapat masuk sebagai akun itu. Admin yang dapat memberikan sebuah peran karena
> itu dapat mengambilnya untuk dirinya sendiri: buat akun, berikan peran
> tersebut, lalu masuk sebagai akun itu.
>
> Sebelum menyalakannya, tanyakan apakah Anda nyaman memberikan izin-izin ini
> langsung kepada setiap admin instansi. Jika tidak, biarkan mati.

Peran menyeluruh tidak akan pernah bisa ditandai dapat diberikan instansi.
Sakelarnya tidak tersedia selama Menyeluruh aktif, dan sistem menolak kombinasi
tersebut sekalipun dicoba secara langsung.

## Apa yang terjadi setelahnya

Peran sudah ada tetapi masih kosong. Berikan izinnya, lalu berikan peran tersebut
kepada pengguna melalui tab **Peran** pada masing-masing pengguna.

## Menghapus peran

Peran adalah satu-satunya catatan keorganisasian yang benar-benar dihapus, bukan
dinonaktifkan. Penghapusan **ditolak selama masih ada pengguna yang
memegangnya**, jadi lepaskan dulu dari para pengguna.

## Tugas terkait

- [Peran dan izin](/concepts/roles-and-permissions)
- [Bagaimana cara memberikan izin?](/how-do-i/assign-permissions)
