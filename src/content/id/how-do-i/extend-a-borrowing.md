---
title: Bagaimana cara memperpanjang peminjaman?
description: Membiarkan peminjam menahan barang lebih lama, dan memahami apa yang sebenarnya dilakukan aplikasi.
order: 260
task: true
permissions:
  - borrowing:extend
keywords: [perpanjang, perpanjangan, lebih lama, tenggat baru]
related:
  - borrowing/borrowing-statuses
  - how-do-i/return-a-borrowing
---

## Untuk apa ini

Melanjutkan peminjaman melewati tanggal pengembalian yang diharapkan.

Tindakan ini **tidak** sekadar mengubah tanggalnya. Memperpanjang akan menutup
peminjaman yang berjalan sebagai dikembalikan, lalu membuka **draf baru** atas
unit yang sama dengan tanggal yang baru.

## Mengapa demikian

Karena peminjaman pertama memang benar-benar berjalan sampai tanggal aslinya, dan
catatan yang diam-diam menggeser tanggal akan menghapus fakta itu. Menyimpan dua
catatan mempertahankan apa yang sebenarnya terjadi: barang seharusnya kembali
tanggal 10, tidak dikembalikan, dan peminjamannya dilanjutkan sampai tanggal 24.

Dialognya menyatakan hal itu ketika Anda membukanya.

## Langkah-langkah

1. Buka peminjamannya. Statusnya harus `state:borrowing/ACTIVE` atau
   `state:borrowing/OVERDUE`.
2. Pilih **Perpanjang**.
3. Setel **Perkiraan kembali baru** — kapan peminjaman lanjutan jatuh tempo.
4. Setel **Tanggal penutupan catatan ini** — tanggal peminjaman asli dicatat
   berakhir.
5. Konfirmasikan.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Perkiraan kembali baru | Ya | Kapan peminjaman lanjutan jatuh tempo |
| Tanggal penutupan catatan ini | Ya | Tanggal peminjaman asli ditutup |

## Apa yang terjadi setelahnya

Terdapat dua catatan:

| Catatan | Status | |
|---|---|---|
| Yang asli | `state:borrowing/RETURNED` | Ditutup pada tanggal yang Anda berikan, dengan tanggal pinjam dan perkiraan kembali aslinya tetap utuh |
| Yang baru | `state:borrowing/DRAFT` | Mencakup unit yang sama, dengan perkiraan kembali yang baru |

> [!IMPORTANT]
> Peminjaman yang baru berupa **draf**. Ia belum berjalan sampai Anda
> mengaktifkannya — buka lalu pilih **Aktifkan**, persis seperti ketika
> [membuat peminjaman](/how-do-i/create-a-borrowing). Sampai saat itu, unitnya
> belum tercatat sedang keluar pada peminjaman tersebut.

## Batasan yang perlu diketahui

> [!LIMITATION]
> Tidak ada yang mengaitkan peminjaman baru dengan peminjaman yang
> dilanjutkannya. Kedua catatan ada dan keduanya benar, tetapi Anda tidak dapat
> berpindah dari satu ke yang lain, dan tidak ada keterangan bahwa salah satunya
> merupakan perpanjangan.
>
> Jika kaitan itu penting — dan untuk peminjaman yang diperpanjang beberapa kali
> biasanya memang penting — tuliskan pada **Deskripsi** catatan baru:
> "Perpanjangan peminjaman kepada J. Santoso yang semula jatuh tempo 10 Maret."
> Hanya itulah yang akan membawa kaitannya bagi pembaca di kemudian hari.

## Tugas terkait

- [Status peminjaman](/borrowing/borrowing-statuses)
- [Bagaimana cara membuat peminjaman?](/how-do-i/create-a-borrowing)
