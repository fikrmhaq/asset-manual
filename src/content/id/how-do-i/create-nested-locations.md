---
title: Bagaimana cara membuat lokasi bersarang?
description: Menyusun struktur situs, gedung, lantai, dan ruangan.
order: 160
task: true
permissions:
  - location:create
keywords: [bersarang, hierarki, induk, turunan, struktur, pohon, sub-lokasi]
related:
  - how-do-i/create-a-location
  - concepts/location
  - locations/units-in-a-location
---

## Untuk apa ini

Menyusun struktur wilayah Anda — tempat mana berada di dalam tempat mana.

Tidak ada layar "sub-lokasi" tersendiri. Lokasi bersarang adalah lokasi biasa
yang menyebutkan induknya.

## Kerjakan dari luar ke dalam

Buat tempat terluar lebih dahulu, lalu bergerak ke dalam. Setiap tingkat menyebut
tingkat di atasnya sebagai induk.

```text
Kampus Utama                  ← tanpa induk (tingkat atas)
└── Gedung Administrasi       ← induk: Kampus Utama
    └── Lantai Satu           ← induk: Gedung Administrasi
        └── Ruang 204         ← induk: Lantai Satu
            └── Lemari A      ← induk: Ruang 204
```

## Langkah-langkah

1. Buat lokasi tingkat atas, biarkan **Di dalam lokasi lain** kosong. Lihat
   [Bagaimana cara membuat lokasi?](/how-do-i/create-a-location).
2. Buat tingkat berikutnya, pilih lokasi yang baru saja dibuat sebagai induknya.
3. Ulangi ke dalam sejauh yang berguna.

Saat memilih induk, pemilih memungkinkan Anda mencari berdasarkan nama atau
membuka sebuah lokasi untuk melihat isinya — pilihan yang lebih aman ketika nama
berulang.

## Seberapa dalam sebaiknya?

Sedalam tempat Anda benar-benar mencatat unit. Jika catatan Anda tidak pernah
lebih rinci dari "Gedung Bengkel", tidak ada gunanya membuat ruangannya.

Tidak ada batas kedalaman dan tidak ada yang menghitung tingkatnya; strukturnya
boleh berbeda di bagian wilayah yang berbeda.

## Melihat strukturnya

Daftar **Lokasi** memiliki **tampilan pohon** yang memperlihatkan susunannya
secara langsung — buka sebuah lokasi untuk melihat isinya. Tampilan daftar lebih
baik untuk menemukan satu tempat berdasarkan nama; tampilan pohon lebih baik
untuk memahami bentuknya.

Halaman setiap lokasi juga memiliki bagian **Di dalam lokasi ini** yang
mencantumkan turunan langsungnya.

## Menata ulang kemudian

Induk sebuah lokasi dapat diubah dengan menyuntingnya, dengan dua pembatasan:

- Sebuah lokasi tidak dapat menjadi induk bagi dirinya sendiri.
- Sebuah lokasi tidak dapat dipindahkan ke dalam salah satu turunannya — Anda
  tidak dapat menempatkan gedung di dalam salah satu ruangannya sendiri.

Unit yang sudah tercatat pada sebuah lokasi ikut berpindah bersamanya, karena
unit dicatat terhadap lokasinya, bukan terhadap jalurnya.

## Tugas terkait

- [Lokasi](/concepts/location)
- [Melihat isi sebuah lokasi](/locations/units-in-a-location)
