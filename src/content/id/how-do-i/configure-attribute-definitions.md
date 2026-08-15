---
title: Bagaimana cara mengatur definisi atribut?
description: Menambahkan kolom tambahan pada sebuah klasifikasi, pada tingkat aset atau unit.
order: 330
task: true
permissions:
  - attribute-definition:create
keywords: [atribut, kolom tambahan, nomor seri, definisi, konfigurasi, kustom]
related:
  - concepts/attributes
  - concepts/classification
---

## Untuk apa ini

Menambahkan kolom tambahan pada setiap aset — atau setiap unit — yang digolongkan
pada [klasifikasi](/concepts/classification) tertentu. Lihat
[Atribut](/concepts/attributes) untuk konsepnya.

## Sebelum memulai

Dua keputusan yang **tidak dapat dibatalkan**, jadi ambillah dengan sengaja:

1. **Klasifikasi yang mana.** Kolomnya hanya muncul untuk catatan yang digolongkan
   di sana.
2. **Lingkupnya yang mana.** Apakah kolom ini menjelaskan jenis barangnya, atau
   satu barang fisik?

> [!CAUTION]
> Klasifikasi dan lingkup bersifat **permanen** begitu definisi dibuat. Keduanya
> tidak dapat diubah setelahnya, karena nilai yang sudah tercatat akan kehilangan
> makna. Jika salah satu keliru, nonaktifkan definisinya lalu buat penggantinya.

Uji lingkupnya: *mungkinkah dua barang identik memiliki nilai yang berbeda?*

| Jawaban | Lingkup | Contoh |
|---|---|---|
| Tidak — berlaku untuk modelnya | **Aset** | Ukuran layar, prosesor, kapasitas tempat duduk |
| Ya — berbeda per barang | **Unit aset** | Nomor seri, nomor inventaris, nomor registrasi |

## Langkah-langkah

1. Buka **Organisasi › Definisi atribut**.
2. Pilih **Definisi baru**.
3. Pilih **Klasifikasi**.
4. Masukkan **Nama** kolomnya.
5. Pilih **Jenis**.
6. Pilih **Lingkup** — Aset atau Unit aset.
7. Centang **Wajib** bila nilainya harus selalu diisi.
8. Untuk jenis Angka, centang **Membawa satuan** lalu pilih satuannya bila
   nilainya merupakan ukuran.
9. Tambahkan **Deskripsi** untuk menjelaskan apa yang harus diisikan.
10. Simpan.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Klasifikasi | Ya | Permanen. Catatan mana yang memperoleh kolom ini |
| Nama | Ya | Label kolom yang akan dilihat orang |
| Jenis | Ya | Teks, Angka, Ya atau tidak, Tanggal, Pilihan, Referensi |
| Lingkup | Ya | Permanen. Aset atau Unit aset |
| Wajib | Tidak | Apakah nilainya harus diisi |
| Membawa satuan | Tidak | **Hanya untuk jenis Angka** |
| Satuan | Tidak | Dipilih bila opsi di atas dicentang. Dapat dibuat dari sini |
| Deskripsi | Tidak | Maksimal 500 karakter. Panduan bagi pengisinya |

## Jenis atribut

Hanya atribut **Angka** yang dapat membawa satuan; formulir menolak kombinasi itu
untuk jenis lain.

> [!LIMITATION]
> Atribut **Pilihan** tidak memiliki tempat penyimpanan untuk daftar pilihannya,
> sehingga berperilaku seperti teks bebas — apa pun yang diketik diterima.
> Formulir ini maupun formulir pengisian nilai menyatakannya. Jika Anda
> membutuhkan nilai yang konsisten, cantumkan pilihan yang diizinkan pada
> **Deskripsi** dan periksa secara manual; aplikasi tidak akan menegakkannya.

## Apa yang terjadi setelahnya

Kolomnya langsung muncul pada tab **Nilai atribut** setiap aset — atau unit —
yang digolongkan pada klasifikasi tersebut. Catatan yang sudah ada pun
memperolehnya, dalam keadaan kosong sampai diisi.

## Menyunting dan menonaktifkan

Nama, jenis, wajib, satuan, dan deskripsi semuanya dapat diubah kemudian.
Klasifikasi dan lingkup tidak.

Definisi dinonaktifkan, bukan dihapus: nilai yang sudah tercatat tetap tersimpan,
dan kolomnya berhenti muncul pada catatan baru.

## Tugas terkait

- [Atribut](/concepts/attributes)
- [Klasifikasi](/concepts/classification)
