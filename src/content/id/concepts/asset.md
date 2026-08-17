---
title: Aset
description: Catatan induk untuk satu jenis barang milik organisasi Anda.
order: 20
keywords: [aset, catatan induk, jenis, model, registri]
related:
  - concepts/asset-vs-asset-unit
  - concepts/asset-unit
  - how-do-i/create-an-asset
---

**Aset** adalah catatan induk untuk satu *jenis* barang. Bukan satu laptop
tertentu — melainkan model laptopnya. Bukan kursi di ruang 12 — melainkan jenis
kursinya.

## Mengapa aset ada

Sebagian fakta berlaku untuk seluruh batch: jenis barangnya, pabrikannya,
instansi pemiliknya, dan dasar pembeliannya. Mencatat semua itu satu kali, pada
aset, memastikan datanya tidak menyimpang antara dua belas barang yang identik.

Segala hal yang dapat berbeda antar barang satuan — di mana letaknya, bagaimana
keadaannya, siapa yang memegangnya — melekat pada
[unit aset](/concepts/asset-unit).

## Isi sebuah aset

| Kolom | Catatan |
|---|---|
| Nama | Sebutan barangnya. Wajib |
| Klasifikasi | Jenis barangnya, dari hierarki referensi baku. Wajib, dan hanya tingkat paling rinci yang dapat dipilih |
| Instansi | Instansi pemiliknya. Bawaannya instansi Anda |
| Vendor | Pabrikan atau merek. Opsional |
| Deskripsi | Teks bebas. Opsional |
| Kontrak | Kontrak pengadaan yang menjadi dasar pembeliannya, jika ada. Opsional dan dapat diubah — lihat [Bagaimana cara mengubah aset?](/how-do-i/edit-an-asset) |
| Nilai atribut | Kolom tambahan sesuai klasifikasinya |
| Lampiran | Berkas: faktur, foto, buku petunjuk |

## Yang tidak dimiliki sebuah aset

Aset **tidak memiliki lokasi, kondisi, status siklus hidup, maupun riwayat**.
Pertanyaan-pertanyaan itu tidak punya jawaban tunggal untuk satu jenis barang —
dua belas laptop berada di dua belas tempat. Semua itu milik unit.

Aset juga tidak dapat dipinjam atau dimasukkan ke dalam transaksi. Keduanya
berlaku pada barang fisik.

## Aset tanpa unit

Diperbolehkan, dan bermakna: ia mencatat sesuatu yang sudah didaftarkan tetapi
belum diterima secara fisik. Tab Unit menyatakannya, bukan menganggapnya sebagai
kesalahan.

## Dua cara aset dibuat

- **Dari baris kontrak** — jalur yang biasa. Lihat
  [Bagaimana cara mendaftarkan aset dari kontrak?](/how-do-i/register-an-asset-from-a-contract).
- **Secara langsung** — untuk barang hibah, buatan sendiri, atau hasil migrasi
  yang tidak memiliki pengadaan. Lihat
  [Bagaimana cara mendaftarkan aset secara langsung?](/how-do-i/register-an-asset-directly).

Aset tanpa kontrak adalah kasus normal yang terdokumentasi — bukan data yang
kurang.

## Dinonaktifkan, bukan dihapus

Aset tidak pernah dihapus. Menonaktifkan sebuah aset tetap menyimpan catatannya,
unit-unitnya, dan seluruh riwayatnya, serta menghentikannya ditawarkan untuk
pekerjaan baru. Lihat [Aktif dan nonaktif](/concepts/active-and-inactive).

## Artikel terkait

- [Aset vs Unit Aset](/concepts/asset-vs-asset-unit)
- [Unit Aset](/concepts/asset-unit)
- [Klasifikasi](/concepts/classification)
