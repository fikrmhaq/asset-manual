---
title: Bagaimana cara membatalkan peminjaman?
description: Membatalkan draf peminjaman yang tidak jadi dilaksanakan.
order: 270
task: true
permissions:
  - borrowing:cancel
keywords: [batal, batalkan, hapus peminjaman, tidak jadi]
related:
  - borrowing/borrowing-statuses
  - how-do-i/create-a-borrowing
---

## Untuk apa ini

Menutup peminjaman berstatus `state:borrowing/DRAFT` yang tidak jadi berjalan —
peminjam berubah pikiran, atau catatannya dibuat karena keliru.

## Hanya draf yang dapat dibatalkan

Pembatalan hanya tersedia pada draf. Begitu peminjaman diaktifkan, barangnya
secara fisik sudah keluar, dan cara menutupnya adalah
[mencatat pengembalian](/how-do-i/return-a-borrowing).

## Langkah-langkah

1. Buka **Operasional › Peminjaman** lalu pilih drafnya.
2. Pilih **Batalkan**.
3. Konfirmasikan.

## Apa yang terjadi setelahnya

- Peminjaman menjadi `state:borrowing/CANCELLED` dan ditutup secara permanen.
- **Tidak ada unit yang berubah status.** Draf tidak pernah memegang unitnya,
  jadi tidak ada yang perlu dilepas. Dialog konfirmasi menyatakan hal ini secara
  eksplisit.
- Catatannya tetap terlihat pada daftar dan dalam laporan, menunjukkan bahwa
  sebuah peminjaman pernah direncanakan dan tidak terjadi.

> [!CAUTION]
> Draf yang dibatalkan tidak dapat dibuka kembali. Jika peminjamannya ternyata
> tetap terjadi, buat peminjaman baru.

## Membatalkan atau membiarkannya saja?

Draf yang dibiarkan tidak memegang apa pun dan tidak menghalangi apa pun —
unitnya tetap tersedia, dan peminjaman lain dapat mengambilnya. Pembatalan
bertujuan menjaga daftar tetap terbaca, bukan melepaskan sesuatu.

Batalkan draf yang Anda tahu sudah tidak berlaku, agar daftar hanya menampilkan
peminjaman yang mungkin benar-benar terjadi.

## Tugas terkait

- [Status peminjaman](/borrowing/borrowing-statuses)
- [Bagaimana cara membuat peminjaman?](/how-do-i/create-a-borrowing)
