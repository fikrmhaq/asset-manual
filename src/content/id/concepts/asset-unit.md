---
title: Unit Aset
description: Satu barang fisik satuan — inilah yang benar-benar memiliki lokasi dan kondisi.
order: 30
keywords: [unit aset, unit, barang fisik, satuan, nomor seri, salinan]
related:
  - concepts/asset-vs-asset-unit
  - concepts/history
  - how-do-i/record-a-change-to-a-unit
---

**Unit aset** adalah satu barang fisik satuan. Jika Anda dapat menunjuknya,
mendatanginya, atau membawanya keluar gedung, itu adalah unit.

Setiap unit termasuk dalam tepat satu [aset](/concepts/asset), dan satu aset
dapat memiliki unit sebanyak apa pun.

## Mengapa unit dicatat terpisah

Pertanggungjawaban menyangkut barang satuan. Anda tidak bisa meminjamkan "sebuah
model laptop", menaruhnya di Ruang 204, atau mencatat bahwa ia jatuh dari tangga.
Setiap pernyataan itu berlaku pada satu mesin tertentu.

Karena itu, unitlah yang membawa:

- **[Lokasi](/concepts/location)** — tempatnya secara fisik
- **[Kondisi](/concepts/condition)** — keadaannya
- **[Status siklus hidup](/concepts/lifecycle-state)** — posisinya dalam masa pakai
- **[Riwayat](/concepts/history)** — perubahan ketiganya dari waktu ke waktu
- **Peminjaman** — setiap kali ia dipinjamkan
- **Transaksi** — setiap kejadian yang tercatat atasnya
- **Bagian** — bagian organisasi yang bertanggung jawab
- **Nilai atributnya sendiri** — nomor seri, nomor inventaris, apa pun yang berbeda antar barang

## Yang diwarisi sebuah unit

Unit tidak memiliki klasifikasi, vendor, atau instansi sendiri. Ketiganya berasal
dari asetnya, dan sama untuk setiap unit di bawahnya.

## Awal hidup sebuah unit

Unit baru dimulai pada `state:REGISTERED` **tanpa kondisi dan tanpa lokasi
tercatat**. Itu bukan catatan yang belum lengkap — artinya "sudah terdaftar,
belum dioperasikan".

Unit menjadi dapat digunakan setelah Anda mencatat perubahan pertamanya, yang
harus menetapkan kondisi sekaligus lokasi. Lihat
[Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit).

## Menemukan sebuah unit

Unit dijangkau melalui asetnya: buka asetnya, lalu tab **Unit**.

> [!LIMITATION]
> Tidak ada layar yang menampilkan seluruh unit dalam organisasi, dan tidak ada
> cara mencari unit secara langsung melalui nomor seri atau nomor inventaris.
> Setiap tempat yang meminta Anda memilih unit — peminjaman, transaksi — dimulai
> dari asetnya. Memberi setiap unit **deskripsi** pembeda saat membuatnya akan
> sangat memudahkan membedakannya nanti.

## Membedakan unit

Unit dari aset yang sama tampak serupa dalam daftar. Tiga hal membedakannya:

1. **Deskripsi** yang Anda berikan pada unit itu.
2. **Lokasi** dan **kondisi** terkininya.
3. **Nilai atribut** tingkat unit, seperti nomor seri, jika atribut telah
   dikonfigurasi untuk klasifikasi tersebut.

## Artikel terkait

- [Aset vs Unit Aset](/concepts/asset-vs-asset-unit)
- [Riwayat](/concepts/history)
- [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit)
