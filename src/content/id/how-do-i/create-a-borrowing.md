---
title: Bagaimana cara membuat peminjaman?
description: Meminjamkan satu unit atau lebih kepada seseorang dan memulai peminjamannya.
order: 240
task: true
permissions:
  - borrowing:create
  - borrowing-item:create
  - borrowing:activate
keywords: [meminjam, pinjam, meminjamkan, peminjaman, meminjam aset, meminjam barang, keluarkan barang]
related:
  - concepts/borrowing
  - borrowing/borrowing-statuses
  - how-do-i/return-a-borrowing
---

## Untuk apa ini

Mencatat bahwa satu atau beberapa [unit aset](/concepts/asset-unit) dipinjamkan,
dan memindahkan unit tersebut ke `state:BORROWED` selama masa pinjam.

Ini pekerjaan tiga bagian: buat catatannya, tambahkan unitnya, lalu aktifkan.

## Sebelum memulai

- Ketahui **siapa** yang meminjam dan **cara menghubunginya**. Keduanya wajib.
- Ketahui **unit mana saja**, dan temukan melalui asetnya.
- Setiap unit harus sedang **digunakan** (`state:lifecycle/ACTIVE`). Unit yang
  masih `state:REGISTERED`, di gudang, atau dalam perbaikan tidak dapat keluar
  sebelum dioperasikan lebih dahulu.
- Tidak boleh ada unit yang sedang keluar pada peminjaman lain yang berjalan atau
  terlambat.

## Langkah-langkah

### 1. Buat catatannya

1. Buka **Operasional › Peminjaman**.
2. Pilih **Peminjaman baru**.
3. Isi kolom-kolom di bawah.
4. Pilih **Buat**.

Peminjaman dibuat sebagai `state:borrowing/DRAFT`. Belum ada yang dipinjamkan.

### 2. Tambahkan unitnya

1. Pada halaman peminjaman, gunakan **Tambahkan unit ke peminjaman ini**.
2. Pilih unitnya dengan menemukan asetnya lebih dahulu, lalu unitnya.
3. Ulangi untuk setiap barang yang akan keluar.

### 3. Aktifkan

1. Pilih **Aktifkan**.
2. Konfirmasikan.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Peminjam | Ya | Siapa yang membawa barangnya. Maksimal 255 karakter |
| Kontak peminjam | Ya | Cara menghubunginya selama barang di luar |
| Tanggal pinjam | Ya | Kapan peminjaman dimulai |
| Perkiraan kembali | Ya | Harus pada atau setelah tanggal pinjam |
| Penanggung jawab | Tidak | Pegawai yang bertanggung jawab atas peminjaman |
| Instansi | Tidak | Bawaannya instansi Anda |
| Deskripsi | Tidak | Teks bebas — tujuan, syarat, apa pun yang layak dicatat |

Kedua kolom peminjam wajib karena nama tanpa cara menghubungi tidak
mengidentifikasi siapa yang memegang barang.

## Apa yang terjadi setelahnya

Saat diaktifkan:

- Peminjaman menjadi `state:borrowing/ACTIVE`.
- **Setiap unit di dalamnya berpindah ke `state:BORROWED`.**
- Bagian utama catatan dan daftar unitnya menjadi **tetap** — keduanya tidak
  dapat diubah lagi.

> [!IMPORTANT]
> Tambahkan seluruh unit **sebelum** mengaktifkan. Setelah aktif, susunan
> peminjaman tidak dapat diubah. Jika ada yang terlewat, buat peminjaman kedua
> untuknya.

Kelak, [catat pengembaliannya](/how-do-i/return-a-borrowing) atau
[perpanjang peminjamannya](/how-do-i/extend-a-borrowing). Draf yang tidak lagi
diperlukan dapat [dibatalkan](/how-do-i/cancel-a-borrowing).

## Jika aktivasi ditolak

| Pesan | Artinya |
|---|---|
| Peminjaman harus memuat sekurang-kurangnya satu unit aset | Tambahkan unit lebih dahulu |
| Unit aset tersebut sedang dipinjam pada peminjaman lain | Peminjaman lain yang berjalan atau terlambat sedang memegangnya |
| Unit aset tidak dapat berpindah dari X ke BORROWED | Ada unit yang belum digunakan. Operasikan lebih dahulu |

## Tugas terkait

- [Status peminjaman](/borrowing/borrowing-statuses)
- [Bagaimana cara mencatat pengembalian peminjaman?](/how-do-i/return-a-borrowing)
