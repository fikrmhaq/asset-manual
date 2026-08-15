---
title: Mengapa saya tidak bisa menghapus ini?
description: Sebagian besar catatan dinonaktifkan, bukan dihapus — dan penghapusan yang ada pun dilindungi.
order: 30
keywords: [hapus, tidak bisa menghapus, nonaktifkan, ditolak, sedang dipakai]
related:
  - concepts/active-and-inactive
  - troubleshooting/why-is-this-action-unavailable
---

Dua keadaan yang berbeda, dengan jawaban yang berbeda.

## Tidak ada Hapus, yang ada Nonaktifkan

Untuk sebagian besar catatan hal ini disengaja: aplikasi menonaktifkan alih-alih
menghapus, agar riwayat tetap terbaca. Lihat
[Aktif dan nonaktif](/concepts/active-and-inactive).

Catatan yang **dinonaktifkan, tidak pernah dihapus**:

instansi · bagian · pengguna · aset · unit aset · lokasi · definisi atribut ·
penyedia · kontrak · vendor

Menonaktifkan mengeluarkan catatan dari daftar pilihan untuk pekerjaan baru dan
menandainya nonaktif, sambil menjaga setiap rujukan yang ada tetap utuh. Tindakan
ini selalu dapat dibatalkan dengan **Aktifkan kembali**.

> [!TIP]
> Jika Anda tidak sengaja menonaktifkan sesuatu, tidak ada yang hilang. Setel
> penyaring **Status** ke *Nonaktif*, temukan catatannya, lalu aktifkan kembali.

## Hapus ada tetapi ditolak

Beberapa hal memang dapat dihapus — dan penghapusannya dihalangi selama masih ada
yang bergantung pada catatan tersebut.

| Catatan | Ditolak bila |
|---|---|
| Sebuah peran | Masih ada pengguna yang memegangnya |
| Satuan, jenis kontrak, sumber dana, jenis transaksi, atau kode rekening | Masih ada catatan yang merujuknya |

Ini perlindungan, bukan penghalang. Menghapus jenis kontrak yang ditunjuk tiga
puluh kontrak akan menyisakan tiga puluh kontrak yang menyebut jenis yang tidak
ada lagi.

### Yang harus dilakukan

1. **Temukan apa yang masih bergantung padanya.** Untuk peran, periksa tab Peran
   setiap pengguna. Untuk entri referensi, cari kontrak atau transaksi yang
   memakainya.
2. **Lepaskan kaitannya** — berikan peran lain kepada penggunanya, atau ubah
   catatannya ke jenis yang berbeda.
3. **Hapus lagi.**

Atau biarkan saja entrinya. Entri referensi yang tidak terpakai memang tidak
rapi; itu bukan masalah.

## Hal yang dihapus tanpa keberatan

| Catatan | Catatan tambahan |
|---|---|
| Item baris kontrak | Aset yang sudah didaftarkan darinya tidak terpengaruh |
| Denah | Lokasi yang digambarkannya tidak terpengaruh |
| Area denah | Lokasi yang diwakili area itu tidak terpengaruh |
| Lampiran | Berkasnya dihapus |

Masing-masing meminta konfirmasi, dan konfirmasinya menyebutkan apa yang akan dan
tidak akan terpengaruh. Bacalah — khususnya untuk denah, karena menghapus denah
juga menghapus setiap area yang digambar di atasnya.

## Yang tidak akan pernah dapat dihapus

- **Transaksi.** Permanen secara rancangan, bagi siapa pun.
- **Entri audit.** Permanen secara rancangan, bagi siapa pun.
- **Entri riwayat unit.** Lini masa adalah catatan atas apa yang terjadi;
  mencatat entri koreksi adalah cara memperbaiki kekeliruan.

## Artikel terkait

- [Aktif dan nonaktif](/concepts/active-and-inactive)
- [Mengapa aksi ini tidak tersedia?](/troubleshooting/why-is-this-action-unavailable)
