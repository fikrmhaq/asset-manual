---
title: Klasifikasi
description: Hierarki referensi baku tempat setiap aset dan lokasi digolongkan.
order: 40
keywords: [klasifikasi, kode, hierarki, paling rinci, pemilih, golongan]
related:
  - concepts/category
  - concepts/attributes
  - how-do-i/create-an-asset
---

**Klasifikasi** menyatakan jenis suatu barang. Klasifikasi berasal dari hierarki
referensi pemerintah yang dibawa aplikasi — sekitar empat belas setengah ribu
entri, tersusun dari pengelompokan luas hingga jenis barang yang sangat spesifik.

Setiap [aset](/concepts/asset) dan setiap [lokasi](/concepts/location) harus
diklasifikasikan.

## Hanya dapat dibaca, memang disengaja

Anda tidak dapat menambah, mengubah, atau menghapus klasifikasi. Ini adalah data
referensi eksternal yang dikelola di luar aplikasi, dan justru itulah gunanya:
maknanya sama di mana pun. Anda dapat menelusuri dan mencarinya melalui
**Klasifikasi** di bilah sisi.

Setiap entri memiliki kode dua belas karakter dan sebuah nama. Kode itulah yang
membuat sebuah entri tidak ambigu, dan ia ditampilkan bersama nama di sebagian
besar tempat.

## Hanya tingkat paling rinci yang dapat dipilih

Hal inilah yang paling sering membuat orang tersendat.

Saat memilih klasifikasi, pemilih hanya mengizinkan Anda memilih entri yang
**tidak memiliki turunan** — tingkat terdalam pada cabang itu. Anda dapat
menelusuri tingkat yang lebih luas untuk mencapainya, tetapi tidak dapat
menggolongkan aset pada pengelompokan yang luas.

> [!IMPORTANT]
> Jika pemilih tidak mengizinkan Anda memilih entri yang sedang Anda lihat,
> berarti entri itu masih punya turunan. Teruslah menurun sampai menemukan entri
> yang tidak punya.

Alasannya, segala hal yang bergantung pada klasifikasi — [atribut](/concepts/attributes)
mana yang berlaku, bagaimana laporan mengelompokkan — membutuhkan satu jawaban
yang tepat. Klasifikasi setengah jadi membuat pertanyaan itu tidak terjawab.

## Menggunakan pemilih

Pemilih klasifikasi muncul di mana pun klasifikasi dibutuhkan. Ia menawarkan dua
cara kerja:

- **Cari** berdasarkan nama atau kode, jika Anda tahu kira-kira yang dicari.
- **Telusuri** satu tingkat demi satu tingkat, jika belum tahu.

Jejak di bagian atas menunjukkan posisi Anda, dan Anda dapat menaikinya kembali.

## Yang ditentukan oleh klasifikasi

| Menentukan | Caranya |
|---|---|
| Atribut mana yang berlaku | Definisi atribut dikonfigurasi per klasifikasi |
| Cara laporan mengelompokkan | Laporan **Menurut klasifikasi** menghitung aset di bawah masing-masing |
| Identitas catatan | Nama dan kodenya muncul pada aset dan dalam ekspor |

## Mengubah klasifikasi sebuah aset

Anda dapat mengubahnya dengan menyunting aset. Perlu diingat, hal itu juga
mengubah **atribut mana yang berlaku** — definisi atribut melekat pada
klasifikasi, sehingga klasifikasi berbeda berarti kumpulan kolom tambahan yang
berbeda pula.

## Mengklasifikasikan lokasi

Lokasi juga diklasifikasikan, dari hierarki yang sama dan dengan aturan tingkat
paling rinci yang sama. Klasifikasi sebuah lokasi ditetapkan saat pembuatan dan
setelahnya ditampilkan sebagai detail tetap.

## Artikel terkait

- [Kategori](/concepts/category)
- [Atribut](/concepts/attributes)
- [Bagaimana cara membuat aset?](/how-do-i/create-an-asset)
