---
title: Memahami izin
description: Mengapa dua orang melihat dua aplikasi yang berbeda, dan cara mengetahui apa yang belum Anda miliki.
order: 60
keywords: [izin, akses, peran, tidak terlihat, tersembunyi, ditolak, lingkup, instansi]
related:
  - concepts/roles-and-permissions
  - troubleshooting/why-is-this-action-unavailable
---

Dua orang yang masuk ke sistem yang sama dapat melihat hal yang sangat berbeda.
Itu memang dirancang demikian, dan diatur oleh dua mekanisme yang saling
terpisah.

## Peran membawa izin

Anda tidak memegang izin secara langsung. Anda memegang **peran**, dan setiap
peran membawa sekumpulan izin. Administrator yang membuat peran dan menentukan
isinya.

Sebuah izin menyebut satu tindakan pada satu jenis catatan, ditulis
`resource:action`:

- `perm:asset:read` — melihat aset
- `perm:asset:create` — menambah aset baru
- `perm:borrowing:return` — mencatat pengembalian peminjaman
- `perm:location:deactivate` — menonaktifkan lokasi

Jumlahnya 104. Anda tidak pernah diminta memikirkan daftarnya; yang penting
adalah **setiap tombol yang Anda lihat sesuai dengan izin yang Anda miliki**.

> [!IMPORTANT]
> Aplikasi **menyembunyikan** apa yang tidak dapat Anda gunakan, bukan
> meredupkannya. Menu atau tombol yang tidak ada hampir selalu berarti izin yang
> belum diberikan — bukan kerusakan, dan tidak akan muncul jika halaman dimuat
> ulang.

## Lingkup organisasi menentukan catatan mana

Mekanisme kedua tidak bergantung pada yang pertama. Bahkan dengan izin melihat
aset, Anda hanya melihat aset **instansi Anda sendiri** — kecuali salah satu
peran Anda ditandai **menyeluruh** (*system-wide*), yang menghapus batas
tersebut.

Inilah sebabnya rekan kerja dapat menemukan kontrak yang tidak Anda temukan:
kalian sama-sama memiliki `perm:contract:read`, tetapi kontrak itu milik instansi
lain.

> [!NOTE]
> Catatan di luar instansi Anda dilaporkan sebagai **tidak ditemukan**, bukan
> "dilarang". Aplikasi menghindari mengonfirmasi keberadaan catatan milik orang
> lain. Jadi "catatan tidak dapat ditemukan" bisa berarti "memang tidak ada" atau
> "bukan milik Anda" — dan dari posisi Anda, keduanya sama saja.

Peran menyeluruh tidak memberi apa pun dengan sendirinya. Ia hanya menghapus
batas instansi dari izin yang sudah dimiliki peran itu.

## Mengetahui apa yang belum Anda miliki

Ketika sesuatu yang Anda harapkan tidak ada, pertanyaan yang berguna bagi
administrator adalah **"peran apa yang akan memberi saya ini?"** — bukan "apakah
catatannya sudah dihapus?".

Akan membantu jika Anda menyebutkan apa yang ingin dilakukan dan apa yang tidak
Anda temukan:

> "Saya bisa membuka Peminjaman dan melihat daftarnya, tetapi tidak ada tombol
> **Catat pengembalian** pada peminjaman yang berjalan."

Kalimat itu menyebut izinnya hampir persis (`perm:borrowing:return`) tanpa Anda
perlu tahu kodenya.

## Satu-satunya peran bawaan

Instalasi baru memiliki tepat satu peran, **System Admin**, yang bersifat
menyeluruh dan memegang seluruh izin. Setiap peran lain dibuat secara lokal
sesuai cara kerja organisasi Anda — sehingga nama peran berbeda antar instalasi,
dan panduan ini tidak mengasumsikan satu pun di antaranya.

Untuk daftar lengkap izin, lihat
[Rujukan izin](/reference/permission-reference).

## Artikel terkait

- [Peran dan izin](/concepts/roles-and-permissions)
- [Instansi dan bagian](/concepts/institutions-and-departments)
