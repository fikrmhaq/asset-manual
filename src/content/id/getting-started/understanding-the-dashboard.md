---
title: Memahami Beranda
description: Arti keempat angka di layar utama, dan ke mana masing-masing menuju.
order: 40
keywords: [beranda, dasbor, ringkasan, ikhtisar, statistik, jumlah]
related:
  - getting-started/finding-your-way-around
  - reports/the-eight-reports
---

Beranda adalah layar pertama setelah Anda masuk. Ia berupa ringkasan, bukan ruang
kerja — tidak ada yang diubah di sini, dan setiap angka merupakan tautan menuju
laporan yang menghasilkannya.

Semua yang ditampilkan terbatas pada apa yang boleh Anda lihat. Jika peran Anda
terbatas pada satu instansi, ini adalah angka instansi Anda, bukan seluruh
organisasi.

## Keempat angka

| Angka | Yang dihitung |
|---|---|
| **Aset** | Seluruh catatan aset, dengan jumlah yang masih aktif di bawahnya |
| **Unit aset** | Seluruh barang fisik satuan dari semua aset tersebut |
| **Sedang dipinjam** | Peminjaman yang sedang memegang unit — berjalan atau sudah terlambat |
| **Terlambat** | Peminjaman yang masih memegang unit melewati tanggal kembali yang diharapkan |

Selisih antara **Aset** dan **Unit aset** adalah hal yang wajar. Satu catatan
aset dapat mewakili seratus barang fisik. Jika kedua angka berdekatan, sebagian
besar aset Anda hanya memiliki satu unit; jika unit jauh lebih banyak, Anda
membeli dalam jumlah besar. Keduanya bukan masalah.

> [!TIP]
> **Terlambat** adalah satu-satunya angka yang layak diperiksa setiap hari. Hanya
> angka inilah yang mewakili sesuatu yang membutuhkan tindakan, bukan sesuatu
> yang sudah tercatat.

## Dua rincian

Di bawah angka-angka tersebut, dua diagram menghitung unit aset:

- **Unit menurut status siklus hidup** — berapa yang digunakan, di gudang,
  dipinjam, dalam perbaikan, dan seterusnya. Lihat
  [Status siklus hidup](/concepts/lifecycle-state).
- **Unit menurut kondisi** — berapa yang baik, cukup, kurang baik, rusak, atau
  rusak berat. Lihat [Kondisi](/concepts/condition).

Unit tanpa kondisi tercatat dihitung terpisah sebagai *Belum dicatat*. Kelompok
itu layak diperhatikan: unit tanpa kondisi biasanya sudah didaftarkan tetapi
belum pernah dioperasikan. Lihat
[Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit).

Setiap diagram memiliki tautan **Laporan lengkap** menuju laporan yang
diringkasnya.

## Jika Beranda kosong

Dua sebab berbeda, dengan penanganan berbeda:

- **Registri memang belum berisi apa pun.** Mulailah dari
  [Bagaimana cara membuat aset?](/how-do-i/create-an-asset).
- **Anda tidak dapat melihat laporan.** Beranda dibangun dari data laporan dan
  membutuhkan `perm:report:read`. Tanpa izin itu, Beranda tidak muncul di
  navigasi Anda sama sekali.

## Artikel terkait

- [Mengenali navigasi](/getting-started/finding-your-way-around)
- [Memahami izin](/getting-started/understanding-permissions)
