---
title: Bagaimana cara memberikan izin?
description: Memberi sebuah peran izin yang diperlukannya, melalui daftar centang berkelompok.
order: 320
task: true
permissions:
  - role-permission:update
keywords: [izin, memberikan, daftar centang, akses, izinkan, izin peran]
related:
  - how-do-i/create-a-role
  - reference/permission-reference
  - concepts/roles-and-permissions
---

## Untuk apa ini

Menentukan apa yang dapat dilakukan sebuah peran, dengan mencentang izin pada
sebuah daftar.

## Langkah-langkah

1. Buka **Organisasi › Peran** lalu pilih perannya.
2. Buka tab **Izin**.
3. Centang izin yang seharusnya dimiliki peran tersebut.
4. Pilih **Simpan izin**.

Judulnya menampilkan berapa banyak dari total yang telah diberikan, sehingga Anda
dapat melihat sekilas apakah sebuah peran sempit atau luas.

## Daftarnya berkelompok

Ke-104 izin dikelompokkan menurut modul — Organisasi, Referensi, Aset Inti,
Pengadaan, Operasional, Laporan, Audit — karena daftar datar berisi 104 kode
tidak terbaca. Setiap kelompok memiliki kendali **Pilih semua**.

Kode berbentuk `resource:action`: `perm:asset:read`, `perm:borrowing:return`,
`perm:location:deactivate`. Daftar lengkapnya ada di
[Rujukan izin](/reference/permission-reference).

## Mulailah dari read

Peran yang tidak dapat **membaca** sesuatu tidak dapat bertindak atasnya, dan
bahkan tidak akan melihatnya pada navigasi. Jadi berikan `read` untuk semua yang
perlu diketahui peran tersebut lebih dahulu, lalu tambahkan tindakan di atasnya.

Urutan yang praktis:

1. `read` untuk modul yang dipakai peran tersebut.
2. `create` dan `update` untuk pekerjaan yang memang dilakukan peran itu.
3. Tindakan bernama — `activate`, `return`, `extend`, `cancel`,
   `record-history` — untuk operasi tertentu yang menjadi tanggung jawabnya.
4. `deactivate` dan `delete` paling akhir, dan secara terbatas.

> [!TIP]
> Memberikan `perm:borrowing:create` tanpa `perm:borrowing:activate`
> menghasilkan pengguna yang dapat menyiapkan peminjaman tetapi tidak dapat
> memulainya. Kadang itu justru yang Anda inginkan — pemisahannya ada supaya
> dapat dipakai secara sengaja.

## Izin yang memerlukan peran menyeluruh

Sebagian kode ditandai **Memerlukan peran menyeluruh** dan tidak dapat diberikan
kepada peran yang terbatas pada instansi: mengelola instansi, peran, katalog
izin, dan pemberian peran kepada pengguna.

Jika Anda membutuhkannya, aktifkan dahulu **Menyeluruh** pada tab Detail peran
tersebut. Lihat [Bagaimana cara membuat peran?](/how-do-i/create-a-role).

## Apa yang terjadi setelahnya

Perubahan berlaku **seketika** bagi setiap pemegang peran. Tidak ada yang perlu
keluar lalu masuk lagi; pengguna yang halamannya masih terbuka akan menemukan
tombol yang baru diizinkan setelah berpindah halaman, dan tombol yang baru
dicabut langsung berhenti berfungsi.

## Memeriksa hasilnya

Cara paling andal adalah menanyakan kepada pemegang peran apa yang dapat mereka
lihat. Navigasi dibangun dari izin, sehingga menu yang hilang berarti `read` yang
hilang.

## Tugas terkait

- [Rujukan izin](/reference/permission-reference)
- [Peran dan izin](/concepts/roles-and-permissions)
