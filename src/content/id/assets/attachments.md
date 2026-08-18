---
title: Melampirkan berkas pada aset
description: Menyimpan faktur, foto, dan buku petunjuk bersama catatan yang bersangkutan.
order: 10
keywords: [lampiran, berkas, unggah, unduh, pratinjau, lihat, buka, dokumen, faktur, foto, buku petunjuk, pdf]
related:
  - how-do-i/view-an-asset
  - concepts/asset
---

Tab **Lampiran** pada sebuah aset menyimpan berkas milik aset tersebut: faktur,
berita acara serah terima, foto, buku petunjuk dari pabrikan.

## Yang dapat dilampirkan

| | |
|---|---|
| Jenis berkas | PDF, JPG, JPEG, PNG, DOCX, XLSX |
| Ukuran maksimal | 10 MB per berkas |
| Dilampirkan pada | [Aset](/concepts/asset), bukan unit satuan |

Selain itu akan ditolak dengan pesan yang menyebutkan jenis yang diterima.

## Mengunggah

1. Buka asetnya lalu masuk ke tab **Lampiran**.
2. Pilih sebuah berkas.
3. Berkas terunggah dan muncul pada daftar.

Memerlukan `perm:attachment:create`.

## Lampiran melekat pada aset

Tidak ada tab lampiran pada unit aset. Sebuah berkas menjelaskan jenis barangnya
— buku petunjuk berlaku untuk setiap laptop model itu, dan faktur mencakup
seluruh pengiriman.

> [!NOTE]
> Jika Anda memerlukan foto satu barang tertentu, tidak ada tempat untuk
> menaruhnya pada unit tersebut. Dalam praktiknya orang melampirkannya pada aset
> dan menyebutkan unit mana yang ditampilkan melalui nama berkasnya.

## Melihat tanpa mengunduh

Foto dan PDF terbuka pada jendela di halaman itu juga. Pilih nama berkasnya, atau
ikon mata di sebelahnya.

| Jenis berkas | Terbuka di aplikasi |
|---|---|
| JPG, JPEG, PNG | Ya |
| PDF | Ya |
| DOCX, XLSX | Tidak — unduh berkasnya |

DOCX dan XLSX tidak memiliki pratinjau karena peramban tidak dapat
menampilkannya. Berkasnya tetap dapat diunduh dan dibuka di Word atau Excel
seperti biasa.

> [!TIP]
> Berkas baru diambil ketika Anda membukanya, bukan ketika daftarnya dimuat.
> Aset yang memuat beberapa foto besar tetap membuka tab Lampiran dengan cepat.

## Mengunduh dan menghapus

Ikon unduh menyimpan berkas dengan nama aslinya.

**Hapus** menghilangkan berkas secara permanen, dan memerlukan
`perm:attachment:delete`. Menghapus lampiran tidak memengaruhi apa pun pada
asetnya.

## Izin tersendiri

Lampiran dijaga terpisah dari aset, sehingga sebuah peran dapat melihat aset
tanpa melihat berkasnya.

> [!TIP]
> Jika tab Lampiran kosong atau tidak ada padahal bagian lain halaman aset
> berfungsi, berarti Anda tidak memiliki `perm:attachment:read`. Itu persoalan
> izin, bukan berkas yang hilang.

## Apa yang layak dilampirkan

Layak dilampirkan:

- Faktur atau berita acara, agar bukti pengadaan menyatu dengan asetnya
- Dokumen garansi dan kontrak servis
- Buku petunjuk, terutama untuk peralatan yang jarang dipakai
- Foto modelnya, yang membantu petugas opname

Tidak perlu dilampirkan:

- Apa pun yang berbeda per unit — gunakan
  [atribut unit](/concepts/attributes)
- Pindaian besar yang mengulang isi catatan kontrak

## Artikel terkait

- [Bagaimana cara melihat aset?](/how-do-i/view-an-asset)
- [Aset](/concepts/asset)
