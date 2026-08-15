---
title: Mengenali navigasi
description: Bilah sisi, bilah atas, pencarian, dan alasan Anda mungkin tidak melihat semuanya.
order: 30
keywords: [navigasi, bilah sisi, menu, pencarian, remah roti, tata letak, bahasa]
related:
  - getting-started/what-this-application-does
  - concepts/asset-vs-asset-unit
---

Setiap layar dalam aplikasi menggunakan kerangka yang sama, sehingga begitu Anda
memahami satu layar, Anda memahami semuanya.

## Bilah sisi

Bilah sisi di sebelah kiri memuat enam kelompok:

| Kelompok | Isinya |
|---|---|
| Beranda | Ringkasan registri dalam lingkup organisasi Anda |
| Aset | Aset, Lokasi, Klasifikasi |
| Pengadaan | Penyedia, Kontrak |
| Operasional | Vendor, Peminjaman, Transaksi |
| Organisasi | Instansi, Bagian, Pengguna, Peran, Definisi atribut, Data referensi |
| Laporan & Audit | Laporan, Log audit |

> [!IMPORTANT]
> Anda hanya akan melihat kelompok dan menu yang diizinkan oleh peran Anda. Menu
> yang tidak dapat Anda gunakan **disembunyikan, bukan diredupkan**. Jika rekan
> kerja menyebut menu yang tidak Anda temukan, hampir pasti Anda belum memiliki
> izin untuknya.

## Bilah atas

- **Remah roti** menunjukkan posisi Anda dan memungkinkan naik kembali.
- **Cari aset** langsung membuka daftar aset yang tersaring sesuai ketikan Anda.
  Tekan `Ctrl` + `K` (atau `⌘` + `K`) untuk menuju ke sana dari mana saja.
- **Bahasa** mengganti antarmuka antara Inggris dan Bahasa Indonesia.
- **Keluar** mengakhiri sesi Anda.

## Bentuk sebuah layar

Hampir setiap layar adalah salah satu dari empat bentuk:

1. **Daftar** — penyaring di bagian atas, tabel di tengah, penomoran halaman di
   bawah, dan tombol *Baru* jika Anda diizinkan membuat.
2. **Halaman detail** — judul, lencana status, aksi utama, lalu tab untuk hal-hal
   yang termasuk dalam catatan tersebut.
3. **Formulir** — untuk membuat atau mengubah, dengan *Batal* dan *Simpan*.
4. **Dialog konfirmasi** — sebelum tindakan yang merusak atau sulit dibatalkan.

## Mengapa Anda mungkin tidak melihat semuanya

Dua hal terpisah menentukan apa yang dapat Anda jangkau.

**Izin.** Peran Anda membawa izin, dan setiap izin menyebut satu tindakan pada
satu jenis catatan — `perm:asset:read` untuk melihat aset, `perm:asset:create`
untuk menambah. Tanpa izin, tidak ada tombolnya.

**Lingkup organisasi.** Kecuali salah satu peran Anda bersifat menyeluruh
(*system-wide*), Anda hanya melihat catatan milik instansi Anda sendiri. Catatan
milik instansi lain tidak muncul di daftar Anda, dan membukanya secara langsung
akan dilaporkan sebagai tidak ditemukan.

> [!TIP]
> Jika sesuatu yang Anda harapkan tidak ada, pertanyaan yang tepat kepada
> administrator adalah "peran apa yang memberi saya akses ini?" — bukan "apakah
> catatannya masih ada?".

## Bahasa

Aplikasi ini sepenuhnya dwibahasa. Mengganti bahasa mengubah label, tanggal, dan
pesan, tetapi tidak pernah mengubah data yang Anda masukkan, dan tidak pernah
mengubah pengenal seperti kode izin atau kode klasifikasi.
