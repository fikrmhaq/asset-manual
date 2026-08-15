---
title: Riwayat
description: Lini masa kondisi, lokasi, dan status siklus hidup sebuah unit — dan alasan ketiganya dicatat bersama.
order: 110
keywords: [riwayat, lini masa, perubahan, masa lalu, kapan, catat perubahan]
related:
  - concepts/asset-unit
  - how-do-i/record-a-change-to-a-unit
  - how-do-i/view-unit-history
---

Setiap [unit aset](/concepts/asset-unit) menyimpan **riwayat**: lini masa tempat
ia berada, kondisinya, dan status siklus hidup yang dipegangnya — lengkap dengan
tanggal berlakunya masing-masing.

Inilah yang memungkinkan Anda menjawab "di mana barang ini pada bulan Maret?",
bukan hanya "di mana sekarang?".

## Tiga fakta, satu entri

Kondisi, lokasi, dan status siklus hidup dicatat **bersama**, sebagai satu entri.
Tidak ada tindakan "pindahkan" tersendiri dan tidak ada tindakan "ubah kondisi"
tersendiri.

Terdengar membatasi sampai Anda menyadari bahwa hal itu sesuai kenyataan: sebuah
unit biasanya berpindah *karena* sesuatu terjadi padanya. Ia dibawa ke bengkel,
maka sekarang ia berada di bengkel, dalam perbaikan, dan rusak. Itu satu
kejadian, dan lini masa mencatatnya sebagai satu entri.

## Diteruskan

Saat Anda mencatat perubahan, apa pun yang dibiarkan kosong akan **diteruskan**
dari keadaan saat ini. Memindahkan unit yang kondisinya tidak berubah cukup
dengan mengisi lokasinya saja.

Satu-satunya pengecualian adalah entri pertama pada sebuah unit, yang harus
menetapkan **kondisi sekaligus lokasi** — belum ada apa pun untuk diteruskan.

> [!WARNING]
> **Deskripsi wajib diisi pada setiap entri**, termasuk entri yang hanya mengubah
> lokasi. Formulir tidak menandainya sebagai wajib dan petunjuknya menyebut soal
> nilai yang diteruskan, tetapi penyimpanan akan ditolak tanpa deskripsi. Tulislah
> kalimat yang sebenarnya — "dipindahkan ke Ruang 204 setelah renovasi" — karena
> deskripsi itulah yang ditampilkan lini masa setelahnya.

## Isi lini masa

Terbaru di atas. Setiap entri memuat:

- Status siklus hidup dan kondisi pada saat itu
- Lokasinya
- Tanggal mulai berlaku, dan sampai kapan — entri terkini berlaku sampai *sekarang*
- Deskripsi yang Anda tulis

Tab Ikhtisar unit selalu menampilkan nilai **terkini**; tab Riwayat menunjukkan
bagaimana ia sampai ke sana.

## Riwayat bukan log audit

Dua catatan berbeda yang mudah tertukar:

| | Riwayat unit | [Log audit](/concepts/audit-log) |
|---|---|---|
| Mencatat | Fakta fisik tentang satu barang | Perubahan catatan di seluruh aplikasi |
| Ditulis oleh | Anda, secara sengaja | Aplikasi, secara otomatis |
| Menjawab | "Di mana barangnya, dan bagaimana keadaannya?" | "Siapa yang mengubah catatan ini, dan kapan?" |
| Ditemukan di | Tab Riwayat pada unit | Layar Log audit |

Mencatat perpindahan menghasilkan keduanya: satu entri riwayat *dan* satu jejak
audit. Keduanya melayani pembaca yang berbeda.

## Artikel terkait

- [Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit)
- [Bagaimana cara melihat riwayat unit?](/how-do-i/view-unit-history)
- [Log audit](/concepts/audit-log)
