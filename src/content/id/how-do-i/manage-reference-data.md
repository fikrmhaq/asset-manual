---
title: Bagaimana cara mengelola data referensi?
description: Menambah dan menghapus entri pada keenam daftar referensi.
order: 340
task: true
permissions:
  - transaction-type:create
keywords: [data referensi, tambah jenis, satuan, sumber dana, kode rekening]
related:
  - administration/reference-lookups
  - how-do-i/create-a-contract
---

## Untuk apa ini

Menambah, mengubah, dan menghapus entri pada daftar-daftar ringkas yang menjadi
pilihan aplikasi — satuan, jenis kontrak, sumber dana, jenis transaksi, dan kode
rekening. Lihat [Data referensi](/administration/reference-lookups) untuk
mengetahui masing-masing dipakai di mana.

Setiap daftar memiliki izinnya sendiri, mengikuti pola
`perm:contract-type:create`, `perm:funding-source:delete`, dan seterusnya.

## Langkah-langkah

1. Buka **Organisasi › Data referensi**.
2. Pilih tab daftar yang Anda inginkan.
3. Pilih **Baru**, lalu isi rinciannya.
4. Simpan.

## Isi setiap entri

| Daftar | Kolom |
|---|---|
| Satuan | Nama |
| Jenis kontrak | Nama |
| Sumber dana | Nama |
| Jenis transaksi | Kode (permanen, maksimal 12 karakter), Nama |
| Kode rekening | Kode (permanen, maksimal 12 karakter), Nama |

> [!IMPORTANT]
> Bila sebuah entri memiliki **kode**, kode itu bersifat permanen. Namanya dapat
> dikoreksi setelahnya; kodenya tidak.

## Membuat entri di tengah pekerjaan

Jika Anda sedang mencatat kontrak dan jenis kontrak yang dibutuhkan belum ada,
Anda tidak perlu meninggalkan formulir. **Buat jenis kontrak** tersedia di
samping kolomnya, dan hal yang sama berlaku untuk sumber dana serta penyedia.
Satuan dapat dibuat dari formulir definisi atribut.

## Menghapus sebuah entri

1. Temukan entrinya pada tabnya.
2. Pilih **Hapus** lalu konfirmasikan.

Penghapusan **ditolak jika masih ada catatan yang merujuk entri tersebut**. Itu
perlindungan, bukan penghalang: artinya sebuah kontrak atau transaksi masih
menunjuknya. Ubah dahulu catatan tersebut, atau biarkan entrinya.

## Kategori tidak dapat disunting

Tab Kategori hanya dapat dibaca. Kategori dikelola di luar aplikasi ini dan tab
tersebut menyatakannya.

## Tugas terkait

- [Data referensi](/administration/reference-lookups)
- [Bagaimana cara membuat kontrak?](/how-do-i/create-a-contract)
