---
title: Mengapa aksi ini tidak tersedia?
description: Tombolnya bukan diredupkan — memang tidak ada. Empat alasannya.
order: 20
keywords: [tombol hilang, tidak terlihat, tersembunyi, tidak ada pilihan, tidak tersedia, diredupkan]
related:
  - getting-started/understanding-permissions
  - troubleshooting/why-cant-i-save-this-form
---

Seorang rekan kerja menyebut tombol yang tidak Anda temukan. Ada empat alasan,
dan keempatnya mudah dibedakan.

## 1. Anda tidak memiliki izinnya

Ini yang paling sering.

Aplikasi **menyembunyikan** apa yang tidak dapat Anda gunakan, bukan
menonaktifkannya. Menu atau tombol yang tidak ada hampir selalu berarti izin yang
belum diberikan, dan tidak akan muncul meski halaman dimuat ulang.

| Yang hilang | Izin di baliknya |
|---|---|
| Seluruh bagian pada bilah sisi | `read` untuk modul tersebut |
| **Baru** / **Buat** | `create` |
| **Ubah** | `update` |
| **Nonaktifkan** | `deactivate` |
| **Aktifkan** / **Batalkan** / **Catat pengembalian** / **Perpanjang** pada peminjaman | Izin peminjaman yang sesuai — masing-masing terpisah |
| **Catat perubahan** pada sebuah unit | `perm:asset-unit:record-history` |
| Kolom vendor pada formulir aset | `perm:vendor:read` |
| Tab Peminjaman atau Transaksi pada sebuah unit | `perm:borrowing:read` / `perm:transaction:read` |

Tanyakan kepada administrator Anda "peran apa yang akan memberi saya ini?". Lihat
[Memahami izin](/getting-started/understanding-permissions).

## 2. Keadaan catatan tidak mengizinkannya

Aksinya ada dan mungkin Anda memiliki izinnya, tetapi aksi itu tidak masuk akal
bagi catatan tersebut saat ini. Aplikasi hanya menawarkan apa yang benar-benar
dapat dilakukan catatan itu.

| Aksi yang hilang | Sebabnya |
|---|---|
| **Aktifkan** pada peminjaman | Statusnya bukan draf lagi |
| **Batalkan** pada peminjaman | Hanya draf yang dapat dibatalkan |
| **Catat pengembalian** | Hanya peminjaman berjalan atau terlambat yang dapat dikembalikan |
| Menyunting bagian utama atau unit sebuah peminjaman | Hanya draf yang dapat disunting |
| Penyuntingan apa pun pada transaksi | Transaksi bersifat permanen — tidak ada aksi sunting bagi siapa pun |
| Sebuah status siklus hidup pada daftar pilihan | Status itu tidak dapat dicapai dari posisi unit saat ini |

Lihat [Rujukan status](/reference/statuses) untuk mengetahui apa yang diizinkan
setiap status.

## 3. Aksinya memang tidak ada

Sebagian hal memang bukan fitur. Jika Anda mencari salah satu di bawah ini, tidak
ada izin yang akan memunculkannya:

- **Menyunting atau menghapus transaksi** — permanen secara rancangan
- **Menghapus aset, unit, atau lokasi** — nonaktifkan sebagai gantinya
- **Mengubah kata sandi sendiri** — administrator yang menetapkannya
- **Membuka kembali peminjaman yang dikembalikan atau dibatalkan** — buat yang
  baru
- **Menyunting bentuk area denah** — hapus lalu gambar ulang
- **Menetapkan bagian sebuah unit dari layar unit** — ditampilkan tetapi tidak
  dapat disunting di sana
- **Mengekspor dari layar daftar** — ekspor berada pada laporan

## 4. Anda berada di layar yang keliru

Sering kali aksinya ada satu tingkat di samping, karena aksi itu milik jenis
catatan yang berbeda.

| Yang ingin Anda lakukan | Letaknya |
|---|---|
| Mengubah lokasi atau kondisi | Tab Riwayat pada **unit**, bukan aset |
| Menambahkan unit | Tab **Unit** pada aset |
| Mendaftarkan aset dari pembelian | **Item baris kontrak**, bukan layar aset |
| Melampirkan berkas | Tab **Lampiran** pada aset |
| Menyunting nilai atribut | Tab **Nilai atribut**, bukan formulir penyuntingan |
| Mengekspor | Sebuah **laporan**, bukan daftar |

Jika Anda mencari lokasi, kondisi, peminjaman, atau riwayat dan tidak
menemukannya, hampir pasti Anda berada di halaman aset padahal yang dibutuhkan
adalah halaman unit. Lihat
[Aset vs Unit Aset](/concepts/asset-vs-asset-unit).

## Artikel terkait

- [Memahami izin](/getting-started/understanding-permissions)
- [Mengapa saya tidak bisa menyimpan formulir ini?](/troubleshooting/why-cant-i-save-this-form)
- [Batasan yang diketahui](/troubleshooting/known-limitations)
