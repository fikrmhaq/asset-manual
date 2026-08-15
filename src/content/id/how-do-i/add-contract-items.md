---
title: Bagaimana cara menambahkan item kontrak?
description: Mencatat apa yang benar-benar dibeli dalam sebuah kontrak, baris demi baris.
order: 230
task: true
permissions:
  - contract-item:create
keywords: [item kontrak, baris, pembelian, kuantitas, harga, tambah baris, barang]
related:
  - concepts/contract-item
  - how-do-i/register-an-asset-from-a-contract
  - how-do-i/create-a-contract
---

## Untuk apa ini

Mencatat satu baris pembelian pada sebuah [kontrak](/concepts/contract) — apa
barangnya, berapa banyak, dan dengan harga berapa.

Item barislah yang nantinya Anda ubah menjadi aset, sehingga cara Anda memecah
barisnya menentukan bentuk registri Anda. Satu baris per *jenis* barang biasanya
tepat: "20 laptop" adalah satu baris, bukan dua puluh.

## Sebelum memulai

Kontraknya harus sudah ada. Lihat
[Bagaimana cara membuat kontrak?](/how-do-i/create-a-contract).

## Langkah-langkah

1. Buka **Pengadaan › Kontrak** lalu pilih kontraknya.
2. Pada panel **Item baris**, pilih **Tambah item baris**.
3. Masukkan **Nama item**.
4. Isi **Spesifikasi**, **Kuantitas**, **Satuan**, dan **Harga satuan** sesuai
   dokumennya.
5. Pilih **Tambah item**.

Ulangi untuk setiap baris pada kontrak.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nama item | Ya | Barang yang dibeli. Maksimal 150 karakter |
| Spesifikasi | Tidak | Rincian yang membedakannya — model, ukuran, mutu |
| Kuantitas | Tidak | Jumlah yang dipesan. Bilangan bulat lebih besar dari nol |
| Satuan | Tidak | Yang dihitung oleh kuantitas — buah, dus, set |
| Harga satuan | Tidak | Angka, tidak negatif |

Total baris dihitung dari kuantitas dan harga satuan.

## Kuantitas adalah jumlah yang dipesan

Kuantitas pada item baris adalah fakta mengenai dokumen dan tidak pernah berubah.
Yang benar-benar datang dicatat terpisah, sebagai
[unit aset](/concepts/asset-unit), ketika Anda mendaftarkan barisnya.

Karena itulah panel baris tersebut menampilkan dua angka — dipesan, dan
terdaftar — dan selisihnya adalah pengiriman yang masih tertunggak.

## Apa yang terjadi setelahnya

Setiap item baris memperoleh aksi **Tambah aset**, yang mendaftarkannya ke
registri sebagai aset beserta unit-unitnya. Lihat
[Bagaimana cara mendaftarkan aset dari kontrak?](/how-do-i/register-an-asset-from-a-contract).

Sampai saat itu, baris tersebut mencatat pembelian yang belum menghasilkan
sesuatu yang dapat dilacak.

## Menyunting dan menghapus

Item baris dapat disunting dan dihapus selama Anda merapikan kontrak. Menghapus
sebuah baris **tidak** menghapus aset yang sudah didaftarkan darinya — aset itu
tetap berada di registri dengan kaitan pengadaannya utuh.

## Tugas terkait

- [Item kontrak](/concepts/contract-item)
- [Bagaimana cara mendaftarkan aset dari kontrak?](/how-do-i/register-an-asset-from-a-contract)
