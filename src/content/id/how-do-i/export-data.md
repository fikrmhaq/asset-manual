---
title: Bagaimana cara mengekspor data?
description: Mengambil CSV dari sebuah laporan — dan memahami persis apa yang masuk ke dalamnya.
order: 360
task: true
permissions:
  - report:read
keywords: [ekspor, csv, unduh, lembar kerja, excel, keluarkan data]
related:
  - how-do-i/run-a-report
  - reports/the-reports
---

## Untuk apa ini

Mengunduh laporan yang sedang Anda lihat sebagai berkas, yang dapat dibuka di
aplikasi lembar kerja mana pun.

Sebagian besar laporan mengekspor **CSV berisi apa yang tampil di layar**. Satu
laporan — **Inventaris (per unit)** — mengekspor **lembar kerja berisi seluruh
baris yang sesuai dengan penyaring Anda**, beserta foto. Tombolnya menyebutkan
mana yang Anda peroleh: *Ekspor CSV* atau *Ekspor lembar kerja*.

Ekspor tersedia **hanya pada laporan**. Daftar aset, daftar peminjaman, dan layar
daftar lainnya tidak memiliki ekspor.

## Langkah-langkah

1. Buka sebuah laporan lalu setel penyaringnya. Lihat
   [Bagaimana cara menjalankan laporan?](/how-do-i/run-a-report).
2. Untuk laporan berhalaman, buka halaman yang barisnya Anda inginkan.
3. Pilih **Ekspor CSV**.

## Isi berkasnya

> [!IMPORTANT]
> Ekspor memuat **persis baris yang tampil di layar** — kolom yang sama,
> penyaring yang sama, dan untuk laporan berhalaman **hanya halaman yang sedang
> tampil**.
>
> Ia bukan ekspor atas seluruh hasil yang dapat dihasilkan laporan. Keterangan di
> samping tombol menyebutkan mana yang Anda peroleh.

Hal ini sering mengecoh. Inventaris berisi 400 aset yang ditampilkan 20 per
halaman akan mengekspor 20 baris, bukan 400.

## Mendapatkan ekspor yang lengkap

Tiga keadaan, tergantung laporannya:

**Inventaris (per unit)** adalah pengecualian, sekaligus yang paling sederhana.
Tombolnya bertuliskan **Ekspor lembar kerja**, dan hasilnya memuat **seluruh baris
yang sesuai dengan penyaring Anda** — berkasnya disusun oleh server, sehingga
halaman tidak lagi menjadi soal. Hasilnya juga berupa lembar kerja, bukan CSV,
dengan tata letak seperti daftar inventaris yang biasa disusun instansi secara
manual, lengkap dengan foto. Jika yang Anda butuhkan adalah inventaris lengkap
yang siap dicetak, gunakan laporan ini.

**Laporan berkelompok** — Status, Menurut klasifikasi, Menurut organisasi,
Menurut lokasi, Menurut kondisi — tidak berhalaman. Ekspornya benar-benar
lengkap, karena semuanya sudah tampil di layar.

**Laporan baris lainnya** — Inventaris, Peminjaman, Ketertelusuran pengadaan —
berhalaman. Untuk memperoleh semuanya:

- Persempit penyaringnya sampai hasilnya muat dalam satu halaman, lalu ekspor
  setiap potongan secara terpisah — per instansi, per klasifikasi, per rentang
  tanggal; atau
- Ekspor halaman demi halaman lalu gabungkan berkasnya di lembar kerja Anda,
  jangan lupa membuang baris judul yang berulang.

> [!TIP]
> Menyaring menjadi beberapa potongan biasanya lebih ringan daripada berpindah
> halaman, dan potongan itu sering kali memang yang Anda inginkan — satu berkas
> per instansi, atau per klasifikasi.

## Isi kolomnya

Ekspor membawa kolom yang sama dengan tabelnya, sehingga CSV tidak akan pernah
berbeda dari apa yang Anda lihat. Bila sebuah sel tabel menampilkan nama di atas
kode, ekspor membawa yang lebih berguna di antara keduanya.

## Mengekspor daftar aset

Tidak ada aksi tunggal "ekspor semuanya". Yang paling mendekati adalah laporan
**Inventaris**, disaring dan diekspor per potongan seperti di atas.

## Tugas terkait

- [Bagaimana cara menjalankan laporan?](/how-do-i/run-a-report)
- [Daftar laporan](/reports/the-reports)
