---
title: Bagaimana cara menambahkan unit aset?
description: Menambahkan satu barang fisik ke aset yang sudah ada.
order: 20
task: true
permissions:
  - asset-unit:create
keywords: [unit, tambah unit, barang fisik, satuan, salinan]
related:
  - concepts/asset-vs-asset-unit
  - how-do-i/assign-a-location
---

## Untuk apa ini

Unit aset adalah satu barang fisik satuan milik sebuah aset. Dua belas laptop
identik adalah satu aset dan dua belas unit. Lihat
[Aset vs Unit Aset](/concepts/asset-vs-asset-unit) jika perbedaan itu masih baru
bagi Anda.

Di sini unit ditambahkan satu per satu. Jika barangnya berasal dari kontrak, Anda
dapat membuat aset beserta seluruh unitnya dalam satu langkah — lihat
[Mendaftarkan aset dari kontrak](/how-do-i/register-an-asset-from-a-contract).

## Sebelum memulai

Asetnya harus sudah ada. Tidak ada lagi yang diperlukan: unit dibuat dengan
informasi yang sangat sedikit, dan segala hal penting tentangnya — di mana
letaknya, bagaimana kondisinya — dicatat setelahnya sebagai riwayat.

## Langkah-langkah

1. Buka **Aset** lalu pilih asetnya.
2. Buka tab **Unit**.
3. Pilih **Tambah unit**.
4. Isi **Deskripsi** bila ingin membedakan unit ini dari saudaranya.
5. Jika asetnya memiliki kontrak, pilih **Rincian pengadaan** asal unit ini bila
   perlu.
6. Pilih **Buat**.

![Dialog Tambah unit](/screenshots/asset-units/add-unit.gif)

## Rujukan kolom

| Kolom | Wajib | Catatan |
|---|---|---|
| Deskripsi | Tidak | Teks bebas. Berguna untuk nomor seri atau penanda sementara sebelum atribut diisi |
| Rincian pengadaan | Tidak | Rincian kontrak aset ini yang menjadi asal unit tersebut. Hanya tampil bila asetnya memiliki kontrak dan Anda dapat melihat rincian kontrak |

> [!NOTE]
> **Rincian pengadaan** melekat pada unit, bukan pada aset. Sepuluh laptop dari
> satu baris kontrak berarti sepuluh unit yang menunjuk baris yang sama;
> penggantinya yang datang lewat kontrak lain menunjuk ke tempat lain, atau tidak
> menunjuk sama sekali.
>
> Hanya rincian dari kontrak aset itu sendiri yang ditawarkan, dan aplikasi
> menolak selain itu. Bila daftarnya tidak sesuai harapan, periksa dulu kolom
> Kontrak pada asetnya.
>
> Ini juga dapat diisi kemudian melalui formulir ubah pada unitnya.

## Apa yang terjadi setelahnya

Unit muncul pada tab Unit dengan:

- Status siklus hidup `state:REGISTERED`
- Tanpa kondisi tercatat
- Tanpa lokasi tercatat

`state:REGISTERED` berarti "sudah terdaftar, belum dioperasikan". Unit belum
dapat dipinjam dan belum muncul pada laporan lokasi sampai Anda mencatat kondisi
dan lokasi pertamanya.

> [!IMPORTANT]
> Unit yang baru dibuat belum selesai. Entri riwayat pertamanya — yang harus
> menetapkan kondisi sekaligus lokasi — itulah yang mengoperasikannya. Lihat
> [Bagaimana cara menetapkan lokasi?](/how-do-i/assign-a-location).

## Tugas terkait

- [Bagaimana cara menetapkan lokasi?](/how-do-i/assign-a-location)
- [Bagaimana cara membuat aset?](/how-do-i/create-an-asset)
