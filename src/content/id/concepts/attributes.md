---
title: Atribut
description: Kolom tambahan per klasifikasi — dan alasan sebagian melekat pada aset, sebagian pada unit.
order: 60
keywords: [atribut, definisi atribut, kolom tambahan, nomor seri, lingkup, kustom]
related:
  - concepts/asset-vs-asset-unit
  - concepts/classification
  - how-do-i/configure-attribute-definitions
---

Kolom bawaan pada sebuah aset — nama, klasifikasi, vendor, deskripsi — sama saja
untuk laptop maupun mesin pemotong rumput. **Atribut** adalah cara organisasi
Anda menambahkan kolom yang khas untuk satu jenis barang.

Administrator mendefinisikannya; pengguna lain mengisinya.

## Atribut melekat pada klasifikasi

Sebuah definisi atribut terikat pada satu
[klasifikasi](/concepts/classification). Aset yang digolongkan pada klasifikasi
itu memperoleh kolom tambahannya; yang lain tidak.

Jadi "Ukuran layar" dapat ada untuk laptop tanpa memenuhi formulir untuk kursi.

> [!NOTE]
> Mengubah klasifikasi sebuah aset berarti mengubah atribut mana yang berlaku.
> Formulir penyuntingan mengingatkan hal ini.

## Bertingkat aset atau bertingkat unit

Setiap definisi juga menyatakan **apa yang dijelaskannya**, dan bagian inilah
yang penting untuk ditetapkan dengan benar.

| Lingkup | Menjelaskan | Diisi | Contoh |
|---|---|---|---|
| **Aset** | Jenis barangnya | Sekali, pada aset | Ukuran layar, model prosesor, kapasitas tempat duduk |
| **Unit aset** | Satu barang fisik | Terpisah pada setiap unit | Nomor seri, nomor inventaris, nomor registrasi |

Ujinya sederhana: *mungkinkah dua barang identik memiliki nilai yang berbeda?*
Jika ya, itu atribut unit.

Menaruh nomor seri pada tingkat aset membuat dua belas laptop berbagi satu nomor
seri, yang tidak berguna. Menaruh ukuran layar pada tingkat unit membuat Anda
mengetik angka yang sama dua belas kali.

> [!IMPORTANT]
> Lingkup dan klasifikasi bersifat **permanen** begitu definisi dibuat. Keduanya
> tidak dapat diubah setelahnya, karena nilai yang sudah tercatat akan kehilangan
> makna. Menetapkan keduanya dengan benar sejak awal lebih penting daripada hal
> lain mengenai atribut.

## Jenis atribut

| Jenis | Menerima |
|---|---|
| Teks | Teks bebas |
| Angka | Sebuah angka, dapat disertai satuan |
| Ya atau tidak | Kotak centang |
| Tanggal | Sebuah tanggal |
| Pilihan | Dimaksudkan untuk daftar pilihan tetap |
| Referensi | Penunjuk ke catatan lain |

Hanya atribut **Angka** yang dapat membawa satuan — "Ukuran layar" dalam inci,
"Kapasitas" dalam liter. Satuan dikelola melalui
[Data referensi](/administration/reference-lookups).

> [!LIMITATION]
> Atribut **Pilihan** tidak memiliki tempat penyimpanan untuk daftar pilihannya,
> sehingga dalam praktiknya berperilaku seperti teks bebas: apa pun yang diketik
> akan diterima. Formulir definisi maupun formulir pengisian nilai menyatakan hal
> ini. Jika Anda membutuhkan nilai yang konsisten, sepakati bersama rekan kerja
> dan periksa secara manual — aplikasi tidak akan memaksakannya.

## Atribut wajib

Sebuah definisi dapat ditandai wajib. Atribut wajib harus terisi sebelum kumpulan
nilai dapat disimpan.

## Mengisi nilai

Nilai disunting pada tabnya sendiri, bukan pada formulir pembuatan:

- **Atribut aset** — tab **Nilai atribut** pada aset
- **Atribut unit** — tab **Nilai atribut** pada unit

Setiap tab menampilkan seluruh atribut yang berlaku untuk klasifikasi dan lingkup
tersebut, sehingga tab itu sekaligus formulir dan catatannya. Menyimpan akan
mengganti seluruh kumpulan nilai sekaligus.

Jika sebuah klasifikasi tidak memiliki atribut yang dikonfigurasi, tab tersebut
menyatakannya — itu normal, bukan kerusakan.

## Menonaktifkan definisi

Definisi dinonaktifkan, bukan dihapus. Nilai yang sudah tercatat tetap tersimpan;
kolomnya berhenti muncul pada catatan baru.

## Artikel terkait

- [Aset vs Unit Aset](/concepts/asset-vs-asset-unit)
- [Klasifikasi](/concepts/classification)
- [Bagaimana cara mengatur definisi atribut?](/how-do-i/configure-attribute-definitions)
