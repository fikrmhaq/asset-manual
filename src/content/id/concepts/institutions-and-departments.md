---
title: Instansi dan bagian
description: Siapa yang memiliki catatan, siapa yang bertanggung jawab atas barang, dan mengapa keduanya bekerja berbeda.
order: 170
keywords: [instansi, bagian, organisasi, lingkup, kepemilikan, penanggung jawab]
related:
  - getting-started/understanding-permissions
  - concepts/roles-and-permissions
---

Dua gagasan keorganisasian yang berperilaku cukup berbeda.

## Instansi

**Instansi** adalah unit organisasi yang memiliki sesuatu. Aset, kontrak, lokasi,
peminjaman, dan pengguna semuanya bernaung pada salah satunya.

Instansi juga merupakan **batas dari apa yang dapat Anda lihat**. Kecuali salah
satu peran Anda ditandai menyeluruh (*system-wide*), Anda sepenuhnya bekerja di
dalam instansi Anda sendiri: asetnya, kontraknya, lokasinya. Catatan milik
instansi lain tidak muncul di daftar Anda, dan membukanya secara langsung
dilaporkan sebagai tidak ditemukan.

Sebagian besar catatan otomatis menggunakan instansi Anda saat dibuat, sehingga
pada instalasi dengan satu instansi Anda jarang memikirkannya.

| Kolom | Wajib | Catatan |
|---|---|---|
| Nama | Ya | |
| Kode | Ya | Pengenal singkat yang unik, dipakai di seluruh laporan |
| Alamat | Ya | |

## Bagian

**Bagian** menyatakan unit organisasi mana yang bertanggung jawab atas sebuah
[unit aset](/concepts/asset-unit).

Cara kerjanya berbeda dari instansi dalam tiga hal yang perlu diketahui:

- **Datar.** Bagian tidak memiliki induk dan tidak berhierarki.
- **Berskala organisasi.** Bagian tidak bernaung pada satu instansi; daftarnya
  digunakan bersama.
- **Bukan batas visibilitas.** Bagian tidak pernah membatasi apa yang dapat Anda
  lihat. Hanya instansi yang melakukannya.

| Kolom | Wajib | Catatan |
|---|---|---|
| Kode | Ya | Maksimal 8 karakter. **Permanen** — tidak dapat diubah setelah dibuat |
| Nama | Ya | Maksimal 75 karakter. Dapat diubah |

> [!IMPORTANT]
> Kode bagian bersifat permanen karena unit aset merujuk padanya. Pilihlah dengan
> hati-hati; namanya dapat dikoreksi kemudian, kodenya tidak.

## Instansi atau bagian?

| Pertanyaan | Jawaban |
|---|---|
| Siapa pemilik aset ini? | Instansi |
| Tim mana yang mengurus laptop ini? | Bagian |
| Mengapa saya tidak dapat melihat kontrak itu? | Instansi |
| Kepada siapa saya menanyakan kursi rusak ini? | Bagian |

## Catatan tentang penetapan bagian

> [!LIMITATION]
> Bagian sebuah unit ditampilkan pada tab Ikhtisar, tetapi dialog penyuntingan di
> layar tersebut hanya menawarkan **Deskripsi**. Saat ini tidak ada cara
> menetapkan atau mengubah bagian sebuah unit dari layar unit. Jika tanggung jawab
> per bagian penting bagi catatan Anda, sampaikan kepada pengelola instalasi Anda.

## Menonaktifkan

Keduanya dinonaktifkan, bukan dihapus. Instansi tetap mempertahankan aset,
kontrak, dan penggunanya; bagian tetap mempertahankan unit yang sudah ditugaskan
padanya. Keduanya tidak ditawarkan untuk catatan baru selama nonaktif.

## Artikel terkait

- [Memahami izin](/getting-started/understanding-permissions)
- [Peran dan izin](/concepts/roles-and-permissions)
- [Aktif dan nonaktif](/concepts/active-and-inactive)
