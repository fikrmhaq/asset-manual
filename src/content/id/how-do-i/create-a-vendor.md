---
title: Bagaimana cara membuat vendor?
description: Menambahkan pabrikan atau merek yang dapat diatribusikan pada aset.
order: 215
task: true
permissions:
  - vendor:create
keywords: [vendor, pabrikan, merek, produsen, tambah vendor]
related:
  - concepts/vendor-vs-supplier
  - how-do-i/create-an-asset
---

## Untuk apa ini

Menambahkan **vendor** — pabrikan atau merek di balik sebuah
[aset](/concepts/asset). Dell, Toyota, atau bengkel yang membuat meja kerja Anda.

> [!IMPORTANT]
> Vendor bukan [penyedia](/concepts/vendor-vs-supplier). Vendor yang membuatnya;
> penyedia yang menjualnya kepada Anda.

Vendor berada di bawah **Operasional** pada bilah sisi, bukan Pengadaan, karena
vendor menjelaskan aset, bukan pembelian.

## Langkah-langkah

1. Buka **Operasional › Vendor**.
2. Pilih **Vendor baru**.
3. Masukkan **Nama**.
4. Tambahkan **Informasi kontak** dan **Alamat** bila berguna.
5. Pilih **Buat**.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nama | Ya | Maksimal 255 karakter |
| Informasi kontak | Tidak | Teks bebas |
| Alamat | Tidak | Teks bebas |

## Apa yang terjadi setelahnya

Vendor menjadi dapat dipilih pada formulir aset, baik saat membuat aset secara
langsung maupun saat mendaftarkannya dari baris kontrak.

Halamannya sendiri mencantumkan aset yang diatribusikan kepadanya, dalam lingkup
organisasi Anda — berguna untuk "berapa banyak peralatan Dell yang kita miliki?".

## Mengatribusikan aset ke vendor

Vendor selalu opsional pada setiap aset. Isilah bila pabrikannya penting untuk
garansi, servis, atau pelaporan; biarkan pada *Tanpa vendor* bila tidak.

Kolom vendor hanya muncul pada formulir aset jika Anda memiliki izin melihat
vendor.

## Menonaktifkan

Vendor dinonaktifkan, bukan dihapus. Aset yang sudah diatribusikan kepadanya
tetap mempertahankan atribusinya; vendor berhenti ditawarkan pada aset baru.
Mengaktifkan kembali membuatnya dapat dipilih lagi.

## Tugas terkait

- [Vendor vs Penyedia](/concepts/vendor-vs-supplier)
- [Bagaimana cara membuat aset?](/how-do-i/create-an-asset)
