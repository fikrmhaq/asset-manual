---
title: Bagaimana cara mencatat pengembalian peminjaman?
description: Mencatat bahwa barang yang dipinjam telah kembali.
order: 250
task: true
permissions:
  - borrowing:return
keywords: [mengembalikan, kembali, pengembalian, mengembalikan aset, kembalikan barang, tutup peminjaman]
related:
  - concepts/borrowing
  - borrowing/borrowing-statuses
  - how-do-i/extend-a-borrowing
---

## Untuk apa ini

Menutup sebuah peminjaman dan mengembalikan unitnya ke layanan. Setiap unit yang
masih di luar berpindah dari `state:BORROWED` kembali ke
`state:lifecycle/ACTIVE`.

## Sebelum memulai

- Peminjaman harus berstatus `state:borrowing/ACTIVE` atau
  `state:borrowing/OVERDUE`. Keduanya dapat dikembalikan; keterlambatan tidak
  mengubah caranya.
- Ketahui tanggal barang benar-benar kembali, bila bukan hari ini.

> [!IMPORTANT]
> Peminjaman dikembalikan **sebagai satu kesatuan**. Anda tidak dapat
> mengembalikan tiga dari lima unit — mencatat pengembalian akan mengembalikan
> seluruh isi peminjaman. Jika barang memang kembali terpisah, seharusnya
> peminjamannya dibuat terpisah.

## Langkah-langkah

1. Buka **Operasional › Peminjaman**.
2. Temukan peminjamannya. Penyaring **Terlambat** mempersempit daftar ke yang
   melewati tenggat.
3. Pilih peminjamannya.
4. Pilih **Catat pengembalian**.
5. Setel **Tanggal pengembalian sebenarnya**. Bawaannya hari ini.
6. Tambahkan **Catatan** bila ada yang layak dicatat — kerusakan, kelengkapan
   yang hilang, alasan keterlambatan.
7. Pilih **Catat pengembalian**.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Tanggal pengembalian sebenarnya | Ya | Bawaannya hari ini. Harus pada atau setelah tanggal pinjam |
| Catatan | Tidak | Teks bebas |

## Apa yang terjadi setelahnya

- Peminjaman menjadi `state:borrowing/RETURNED` dan ditutup secara permanen.
- Setiap unit yang masih bertanda dipinjam kembali ke `state:lifecycle/ACTIVE`.
- Catatan mempertahankan **tanggal aslinya** — tanggal pinjam, perkiraan kembali,
  dan tanggal pengembalian yang baru Anda catat — dan semuanya tidak pernah
  diubah setelahnya.

> [!CAUTION]
> Tindakan ini tidak dapat dibatalkan. Peminjaman yang sudah dikembalikan tidak
> dapat dibuka kembali.

## Jika ada barang yang kembali dalam keadaan rusak

Catatan pengembalian merekam *bahwa* hal itu terjadi. Untuk mencatatnya pada
barangnya sendiri,
[ubah kondisi unitnya](/how-do-i/change-a-unit-condition) setelahnya —
peminjaman mencatat peminjamannya, unit mencatat keadaannya sendiri.

## Tugas terkait

- [Status peminjaman](/borrowing/borrowing-statuses)
- [Bagaimana cara memperpanjang peminjaman?](/how-do-i/extend-a-borrowing)
