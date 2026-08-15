---
title: Bagaimana cara mengekspor catatan aset?
description: Mengeluarkan daftar aset Anda dari aplikasi.
order: 80
task: true
permissions:
  - report:read
keywords: [ekspor aset, daftar aset, csv, unduh, lembar kerja, cadangan]
related:
  - how-do-i/export-data
  - reports/the-eight-reports
---

## Jawaban singkatnya

Gunakan laporan **Inventaris**, bukan daftar aset.

> [!NOTE]
> Daftar aset memiliki penyaring, pengurutan, dan penomoran halaman, tetapi
> **tidak memiliki ekspor**. Ekspor hanya tersedia pada laporan.

## Langkah-langkah

1. Buka **Laporan & Audit › Laporan**.
2. Pilih **Inventaris**.
3. Setel penyaringnya — teks pencarian, klasifikasi, instansi, aktif atau
   nonaktif.
4. Pilih **Ekspor CSV**.

Berkasnya memuat satu baris per aset, lengkap dengan klasifikasi, instansi,
jumlah unit yang terdaftar terhadapnya, dan statusnya.

## Mendapatkan semuanya

Inventaris adalah laporan berhalaman, dan ekspor hanya menulis **halaman yang
sedang tampil**. Untuk daftar lengkap, saring menjadi beberapa potongan — satu
klasifikasi setiap kali, atau satu instansi setiap kali — lalu ekspor
masing-masing. Lihat
[Bagaimana cara mengekspor data?](/how-do-i/export-data).

## Mengekspor unit, bukan aset

Laporan Inventaris menghitung unit per aset tetapi tidak merincinya satu per
satu. Untuk informasi tingkat unit, pilih laporan yang mengelompokkan sesuai
kebutuhan Anda:

| Yang Anda inginkan | Laporan |
|---|---|
| Unit menurut tempatnya | Menurut lokasi |
| Unit menurut kondisi | Menurut kondisi |
| Unit menurut instansi dan bagian | Menurut organisasi |
| Unit menurut status siklus hidup | Status |

Keempatnya adalah laporan berkelompok, sehingga ekspornya lengkap, bukan
berhalaman.

> [!LIMITATION]
> Tidak ada ekspor yang merinci setiap unit aset beserta seluruh detailnya.
> Laporan di atas memberikan hitungan yang dikelompokkan dengan berbagai cara;
> daftar per unit lengkap dengan nomor seri dan lokasi dalam satu berkas belum
> dapat dihasilkan aplikasi ini.

## Tugas terkait

- [Bagaimana cara mengekspor data?](/how-do-i/export-data)
- [Delapan laporan](/reports/the-eight-reports)
