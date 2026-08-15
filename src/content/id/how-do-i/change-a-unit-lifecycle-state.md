---
title: Bagaimana cara mengubah status siklus hidup unit?
description: Mengoperasikan barang, menyimpannya di gudang, mengirimnya diperbaiki, atau menghapuskannya.
order: 130
task: true
permissions:
  - asset-unit:record-history
keywords: [siklus hidup, digunakan, gudang, perbaikan, hapuskan, pensiun, operasikan]
related:
  - how-do-i/record-a-change-to-a-unit
  - concepts/lifecycle-state
---

## Untuk apa ini

Mengubah posisi sebuah unit dalam masa pakainya — dari terdaftar menjadi
digunakan, masuk gudang, dibawa untuk diperbaiki, atau keluar dari layanan
sepenuhnya. Lihat [Status siklus hidup](/concepts/lifecycle-state) untuk arti
setiap nilai.

Perubahannya dicatat melalui formulir
[Catat perubahan](/how-do-i/record-a-change-to-a-unit) yang sama dengan lokasi
dan kondisi.

## Langkah-langkah

1. Buka asetnya, lalu tab **Unit**, lalu unitnya.
2. Buka tab **Riwayat** lalu pilih **Catat perubahan**.
3. Setel **Status siklus hidup** ke status yang baru.
4. Setel **Kondisi** dan **Lokasi** juga bila keduanya berubah.
5. Tulis **Deskripsi** yang menjelaskan perubahannya.
6. Pilih **Catat**.

## Mengoperasikan unit baru

Inilah kasus yang paling sering. Unit yang baru saja dibuat berstatus
`state:REGISTERED` tanpa catatan apa pun. Entri pertamanya harus menetapkan:

- **Status siklus hidup** → *Digunakan*
- **Kondisi** → biasanya `state:GOOD`
- **Lokasi** → tempat barangnya secara fisik

Ketiganya dalam satu entri, ditambah deskripsi.

## Hanya sebagian perubahan yang diizinkan

Aplikasi menegakkan jalur tetap, dan menolak selainnya dengan pesan yang
menyebutkan status mana saja yang dapat Anda capai dari posisi unit saat ini.

| Dari | Dapat menuju |
|---|---|
| `state:REGISTERED` | Digunakan |
| `state:lifecycle/ACTIVE` | Di gudang, Dipinjam, Dalam perbaikan, Dihapuskan, Dinonaktifkan |
| `state:IN_STORAGE` | Digunakan, Dihapuskan, Dinonaktifkan |
| `state:BORROWED` | Digunakan |
| `state:UNDER_MAINTENANCE` | Digunakan, Dihapuskan |
| `state:DISPOSED` | tidak ada — permanen |
| `state:DEACTIVATED` | tidak ada — permanen |

> [!CAUTION]
> `state:DISPOSED` dan `state:DEACTIVATED` tidak dapat dibatalkan. Unit pada
> salah satunya telah mencapai akhir catatannya dan tidak akan pernah berubah
> status lagi. Jika barang yang sudah dihapuskan benar-benar kembali digunakan,
> daftarkan sebagai unit baru.

## Dua status yang sebaiknya tidak Anda tetapkan manual

- `state:BORROWED` ditetapkan dengan
  [mengaktifkan peminjaman](/how-do-i/create-a-borrowing) dan dilepas dengan
  [mencatat pengembaliannya](/how-do-i/return-a-borrowing). Menetapkannya manual
  akan menyisakan unit bertanda dipinjam tanpa catatan peminjaman di baliknya.
- `state:REGISTERED` adalah status saat unit dibuat dan tidak dapat dikembalikan.

## Tugas terkait

- [Status siklus hidup](/concepts/lifecycle-state)
- [Bagaimana cara mencatat perubahan pada unit aset?](/how-do-i/record-a-change-to-a-unit)
