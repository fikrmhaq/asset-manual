---
title: Transaksi
description: Catatan permanen atas sesuatu yang terjadi pada satu unit atau lebih.
order: 160
keywords: [transaksi, kejadian, catatan, historis, hanya baca, permanen, jenis]
related:
  - transactions/recording-transactions
  - how-do-i/record-a-transaction
  - concepts/asset-unit
---

**Transaksi** mencatat bahwa sesuatu terjadi pada satu atau beberapa
[unit aset](/concepts/asset-unit) pada tanggal tertentu. Jenis kejadiannya
terserah Anda: organisasi Anda menetapkan sendiri daftar jenis transaksinya.

## Transaksi bersifat permanen

Inilah sifat utamanya.

> [!IMPORTANT]
> Setelah disimpan, transaksi **tidak dapat diubah atau dihapus**. Tidak ada
> tombol sunting di mana pun dalam aplikasi, dan tidak ada cara menambahkannya.
> Periksa rinciannya sebelum menyimpan.

Hal itu disengaja. Transaksi adalah pernyataan historis — "pada 3 Maret kelima
unit ini diserahterimakan" — dan catatan yang dapat diam-diam direvisi tidak
bernilai sebagai bukti.

Jika Anda salah mencatat, cara memperbaikinya adalah mencatat transaksi koreksi
yang menjelaskan pembetulannya, dan membiarkan yang asli tetap ada.

## Isi sebuah transaksi

| Kolom | Wajib | Catatan |
|---|---|---|
| Tanggal transaksi | Ya | Kapan kejadiannya |
| Jenis | Ya | Dari daftar jenis transaksi milik Anda |
| Unit terdampak | Ya | Minimal satu, maksimal 500 |
| Deskripsi | Tidak | Teks bebas |
| Penyedia | Tidak | Lihat di bawah |
| Kontrak | Tidak | Lihat di bawah |
| Instansi | Tidak | Bawaannya instansi Anda |

Setiap unit terdampak dapat membawa catatannya sendiri.

## Penyedia dan kontrak

Kedua kolom selalu ditampilkan, apa pun jenis yang Anda pilih.

> [!NOTE]
> Isilah keduanya bila transaksi memang berkaitan dengan pengadaan — penerimaan
> barang, serah terima dari penyedia. Biarkan kosong untuk yang lain. Aplikasi
> tidak mengetahui jenis transaksi mana yang berkaitan dengan pengadaan, sehingga
> ia tidak dapat menyembunyikan kolom untuk jenis yang bukan, dan ia tidak
> menebak. Formulir memuat petunjuk bahwa kolom itu untuk transaksi yang berasal
> dari pengadaan.

## Unit boleh berada pada status apa pun

Berbeda dari [peminjaman](/concepts/borrowing), transaksi tidak mensyaratkan
status siklus hidup tertentu. Transaksi mencatat sesuatu yang *terjadi* pada
sebuah unit, dan hal-hal memang terjadi pada unit yang di gudang, dalam
perbaikan, bahkan yang sudah dihapuskan.

Unit yang sama tidak boleh muncul dua kali pada satu transaksi.

## Di mana transaksi muncul

- Daftar **Transaksi**, dapat disaring menurut jenis, instansi, kontrak, dan tanggal
- Tab **Transaksi** pada setiap unit, memuat semua yang tercatat atasnya

> [!NOTE]
> Halaman detail transaksi menampilkan status siklus hidup setiap unit
> terdampak **sebagaimana saat ini**, bukan sebagaimana ketika transaksi dicatat.
> Halaman tersebut menyatakannya. Untuk keadaan pada suatu titik waktu, gunakan
> [riwayat](/concepts/history) unit.

## Transaksi bukan log audit

Transaksi adalah kejadian bisnis yang Anda catat dengan sengaja.
[Log audit](/concepts/audit-log) ditulis otomatis dan mencatat perubahan catatan,
bukan kejadian di dunia nyata.

## Artikel terkait

- [Bekerja dengan transaksi](/transactions/recording-transactions)
- [Bagaimana cara mencatat transaksi?](/how-do-i/record-a-transaction)
- [Log audit](/concepts/audit-log)
