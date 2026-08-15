---
title: Mencari dan menyaring
description: Kotak pencarian di bilah atas, penyaring pada setiap daftar, dan cara menemukan satu barang fisik.
order: 50
keywords: [cari, temukan, saring, filter, lokasi, tidak ketemu, hilang]
related:
  - how-do-i/search-for-an-asset
  - concepts/asset-vs-asset-unit
---

Ada dua cara menemukan sesuatu: kotak pencarian di bilah atas, dan penyaring pada
setiap layar daftar. Keduanya bertugas berbeda.

## Kotak pencarian di bilah atas

Kotak di bagian atas setiap layar mencari **aset berdasarkan nama dan
deskripsi**. Ia adalah jalan pintas menuju daftar aset, bukan pencarian ke
seluruh aplikasi.

Tekan `Ctrl` + `K` (atau `⌘` + `K` di Mac) untuk menuju ke sana dari mana saja,
ketik, lalu tekan Enter. Anda akan tiba di daftar aset yang sudah tersaring.

Yang **tidak** dicarinya:

- Unit aset, peminjaman, kontrak, penyedia, lokasi, atau pengguna
- Nilai atribut seperti nomor seri
- Apa pun di dalam log audit

Untuk itu semua, buka layar terkait dan gunakan penyaringnya sendiri.

> [!NOTE]
> Kotak pencarian hanya muncul jika Anda dapat melihat aset
> (`perm:asset:read`). Jika tidak ada di bilah atas Anda, itulah sebabnya.

## Penyaring pada sebuah daftar

Setiap layar daftar memiliki penyaring yang sesuai dengan apa yang benar-benar
dapat dipersempit. Penyaring disimpan pada alamat halaman, jadi Anda dapat
menandai tampilan tersaring atau mengirimkannya kepada rekan kerja, dan tombol
Kembali peramban akan mengembalikan pilihan sebelumnya.

Daftar aset menyediakan tujuh penyaring:

| Penyaring | Mempersempit berdasarkan |
|---|---|
| Pencarian | Nama atau deskripsi aset |
| Klasifikasi | Klasifikasi tempat aset didaftarkan |
| Lokasi | Tempat unit-unitnya berada saat ini |
| Vendor | Pabrikan atau merek |
| Kontrak | Kontrak pengadaan asalnya |
| Kondisi | Kondisi unit yang tercatat |
| Status | Catatan aset aktif atau nonaktif |

Penyaring Vendor dan Kontrak hanya muncul jika Anda boleh melihat vendor dan
kontrak.

> [!NOTE]
> Penyaring Kondisi menampilkan nilai tersimpan — `GOOD`, `FAIR`, `POOR`,
> `DAMAGED`, `UNSERVICEABLE` — bukan label yang lebih ramah seperti di tempat
> lain. Artinya sama; lihat [Kondisi](/concepts/condition).

## Menemukan satu barang fisik

Inilah pertanyaan yang paling sering membuat orang tersendat, dan jawabannya
mengikuti [Aset vs Unit Aset](/concepts/asset-vs-asset-unit): barang satuan
dijangkau **melalui asetnya**.

1. Temukan asetnya — "Dell Latitude 5420".
2. Buka aset itu, lalu buka tab **Unit**.
3. Pilih unitnya, gunakan deskripsi, lokasi, atau kondisi untuk membedakannya.

> [!LIMITATION]
> Tidak ada layar yang menampilkan seluruh unit aset dalam organisasi, dan tidak
> ada cara mencari unit secara langsung melalui nomor seri atau nomor
> inventaris. Di mana pun aplikasi meminta Anda memilih unit — menambahkan ke
> peminjaman atau transaksi — Anda menemukannya dengan memilih asetnya lebih
> dahulu. Mencatat **deskripsi** pembeda pada setiap unit saat membuatnya akan
> sangat memudahkan hal ini nanti.

## Menemukan letak sesuatu

Untuk menjawab "apa saja isi Ruang 204?", mulailah dari lokasi, bukan dari aset:
buka **Lokasi**, cari ruangannya, lalu gunakan tab **Unit**. Lihat
[Melihat isi sebuah lokasi](/locations/units-in-a-location).

## Artikel terkait

- [Aset vs Unit Aset](/concepts/asset-vs-asset-unit)
