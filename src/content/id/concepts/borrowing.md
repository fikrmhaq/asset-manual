---
title: Peminjaman
description: Peminjaman satu unit atau lebih kepada seseorang, dipantau dari draf hingga pengembalian.
order: 150
keywords: [peminjaman, pinjam, meminjamkan, kembali, terlambat, jatuh tempo]
related:
  - borrowing/borrowing-statuses
  - how-do-i/create-a-borrowing
  - how-do-i/return-a-borrowing
---

**Peminjaman** adalah catatan atas satu atau beberapa
[unit aset](/concepts/asset-unit) yang dipinjamkan kepada seseorang, dengan
tanggal pengembalian yang diharapkan.

## Peminjaman adalah satu kejadian

Inilah gagasan utamanya. Peminjaman yang mencakup lima unit adalah **satu
catatan**, bukan lima. Ia dibuat, diaktifkan, dan dikembalikan sebagai satu
kesatuan.

Unit satuan pada sebuah peminjaman tidak memiliki status sendiri — status
peminjamanlah yang berlaku bagi semuanya. Anda tidak dapat mengembalikan tiga
dari lima unit; mencatat pengembalian akan mengembalikan seluruh isinya.

> [!NOTE]
> Jika barang memang perlu dikembalikan terpisah, buatlah peminjaman terpisah
> untuk masing-masing.

## Isi sebuah peminjaman

| Kolom | Wajib | Catatan |
|---|---|---|
| Peminjam | Ya | Siapa yang memegang barangnya |
| Kontak peminjam | Ya | Cara menghubunginya selama barang di luar |
| Tanggal pinjam | Ya | Kapan peminjaman dimulai |
| Perkiraan kembali | Ya | Harus pada atau setelah tanggal pinjam |
| Penanggung jawab | Tidak | Pegawai yang bertanggung jawab atas peminjaman |
| Instansi | Tidak | Bawaannya instansi Anda |
| Deskripsi | Tidak | Teks bebas |

Kedua kolom peminjam wajib diisi: nama tanpa cara menghubungi tidak
mengidentifikasi siapa yang memegang barang.

## Lima status

`state:borrowing/DRAFT` → `state:borrowing/ACTIVE` →
`state:borrowing/RETURNED`, dengan `state:borrowing/OVERDUE` dan
`state:borrowing/CANCELLED` sebagai kemungkinan lain. Apa yang diizinkan
masing-masing dijelaskan di
[Status peminjaman](/borrowing/borrowing-statuses).

Ringkasnya: peminjaman dimulai sebagai draf, Anda menambahkan unit ke dalamnya,
Anda mengaktifkannya, dan kelak Anda mencatat pengembaliannya.

## Pengaruh aktivasi terhadap unit

Mengaktifkan peminjaman memindahkan setiap unit di dalamnya ke
`state:BORROWED`. Mencatat pengembalian memindahkannya kembali ke
`state:lifecycle/ACTIVE`.

Anda tidak pernah menetapkan status itu secara manual. Peminjamanlah yang
melakukannya, dan kedua sisinya ditulis bersamaan — sebuah unit tidak akan pernah
tertinggal bertanda dipinjam oleh peminjaman yang gagal dimulai.

Sebuah unit harus sedang digunakan (`state:lifecycle/ACTIVE`) untuk dapat
dipinjam. Unit yang masih `state:REGISTERED`, berada di gudang, atau dalam
perbaikan tidak dapat keluar sebelum dioperasikan lebih dulu.

## Satu unit, satu peminjaman

Unit yang sedang keluar pada peminjaman **berjalan atau terlambat** tidak dapat
ditambahkan ke peminjaman kedua. Dua *draf* boleh menyebut unit yang sama — tidak
ada yang mengikat sampai aktivasi, dan yang lebih dulu aktif akan mengambilnya.

## Yang bukan peminjaman

Ini bukan sistem pemesanan atau reservasi. Tidak ada kalender, tidak ada
pemeriksaan ketersediaan di masa depan, dan tidak ada yang mencegah Anda membuat
draf yang berbenturan. Yang pertama diaktifkan yang menang.

## Artikel terkait

- [Status peminjaman](/borrowing/borrowing-statuses)
- [Bagaimana cara membuat peminjaman?](/how-do-i/create-a-borrowing)
- [Status siklus hidup](/concepts/lifecycle-state)
