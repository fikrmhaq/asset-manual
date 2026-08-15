---
title: Kondisi
description: Keadaan fisik satu barang, dan cara memakai kelima nilainya secara konsisten.
order: 100
keywords: [kondisi, baik, cukup, kurang baik, rusak, rusak berat, keadaan]
related:
  - concepts/lifecycle-state
  - concepts/history
  - how-do-i/change-a-unit-condition
---

**Kondisi** mencatat keadaan fisik sebuah
[unit aset](/concepts/asset-unit) — seberapa aus atau rusak barangnya. Ia tidak
bergantung pada [status siklus hidup](/concepts/lifecycle-state), yang mencatat
apakah barang itu sedang dipakai.

Laptop yang rusak tetap bisa digunakan. Laptop yang mulus bisa saja tersimpan di
gudang. Kedua kolom menjawab pertanyaan yang berbeda.

## Lima nilai

| Nilai | Makna yang disarankan |
|---|---|
| `state:GOOD` | Berfungsi sebagaimana mestinya. Paling banter aus wajar |
| `state:FAIR` | Berfungsi, dengan keausan terlihat atau kerusakan kecil yang tidak menghalangi pemakaian |
| `state:POOR` | Berfungsi buruk, atau segera membutuhkan perhatian |
| `state:DAMAGED` | Rusak pada bagian tertentu. Perbaikan masuk akal |
| `state:UNSERVICEABLE` | Tidak layak diperbaiki secara ekonomis. Tidak dapat dipakai |

> [!NOTE]
> Aplikasi tidak mendefinisikan kelimanya lebih jauh dari namanya, dan tidak
> menegakkan hubungan apa pun antara kondisi dan hal lain. Makna di atas adalah
> konvensi yang masuk akal — sepakati satu bersama rekan kerja dan terapkan
> secara konsisten, karena laporan **Menurut kondisi** hanya seberguna kesepakatan
> di baliknya.

## Kondisi dapat bergerak ke segala arah

Berbeda dari status siklus hidup, tidak ada jalur tetap. Sebuah unit dapat
berpindah dari `state:POOR` kembali ke `state:GOOD` setelah diperbaiki, dan tidak
ada yang menghalanginya. Itu benar: perbaikan memang terjadi.

## "Belum dicatat" adalah jawaban yang nyata

Unit yang baru dibuat **belum memiliki kondisi sama sekali**, dan laporan
menghitungnya terpisah sebagai *Belum dicatat*. Itu tidak sama dengan
`state:GOOD`, dan sebaiknya tidak dibiarkan begitu — unit tanpa kondisi berarti
sudah terdaftar tetapi belum pernah dioperasikan.

Entri riwayat pertama pada sebuah unit harus menetapkan kondisi dan lokasi;
setelah itu keduanya boleh dibiarkan dan akan diteruskan tanpa perubahan.

## Mencatat kondisi

Melalui **Catat perubahan** pada tab Riwayat unit. Karena kondisi, lokasi, dan
status siklus hidup dicatat bersama, menilai ulang sebuah unit sambil
memindahkannya adalah satu tindakan, bukan dua. Lihat
[Bagaimana cara mengubah kondisi unit?](/how-do-i/change-a-unit-condition).

Setiap penilaian tersimpan pada [riwayat](/concepts/history) unit, sehingga Anda
dapat melihat bagaimana dan kapan sesuatu memburuk.

## Di mana kondisi muncul

- Pada unit, sebagai kondisi terkininya
- Pada tab **Unit** sebuah aset, per unit
- Sebagai penyaring pada daftar aset — yang menampilkan nilai tersimpan (`GOOD`,
  `FAIR`, …), bukan label yang lebih ramah
- Pada Beranda, sebagai rincian **Unit menurut kondisi**
- Pada laporan **Menurut kondisi**

## Artikel terkait

- [Status siklus hidup](/concepts/lifecycle-state)
- [Riwayat](/concepts/history)
- [Rujukan status](/reference/statuses)
