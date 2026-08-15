---
title: Bagaimana cara membuat area pada denah?
description: Menggambar sebuah ruangan pada denah dan mengaitkan bentuknya ke lokasi yang diwakilinya.
order: 190
task: true
permissions:
  - floor-plan-area:create
keywords: [area, poligon, gambar, bentuk, garis ruangan, tandai, denah]
related:
  - how-do-i/upload-a-floor-plan
  - concepts/floor-plan
  - how-do-i/find-a-location-on-a-floor-plan
---

## Untuk apa ini

Menggambar sebuah bentuk pada [denah](/concepts/floor-plan) dan mengaitkannya ke
lokasi di dalam lokasi pemilik denah. Kaitan itulah yang mengubah gambar menjadi
sesuatu yang dapat ditelusuri aplikasi.

## Sebelum memulai

- Denahnya harus sudah diunggah. Lihat
  [Bagaimana cara mengunggah denah?](/how-do-i/upload-a-floor-plan).
- Lokasi yang diwakili bentuk itu harus sudah ada, dan harus berada **di dalam**
  lokasi yang digambarkan denah — pada kedalaman berapa pun, tetapi di dalamnya.

> [!IMPORTANT]
> Anda tidak dapat mengaitkan sebuah area ke lokasi yang berada di luar lokasi
> yang digambarkan denah. Menggambar ruangan dari gedung lain pada denah lantai
> ini akan ditolak, karena denah yang menandai tempat yang tidak dikandungnya akan
> menyesatkan setiap pembacanya.

## Langkah-langkah

1. Buka **Lokasi**, pilih lokasinya, lalu buka tab **Denah**.
2. Pilih **Gambar area**.
3. Klik denah sekali untuk setiap sudut ruangan. Penghitung menunjukkan berapa
   sudut yang sudah ditempatkan; **minimal tiga** diperlukan.
4. Pilih **Ruangan yang diwakili area ini** dari daftar lokasi di dalam lokasi
   ini.
5. Pilih **Simpan area**.

Bentuknya muncul pada denah, dengan label lokasi yang diwakilinya.

## Menempatkan sudut tanpa tetikus

Editor juga menerima sudut berdasarkan koordinat. Masukkan **Titik X** dan
**Titik Y** berupa nilai antara 0 dan 1 — di mana `0, 0` adalah kiri atas gambar
dan `1, 1` kanan bawah — lalu pilih **Tambah titik**.

**Batalkan titik** menghapus sudut terakhir yang ditempatkan, dengan cara mana
pun.

## Bentuk bersifat proporsional, bukan piksel

Sudut disimpan relatif terhadap gambar, bukan sebagai posisi piksel. Itulah
sebabnya denah tetap sejajar dengan benar di ponsel maupun di monitor besar.

## Mengubah sebuah area

> [!LIMITATION]
> Bentuk sebuah area tidak dapat disesuaikan sudut demi sudut. Untuk mengubahnya,
> Anda menghapus areanya lalu menggambarnya ulang. Dalam praktiknya hal ini
> jarang menjadi masalah — ruangan jarang berubah bentuk — tetapi rencanakan
> penggambaran ulang, bukan penggeseran.

Menghapus sebuah area tidak berpengaruh pada lokasi yang diwakilinya. Aplikasi
menyatakan hal itu saat meminta konfirmasi.

## Mengerjakan satu denah

Gambarlah area dengan urutan yang konsisten — searah jarum jam mulai dari pintu
masuk, misalnya — dan Anda akan cepat menyadari bila ada ruangan yang terlewat.
Daftar **Area pada denah ini** di samping gambar menunjukkan apa saja yang sudah
digambar.

## Tugas terkait

- [Denah](/concepts/floor-plan)
- [Bagaimana cara menemukan lokasi melalui denah?](/how-do-i/find-a-location-on-a-floor-plan)
