---
title: Bagaimana cara mengubah aset?
description: Mengubah detail sebuah aset, dan memahami apa yang tidak dapat dijangkau penyuntingan.
order: 60
task: true
permissions:
  - asset:update
keywords: [ubah, sunting, perbarui, koreksi, ganti nama, klasifikasi ulang]
related:
  - how-do-i/view-an-asset
  - concepts/attributes
  - concepts/active-and-inactive
---

## Langkah-langkah

1. Buka asetnya — lihat
   [Bagaimana cara melihat aset?](/how-do-i/view-an-asset).
2. Pilih **Ubah**.
3. Ubah yang Anda perlukan.
4. Pilih **Simpan perubahan**.

Jika Anda meninggalkan halaman dengan perubahan yang belum disimpan, aplikasi
akan bertanya sebelum membuangnya.

## Yang dapat Anda ubah

Nama, klasifikasi, instansi, vendor, kontrak, dan deskripsi — kolom yang sama
dengan formulir pembuatan.

> [!NOTE]
> Kolom **Kontrak** adalah cara menautkan aset yang didaftarkan langsung ke
> pengadaannya di kemudian hari, sekaligus cara memperbaiki kontrak yang salah.
> Mengosongkannya mengembalikan aset ke keadaan "Tanpa catatan pengadaan", yang
> wajar dan bukan berarti datanya kurang.
>
> Satu penolakan yang mungkin muncul: jika unit-unit aset ini sudah tertaut ke
> rincian dari kontrak lain, perubahan akan ditolak. Kosongkan atau arahkan ulang
> rincian unit tersebut lebih dulu — rincian pengadaan setiap unit ada pada
> formulir ubah unit itu sendiri.

> [!IMPORTANT]
> Mengubah **klasifikasi** juga mengubah [atribut](/concepts/attributes) mana yang
> berlaku, karena definisi atribut melekat pada klasifikasi. Nilai yang tercatat
> terhadap atribut klasifikasi lama berhenti ditampilkan. Formulir penyuntingan
> memperingatkan hal ini.

## Yang tidak dapat diubah di sini

| Tidak ada pada formulir ini | Letaknya |
|---|---|
| Rincian pengadaan tiap unit | Formulir ubah pada unit itu sendiri — rincian pengadaan adalah fakta tentang unit, bukan tentang asetnya |
| Nilai atribut | Tab **Nilai atribut** pada aset |
| Lampiran | Tab **Lampiran** pada aset |
| Unit-unitnya | Tab **Unit** — setiap unit disunting pada halamannya sendiri |
| Lokasi, kondisi, status siklus hidup | Semuanya milik unit, bukan aset. Lihat [Aset vs Unit Aset](/concepts/asset-vs-asset-unit) |

## Menghentikan penggunaan sebuah aset

Tidak ada penghapusan. Untuk menarik sebuah aset dari penggunaan,
**nonaktifkan**: catatannya, unit-unitnya, dan seluruh riwayatnya tetap
tersimpan, dan aset berhenti ditawarkan untuk pekerjaan baru. Aset dapat
diaktifkan kembali kemudian. Lihat
[Aktif dan nonaktif](/concepts/active-and-inactive).

## Tugas terkait

- [Bagaimana cara melihat aset?](/how-do-i/view-an-asset)
- [Aktif dan nonaktif](/concepts/active-and-inactive)
