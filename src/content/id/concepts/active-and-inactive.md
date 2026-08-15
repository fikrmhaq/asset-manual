---
title: Aktif dan nonaktif
description: Mengapa aplikasi menonaktifkan catatan alih-alih menghapusnya.
order: 190
keywords: [aktif, nonaktif, hapus, nonaktifkan, aktifkan kembali, arsip]
related:
  - concepts/lifecycle-state
  - troubleshooting/why-cant-i-delete-this
---

Hampir tidak ada yang dihapus di aplikasi ini. Catatan **dinonaktifkan** —
disimpan, dengan riwayatnya utuh, dan ditarik dari penggunaan.

## Mengapa

Catatan yang dihapus membawa serta riwayatnya. Jika sebuah penyedia lenyap,
setiap kontrak yang menyebutnya menjadi tidak dapat dijelaskan; jika sebuah
lokasi lenyap, setiap unit yang pernah berada di sana kehilangan sebagian
ceritanya.

Menonaktifkan menjaga masa lalu tetap terbaca sekaligus menghentikan catatan itu
dipakai untuk hal baru.

## Yang dilakukan penonaktifan

| Dilakukan | Tidak dilakukan |
|---|---|
| Mengeluarkan catatan dari daftar pilihan untuk pekerjaan baru | Menghapus apa pun |
| Menandainya nonaktif di mana pun ia muncul | Mengubah catatan yang sudah merujuknya |
| Menjaga setiap rujukan yang ada tetap berfungsi | Menyembunyikannya dari laporan dan riwayat |

Rujukan yang sudah ada selalu dipertahankan. Menonaktifkan vendor tidak
melepasnya dari aset yang diatribusikan kepadanya; menonaktifkan bagian tidak
membatalkan penugasan unit yang sudah ada.

Setiap penonaktifan dapat dibatalkan dengan **Aktifkan kembali**.

## Yang dapat dinonaktifkan

Instansi, bagian, pengguna, aset, unit aset, lokasi, definisi atribut, penyedia,
kontrak, dan vendor.

Setiap dialog konfirmasi menyebutkan apa yang sebenarnya akan terjadi — bacalah,
karena akibatnya berbeda-beda. Menonaktifkan pengguna, misalnya, langsung
mengeluarkannya dan mencegahnya masuk kembali.

## Yang benar-benar dihapus

Beberapa hal memang dihapus:

| Catatan | Catatan tambahan |
|---|---|
| Peran | Ditolak selama masih ada pengguna yang memegangnya |
| Kelima daftar referensi yang dapat disunting | Ditolak selama masih ada catatan yang merujuk entrinya |
| Item kontrak | Aset yang sudah didaftarkan darinya tidak terpengaruh |
| Denah dan areanya | Lokasi yang digambarkannya tidak terpengaruh |
| Lampiran | Berkasnya dihapus |

Di mana penghapusan tersedia, ia dilindungi: aplikasi menolak bila masih ada yang
bergantung pada catatan tersebut. Jika penghapusan ditolak, nonaktifkan saja,
atau lepaskan dulu apa pun yang masih menunjuknya.

## Aktif/nonaktif bukan status siklus hidup

Dua gagasan yang sama-sama memakai kata "aktif":

- **Aktif / nonaktif** menjelaskan apakah **catatan** sedang dipakai.
- **[Status siklus hidup](/concepts/lifecycle-state)** menjelaskan posisi
  **barang fisik** dalam masa pakainya.

Sebuah unit dapat berstatus `state:lifecycle/ACTIVE` (sedang digunakan) pada
catatan yang telah dinonaktifkan, dan keduanya menyatakan hal yang berbeda.

## Menemukan catatan nonaktif

Sebagian besar daftar memiliki penyaring **Status**, yang secara bawaan
menampilkan semuanya. Persempit ke *Nonaktif* untuk menemukan yang sudah ditarik.

## Artikel terkait

- [Status siklus hidup](/concepts/lifecycle-state)
- [Mengapa saya tidak bisa menghapus ini?](/troubleshooting/why-cant-i-delete-this)
