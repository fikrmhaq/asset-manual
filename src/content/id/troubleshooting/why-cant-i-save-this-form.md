---
title: Mengapa saya tidak bisa menyimpan formulir ini?
description: Penolakan yang diberikan aplikasi saat menyimpan, dan apa yang diminta masing-masing.
order: 10
keywords: [kesalahan, validasi, tidak bisa simpan, ditolak, konflik, wajib, gagal]
related:
  - borrowing/borrowing-statuses
  - getting-started/finding-your-way-around
  - administration/inventory-code-format
---

Penolakan saat menyimpan selalu berupa salah satu dari lima jenis. Pesannya
menyebutkan yang mana, dan masing-masing meminta hal yang berbeda dari Anda.

## Ada isian yang tidak valid

Pesannya menyebut kolomnya. Perbaiki kolom itu lalu simpan lagi.

Kasus yang umum:

- Kolom wajib masih kosong. Kolom wajib ditandai, tetapi sebuah kolom juga dapat
  menjadi wajib karena jawaban pada kolom lain.
- Tanggal yang tidak mungkin — perkiraan kembali sebelum tanggal pinjam,
  misalnya. Pemilih tanggal bahkan tidak menawarkan hari-hari tersebut.
- Nilai terlalu panjang. Nama dibatasi 255 karakter, deskripsi 5.000 karakter.
- Kode sudah dipakai. Kode instansi, kode bagian, dan nomor kontrak masing-masing
  harus unik.

## Keadaan catatan tidak mengizinkannya

Tidak ada yang salah dengan yang Anda ketik; catatannya yang sudah berpindah
keadaan.

- Peminjaman yang bukan lagi draf tidak dapat disunting — lihat
  [Status peminjaman](/borrowing/borrowing-statuses).
- Unit aset tidak dapat melompat ke sembarang status. Ia mengikuti jalur tetap,
  dan unit yang sudah dihapuskan atau dinonaktifkan telah mencapai akhirnya dan
  tidak akan berpindah lagi.
- Unit yang sedang dipinjam pada peminjaman lain tidak dapat ditambahkan ke
  peminjaman kedua.

Pesannya menyebutkan status mana saja yang *diizinkan* dari posisi catatan saat
ini.

## Anda tidak memiliki izin

> [!NOTE]
> Ini jarang terjadi dari sebuah formulir, karena aplikasi menyembunyikan tombol
> yang tidak dapat Anda gunakan. Biasanya terjadi bila peran Anda berubah saat
> halaman masih terbuka. Muat ulang halamannya; jika tombolnya lalu hilang,
> berarti izinnya memang dicabut.

## Catatannya berada di luar instansi Anda

Jika peran Anda terbatas pada satu instansi, catatan milik instansi lain
dilaporkan sebagai **tidak ditemukan**, bukan sebagai terlarang. Itu disengaja —
untuk menghindari mengonfirmasi bahwa catatan milik orang lain memang ada.

## Server tidak dapat dihubungi

Tidak ada yang tersimpan. Periksa koneksi Anda lalu coba lagi; formulir
mempertahankan apa yang Anda ketik.

---

## Tiga penolakan yang mengejutkan banyak orang

### "Catat perubahan" ditolak tanpa deskripsi

Pada tab **Riwayat** sebuah unit aset, **Catat perubahan** membolehkan Anda
mengosongkan kondisi, lokasi, dan status siklus hidup — apa pun yang dilewati
akan diteruskan. Kolom **Deskripsi** tampak sama-sama opsional.

Ternyata tidak. Penyimpanan ditolak kecuali Anda menuliskannya.

> [!WARNING]
> Selalu isi **Deskripsi** saat mencatat perubahan pada sebuah unit. Kolom itu
> tidak ditandai wajib di layar, tetapi penyimpanan tidak akan berhasil tanpanya.
> Catatan singkat — "dipindahkan ke Ruang 204 setelah renovasi" — itulah yang
> ditampilkan lini masa riwayat kelak, jadi layak ditulis dengan baik.

### Entri riwayat pertama memerlukan kondisi *dan* lokasi

Untuk unit yang belum pernah memiliki keduanya, "diteruskan" tidak punya apa pun
untuk diteruskan. Entri pertama harus menetapkan keduanya. Setiap entri sesudahnya
boleh mengosongkannya.

### Pendaftaran unit ditolak karena sesuatu yang tidak ada pada formulir

Pesan seperti *"format kode inventaris instansi ini memerlukan kode sumber
dana, dan pendaftaran ini tidak memilikinya"* bukan tentang apa pun yang Anda
ketik.

Format kode inventaris instansi Anda disusun dari nilai-nilai yang dicari sendiri
oleh aplikasi — bagian, klasifikasi, sumber dana pada kontrak. Bila format
memerlukan salah satunya dan nilainya tidak ditemukan, pendaftaran ditolak,
karena pilihan lainnya adalah kode permanen yang berlubang lalu tercetak pada
stiker.

Perbaikannya hampir tidak pernah ada pada formulir di hadapan Anda:

| Yang disebut pesan | Tempat memperbaikinya |
|---|---|
| Kode sumber dana | **Organisasi › Data acuan › Sumber dana** — baris bertanda **Belum ada kode** perlu diberi singkatannya |
| Kode bagian | Tetapkan bagian untuk unit tersebut saat mendaftarkannya |
| Komposisi nomor | Isi kolomnya pada formulir; yang satu ini memang ada di formulir |

Penolakan yang menyebut **kode sumber dana** adalah yang paling umum, dan
biasanya masalahnya pada sumber dananya, bukan kontraknya: kontrak sudah menyebut
sumber dana dengan benar, tetapi sumber dana itu belum pernah diberi singkatan.
Lihat [Format kode inventaris](/administration/inventory-code-format).
