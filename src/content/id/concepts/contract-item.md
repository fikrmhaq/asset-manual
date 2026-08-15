---
title: Item kontrak
description: Satu baris pembelian pada kontrak — sekaligus pintu masuk ke registri aset.
order: 140
keywords: [item kontrak, baris, pembelian, kuantitas, dipesan, pengiriman sebagian, tambah aset]
related:
  - concepts/contract
  - how-do-i/add-contract-items
  - how-do-i/register-an-asset-from-a-contract
---

**Item kontrak** adalah satu baris pembelian pada sebuah
[kontrak](/concepts/contract): apa yang dibeli, berapa banyak, dan dengan harga
berapa.

Ia juga merupakan pintu masuk ke registri. Mendaftarkan satu baris akan membuat
[aset](/concepts/asset) beserta [unit-unitnya](/concepts/asset-unit) dalam satu
langkah, dengan kaitan ke kontrak yang sudah terbentuk.

## Isi sebuah item baris

| Kolom | Wajib | Catatan |
|---|---|---|
| Nama item | Ya | Barang yang dibeli. Maksimal 150 karakter |
| Spesifikasi | Tidak | Rincian yang membedakannya |
| Kuantitas | Tidak | Bilangan bulat lebih besar dari nol |
| Satuan | Tidak | Yang dihitung oleh kuantitas — buah, dus, set |
| Harga satuan | Tidak | Angka, tidak negatif |

Total baris dihitung dari kuantitas dan harga satuan.

## Dipesan bukan berarti diterima

**Kuantitas** pada item baris adalah jumlah yang *dipesan*. Itu fakta mengenai
dokumen, dan aplikasi tidak pernah mengubahnya.

Yang benar-benar datang dicatat terpisah, sebagai unit aset. Ketika Anda
mendaftarkan sebuah baris, jumlah unit terisi otomatis dari kuantitas yang
dipesan — dan Anda dapat menguranginya.

> [!IMPORTANT]
> Mendaftarkan unit lebih sedikit daripada yang dipesan adalah hal biasa.
> Pengiriman sebagian memang diperkirakan, bukan kesalahan. Daftarkan yang sudah
> datang; daftarkan sisanya pada item baris yang sama ketika barangnya tiba.

Karena itulah panel item baris menampilkan dua angka: kuantitas yang dipesan, dan
unit yang benar-benar tercatat di registri. Selisihnya adalah pengiriman yang
masih tertunggak.

## Yang tidak dimiliki item baris

Sebuah [klasifikasi](/concepts/classification). Dokumen kontrak tidak memuatnya,
jadi aplikasi tidak mengarangnya — ia menanyakannya kepada Anda pada saat Anda
mendaftarkan baris tersebut sebagai aset. Itulah satu-satunya hal yang harus Anda
sediakan sendiri.

## Menyunting dan menghapus

Item baris dapat disunting dan dihapus selama Anda merapikan kontrak. Menghapus
sebuah baris tidak menghapus aset yang sudah didaftarkan darinya.

## Artikel terkait

- [Kontrak](/concepts/contract)
- [Bagaimana cara menambahkan item kontrak?](/how-do-i/add-contract-items)
- [Bagaimana cara mendaftarkan aset dari kontrak?](/how-do-i/register-an-asset-from-a-contract)
