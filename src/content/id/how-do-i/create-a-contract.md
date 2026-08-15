---
title: Bagaimana cara membuat kontrak?
description: Mencatat perjanjian pengadaan agar barang yang dibeli dapat didaftarkan.
order: 220
task: true
permissions:
  - contract:create
keywords: [kontrak, pengadaan, pembelian, perjanjian, kontrak baru, sumber dana]
related:
  - concepts/contract
  - how-do-i/add-contract-items
  - how-do-i/create-a-supplier
---

## Untuk apa ini

Mencatat sebuah perjanjian pengadaan. Kontrak adalah bagian utamanya; apa yang
sebenarnya dibeli dicatat setelahnya sebagai
[item kontrak](/concepts/contract-item).

## Sebelum memulai

Siapkan dokumennya. Anda memerlukan sekurang-kurangnya **nomor kontrak** dan
**tanggal kontrak**; selebihnya opsional dan dapat ditambahkan kemudian.

Jika Anda ingin mencatat penyedia, jenis kontrak, atau sumber dana yang belum
ada, semuanya dapat dibuat dari dalam formulir ini — tidak perlu keluar lalu
kembali.

## Langkah-langkah

1. Buka **Pengadaan › Kontrak**.
2. Pilih **Kontrak baru**.
3. Masukkan **Nomor kontrak**. Nomor ini harus unik.
4. Setel **Tanggal kontrak**.
5. Isi kolom lain yang relevan.
6. Pilih **Buat kontrak**.

![Formulir Kontrak baru](/screenshots/procurement/create-contract.gif)

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nomor kontrak | Ya | Maksimal 150 karakter. Harus unik |
| Tanggal kontrak | Ya | Tanggal perjanjian |
| Penyedia | Tidak | Pihak yang menjalankannya. Dapat dibuat dari sini |
| Jenis kontrak | Tidak | Dari daftar Anda sendiri. Dapat dibuat dari sini |
| Sumber dana | Tidak | Asal anggarannya. Dapat dibuat dari sini |
| Nilai kontrak | Tidak | Angka, dua desimal |
| Kode rekening | Tidak | Dari daftar Anda sendiri |
| Instansi | Tidak | Instansi penerima. Bawaannya instansi Anda |
| Dokumen penerimaan | Tidak | Rujukan berkas serah terima |
| Tanggal penerimaan | Tidak | Biarkan kosong sampai barang datang |
| Catatan | Tidak | Teks bebas |

Jenis kontrak, sumber dana, dan kode rekening adalah daftar yang dikelola
organisasi Anda — lihat [Data referensi](/administration/reference-lookups).

## Belum diterima

Membiarkan **Tanggal penerimaan** kosong menampilkan kontrak sebagai *Belum
diterima*. Ini catatan fakta, bukan sakelar: Anda tetap dapat menambahkan item
baris dan mendaftarkan aset terhadap kontrak tanpa tanggal penerimaan.

## Apa yang terjadi setelahnya

Kontrak dibuat dan Anda tiba di halamannya, dengan panel **Item baris** yang
kosong. Belum ada yang dibeli sampai Anda menambahkannya.

1. [Tambahkan item kontrak](/how-do-i/add-contract-items) — satu per baris
   pembelian.
2. [Daftarkan setiap baris sebagai aset](/how-do-i/register-an-asset-from-a-contract)
   ketika barangnya datang.

## Menyunting kemudian

Kontrak dapat disunting dengan bebas. Mengubah bagian utamanya tidak mengganggu
item baris maupun aset yang sudah tertelusur padanya — formulir penyuntingan
menyatakan hal itu.

## Tugas terkait

- [Kontrak](/concepts/contract)
- [Bagaimana cara menambahkan item kontrak?](/how-do-i/add-contract-items)
