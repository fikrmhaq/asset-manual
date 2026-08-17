---
title: Bagaimana cara melihat unit aset?
description: Membuka satu barang fisik dan membaca kelima tabnya.
order: 90
task: true
permissions:
  - asset-unit:read
keywords: [lihat unit, buka unit, detail unit, barang satuan, periksa]
related:
  - how-do-i/view-an-asset
  - concepts/asset-unit
  - how-do-i/view-unit-history
---

## Langkah-langkah

1. Buka **Aset** lalu pilih aset pemilik barangnya.
2. Buka tab **Unit**.
3. Pilih unitnya.

Unit selalu dijangkau melalui asetnya — tidak ada daftar seluruh unit. Gunakan
kolom deskripsi, lokasi, dan kondisi untuk membedakan saudara-saudaranya.

## Isi kelima tab

### Ikhtisar

Keadaan terkini barang fisik ini: status siklus hidup, kondisi, lokasi terkini,
bagian penanggung jawab, deskripsi, dan **rincian pengadaan** asalnya — disebut
dengan namanya beserta tautan ke kontraknya, bukan sekadar kode acuan. Unit yang
tidak tertaut ke rincian mana pun menyatakannya secara tegas.

Lokasi ditampilkan sebagai **jejak lengkap** — situs, gedung, lantai, ruangan —
bukan hanya nama ruangannya, sehingga Anda dapat melihat posisinya. Di bawahnya,
jika ada lokasi pada rantai itu yang memiliki [denah](/concepts/floor-plan), Anda
akan melihat deretan tautan denah yang menuntun ke dalam.

> [!NOTE]
> Aksi **Ubah** pada tab ini mengubah **Deskripsi** dan, bila asetnya memiliki
> kontrak, **Rincian pengadaan**. Kondisi, lokasi, dan status siklus hidup adalah
> fakta historis dan diubah melalui tab Riwayat. Dialognya menyatakan hal itu.
>
> Hanya rincian dari kontrak aset itu sendiri yang ditawarkan — sebuah unit tidak
> boleh mengaku datang lewat kontrak yang bukan dasar pembelian asetnya.
>
> Bagian ditampilkan di sini tetapi saat ini tidak dapat ditetapkan dari layar
> ini.

### Nilai atribut

Kolom tambahan yang dikonfigurasi untuk klasifikasi ini pada tingkat **unit** —
nomor seri, nomor inventaris, dan apa pun yang berbeda antar barang identik. Jika
tidak ada yang dikonfigurasi, tab tersebut menyatakannya.

### Riwayat

Lini masa: kondisi, lokasi, dan status siklus hidup dari waktu ke waktu, terbaru
di atas, masing-masing dengan tanggal dan deskripsi yang ditulis saat itu. Di
sini pula terdapat **Catat perubahan**. Lihat
[Bagaimana cara melihat riwayat unit?](/how-do-i/view-unit-history).

### Peminjaman

Setiap peminjaman yang pernah melibatkan unit ini, lengkap dengan peminjam,
tanggal, dan status. Hanya tampil jika Anda dapat melihat peminjaman.

### Transaksi

Setiap transaksi yang tercatat atas unit ini, lengkap dengan tanggal, jenis, dan
deskripsi. Hanya tampil jika Anda dapat melihat transaksi.

## Tugas terkait

- [Unit Aset](/concepts/asset-unit)
- [Bagaimana cara melihat riwayat unit?](/how-do-i/view-unit-history)
- [Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit)
