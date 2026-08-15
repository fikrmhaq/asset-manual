---
title: Bagaimana cara melihat riwayat unit?
description: Membaca lini masa tempat sebuah barang pernah berada dan keadaannya saat itu.
order: 140
task: true
permissions:
  - asset-unit:read
keywords: [riwayat, lini masa, masa lalu, kapan, lokasi sebelumnya, telusuri]
related:
  - concepts/history
  - how-do-i/record-a-change-to-a-unit
  - how-do-i/view-audit-history
---

## Langkah-langkah

1. Buka **Aset** lalu pilih asetnya.
2. Buka tab **Unit** lalu pilih unitnya.
3. Buka tab **Riwayat**.

## Membaca lini masa

Entri diurutkan dari yang terbaru. Setiap entri menampilkan:

- **Status siklus hidup** dan **kondisi** pada saat itu, sebagai lencana
- **Lokasi**, sebagai jejak lengkap
- **Tanggal** mulai berlaku dan berakhirnya — entri terkini berlaku sampai
  *sekarang*
- **Deskripsi** yang ditulis ketika perubahan dicatat

Karena setiap entri ditutup saat entri berikutnya dimulai, lini masa menjawab
"di mana barang ini pada bulan Maret?", bukan sekadar "di mana sekarang?".

## Riwayat yang kosong

Unit tanpa riwayat berarti sudah terdaftar tetapi belum pernah dioperasikan. Tab
tersebut menyatakannya: mencatat kondisi dan lokasi itulah yang mengoperasikan
sebuah unit. Lihat
[Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit).

## Yang tidak diceritakan riwayat

| Pertanyaan | Tempat mencarinya |
|---|---|
| Siapa yang membuat perubahan ini? | [Log audit](/how-do-i/view-audit-history) |
| Siapa yang meminjam barang ini? | Tab **Peminjaman** pada unit |
| Kejadian apa saja yang tercatat atasnya? | Tab **Transaksi** pada unit |
| Di mana unit lain dari aset ini? | Tab **Unit** pada aset |

Riwayat unit mencatat **fakta fisik mengenai barangnya**. Siapa yang mengetiknya,
dan kapan, adalah tugas log audit.

## Tugas terkait

- [Riwayat](/concepts/history)
- [Log audit](/concepts/audit-log)
