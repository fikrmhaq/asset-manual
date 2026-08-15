---
title: Bagaimana cara mengubah kondisi unit?
description: Mencatat bahwa keadaan sebuah barang kini lebih baik atau lebih buruk dari sebelumnya.
order: 120
task: true
permissions:
  - asset-unit:record-history
keywords: [kondisi, rusak, patah, diperbaiki, aus, menilai]
related:
  - how-do-i/record-a-change-to-a-unit
  - concepts/condition
---

## Untuk apa ini

Mencatat penilaian baru atas [kondisi](/concepts/condition) sebuah barang fisik.
Setiap penilaian tersimpan, sehingga riwayat unit menunjukkan bagaimana — dan
kapan — sesuatu memburuk atau pulih.

Seperti pemindahan, ini adalah
[perubahan yang dicatat pada unit](/how-do-i/record-a-change-to-a-unit): setel
kondisinya dan biarkan kolom lainnya.

## Langkah-langkah

1. Buka asetnya, lalu tab **Unit**, lalu unitnya.
2. Buka tab **Riwayat** lalu pilih **Catat perubahan**.
3. Setel **Kondisi** ke penilaian yang baru.
4. Biarkan **Lokasi** kosong dan **Status siklus hidup** pada *Tidak berubah*,
   kecuali keduanya memang berubah.
5. Tulis **Deskripsi** — apa yang Anda temukan, dan mengapa penilaiannya berubah.
6. Pilih **Catat**.

## Lima nilainya

`state:GOOD`, `state:FAIR`, `state:POOR`, `state:DAMAGED`,
`state:UNSERVICEABLE`. Aplikasi tidak menegakkan makna tertentu, sehingga
konsistensi datang dari kesepakatan organisasi Anda — lihat
[Kondisi](/concepts/condition) untuk konvensi yang dapat dipakai.

Kondisi dapat bergerak ke **segala** arah. Barang yang diperbaiki berpindah dari
`state:DAMAGED` kembali ke `state:GOOD`, dan tidak ada yang menghalanginya.

## Kondisi bukan status siklus hidup

Sebuah barang dapat rusak tetapi tetap dipakai, atau dalam keadaan sempurna
tetapi tersimpan di gudang. Jika barang itu juga berhenti dapat dipakai, ubah
[status siklus hidupnya](/concepts/lifecycle-state) pada entri yang sama:

| Yang terjadi | Kondisi | Status siklus hidup |
|---|---|---|
| Terjatuh, masih berfungsi | `state:DAMAGED` | tidak berubah |
| Dikirim untuk diperbaiki | `state:DAMAGED` | `state:UNDER_MAINTENANCE` |
| Kembali setelah diperbaiki | `state:GOOD` | `state:lifecycle/ACTIVE` |
| Tidak dapat diperbaiki, dihapuskan | `state:UNSERVICEABLE` | `state:DISPOSED` |

> [!IMPORTANT]
> `state:DISPOSED` bersifat permanen. Unit yang sudah dihapuskan tidak dapat
> berubah status lagi. Tetapkan hanya jika barangnya benar-benar sudah tidak ada.

## Tugas terkait

- [Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit)
- [Kondisi](/concepts/condition)
- [Bagaimana cara mengubah status siklus hidup unit?](/how-do-i/change-a-unit-lifecycle-state)
