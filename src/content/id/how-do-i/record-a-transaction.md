---
title: Bagaimana cara mencatat transaksi?
description: Mencatat kejadian permanen yang menyangkut satu unit atau lebih.
order: 280
task: true
permissions:
  - transaction:create
keywords: [transaksi, catat kejadian, serah terima, permanen]
related:
  - concepts/transaction
  - transactions/recording-transactions
---

## Untuk apa ini

Mencatat bahwa sesuatu terjadi pada satu atau beberapa
[unit aset](/concepts/asset-unit) pada tanggal tertentu, dengan jenis transaksi
yang telah ditetapkan organisasi Anda.

> [!CAUTION]
> Transaksi **tidak dapat diubah atau dihapus setelah disimpan**. Tidak ada
> tombol sunting di mana pun. Periksa semuanya sebelum menyimpan.

## Sebelum memulai

- **Jenis transaksinya** harus sudah ada. Jenis dikelola melalui
  **Data referensi → Jenis transaksi**; lihat
  [Data referensi](/administration/reference-lookups).
- Ketahui **unit mana** yang terdampak. Unit ditemukan melalui asetnya.
- Tentukan apakah penyedia dan kontrak berlaku — lihat di bawah.

## Langkah-langkah

1. Buka **Operasional › Transaksi**.
2. Pilih **Transaksi baru**.
3. Setel **Tanggal transaksi**.
4. Pilih **Jenis**.
5. Pada **Unit terdampak**, pilih **Tambahkan unit ke transaksi ini** lalu pilih
   setiap unit dengan menemukan asetnya lebih dahulu. Tambahkan catatan pada unit
   tertentu bila berguna.
6. Isi **Penyedia** dan **Kontrak** hanya bila kejadian ini berkaitan dengan
   pengadaan.
7. Tambahkan **Deskripsi**.
8. Periksa semuanya, lalu simpan.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Tanggal transaksi | Ya | Kapan kejadiannya |
| Jenis | Ya | Dari daftar jenis transaksi organisasi Anda |
| Unit terdampak | Ya | Minimal satu, maksimal 500. Tidak boleh ada unit ganda |
| Deskripsi | Tidak | Teks bebas, maksimal 5.000 karakter |
| Penyedia | Tidak | Hanya untuk transaksi yang berasal dari pengadaan |
| Kontrak | Tidak | Hanya untuk transaksi yang berasal dari pengadaan |
| Instansi | Tidak | Bawaannya instansi Anda |

## Tentang penyedia dan kontrak

Kedua kolom ditampilkan untuk **setiap** jenis transaksi, dengan petunjuk bahwa
keduanya untuk transaksi yang berasal dari pengadaan.

> [!NOTE]
> Aplikasi tidak mengetahui jenis transaksi mana yang berkaitan dengan pengadaan
> — tidak ada penanda pada jenisnya — sehingga ia tidak dapat menyembunyikan
> kolom untuk jenis yang bukan, dan ia tidak menebak. Isilah untuk penerimaan
> barang atau serah terima dari penyedia; biarkan kosong untuk yang lain.

## Unit boleh berada pada status apa pun

Berbeda dari [peminjaman](/concepts/borrowing), transaksi tidak mensyaratkan
status siklus hidup tertentu. Sesuatu dapat terjadi pada unit yang di gudang,
dalam perbaikan, atau bahkan sudah dihapuskan, dan mencatatnya tetap sah.

## Apa yang terjadi setelahnya

- Transaksi tersimpan dan **langsung menjadi hanya dapat dibaca**.
- Ia muncul pada daftar Transaksi, dan pada tab **Transaksi** setiap unit yang
  disebutkan di dalamnya.

Jika Anda salah mencatat, cara memperbaikinya adalah membuat transaksi koreksi
yang menjelaskan pembetulannya. Yang asli tetap ada.

## Tugas terkait

- [Transaksi](/concepts/transaction)
- [Bekerja dengan transaksi](/transactions/recording-transactions)
