---
title: Istilah dasar
description: Glosarium satu halaman berisi kata-kata yang dipakai aplikasi, dengan tautan ke penjelasan lengkap.
order: 70
keywords: [glosarium, istilah, arti, definisi, kosakata]
related:
  - concepts/asset-vs-asset-unit
  - reference/glossary
---

Kosakata secukupnya untuk memakai aplikasi pada hari pertama. Setiap istilah
tertaut ke penjelasan yang lebih lengkap.

## Dua yang paling penting

**[Aset](/concepts/asset)** — catatan induk untuk satu *jenis* barang. "Laptop
Dell Latitude 5420" adalah satu aset, berapa pun jumlah yang Anda miliki.

**[Unit Aset](/concepts/asset-unit)** — satu barang fisik satuan. Dua belas
laptop model itu adalah dua belas unit aset di bawah satu aset. Unit inilah yang
memiliki lokasi, kondisi, dan riwayat.

> [!IMPORTANT]
> Jika Anda hanya membaca satu artikel dalam panduan ini, bacalah
> [Aset vs Unit Aset](/concepts/asset-vs-asset-unit). Sebagian besar kebingungan
> di aplikasi ini berasal dari tertukarnya kedua hal tersebut.

## Menjelaskan sebuah aset

**[Klasifikasi](/concepts/classification)** — daftar referensi pemerintah yang
baku, menyatakan jenis suatu barang. Setiap aset dan setiap lokasi harus
diklasifikasikan, pada tingkat paling rinci yang tersedia.

**[Kategori](/concepts/category)** — pengelompokan yang lebih luas di atas
klasifikasi. Hanya informasi rujukan; tidak dapat diubah di sini.

**[Atribut](/concepts/attributes)** — kolom tambahan yang dikonfigurasi untuk
suatu klasifikasi. Sebagian menjelaskan aset secara keseluruhan, sebagian
menjelaskan satu unit.

**[Vendor](/concepts/vendor-vs-supplier)** — pabrikan atau merek.

## Tempat barang berada

**[Lokasi](/concepts/location)** — tempat sebuah unit dapat berada: situs,
gedung, lantai, ruangan. Lokasi bersarang satu sama lain.

**[Denah](/concepts/floor-plan)** — gambar sebuah lokasi dengan ruangan-ruangan
yang digambar di atasnya sebagai bentuk, masing-masing tertaut ke lokasi yang
diwakilinya.

## Keadaan sebuah unit

**[Status siklus hidup](/concepts/lifecycle-state)** — posisi unit dalam masa
pakainya: `state:REGISTERED`, `state:lifecycle/ACTIVE`, `state:IN_STORAGE`,
`state:BORROWED`, `state:UNDER_MAINTENANCE`, `state:DISPOSED`,
`state:DEACTIVATED`.

**[Kondisi](/concepts/condition)** — keadaan fisik sebuah unit: `state:GOOD`,
`state:FAIR`, `state:POOR`, `state:DAMAGED`, `state:UNSERVICEABLE`.

**[Riwayat](/concepts/history)** — lini masa kondisi, lokasi, dan status siklus
hidup sebuah unit.

## Asal-usul barang

**[Penyedia](/concepts/vendor-vs-supplier)** — pihak yang menandatangani kontrak
dengan Anda. Berbeda dari vendor.

**[Kontrak](/concepts/contract)** — catatan pengadaan.

**[Item kontrak](/concepts/contract-item)** — satu baris pembelian pada sebuah
kontrak. Mendaftarkan satu baris memasukkan aset dan unitnya ke registri.

## Hal-hal yang terjadi

**[Peminjaman](/concepts/borrowing)** — peminjaman satu unit atau lebih kepada
seseorang, dengan tanggal kembali yang diharapkan.

**[Transaksi](/concepts/transaction)** — catatan permanen atas kejadian yang
menyangkut unit. Tidak dapat diubah setelah disimpan.

## Kepemilikan dan tanggung jawab

**[Instansi](/concepts/institutions-and-departments)** — unit organisasi yang
memiliki catatan. Sekaligus batas dari apa yang dapat Anda lihat.

**Bagian** — daftar datar berskala organisasi yang menyatakan bagian mana yang
bertanggung jawab atas sebuah unit.

**[Peran](/concepts/roles-and-permissions)** — sekumpulan izin bernama. Anda
memegang peran, bukan izin.

## Keadaan catatan

**[Aktif / Nonaktif](/concepts/active-and-inactive)** — catatan dinonaktifkan,
bukan dihapus. Catatan nonaktif menyimpan riwayatnya dan berhenti ditawarkan
untuk pekerjaan baru.

**[Log audit](/concepts/audit-log)** — catatan perubahan yang hanya dapat dibaca
atas catatan-catatan penting. Tidak pernah dapat diubah.

## Artikel terkait

- [Aset vs Unit Aset](/concepts/asset-vs-asset-unit)
- [Glosarium](/reference/glossary)
