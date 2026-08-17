---
title: Bagaimana cara membuat aset?
description: Mendaftarkan catatan induk baru untuk satu jenis barang.
order: 10
task: true
permissions:
  - asset:create
keywords: [aset baru, mendaftarkan, tambah aset, buat aset]
related:
  - concepts/asset-vs-asset-unit
  - how-do-i/add-an-asset-unit
  - how-do-i/register-an-asset-from-a-contract
---

## Untuk apa ini

Membuat aset berarti memasukkan catatan induk baru ke registri — catatan untuk
satu *jenis* barang, misalnya "laptop Dell Latitude 5420". Barang fisik
satuannya ditambahkan setelahnya sebagai
[unit aset](/concepts/asset-vs-asset-unit).

Gunakan jalur ini untuk apa pun yang tidak berasal dari kontrak pengadaan: barang
hibah, barang buatan sendiri, dan catatan yang dipindahkan dari sistem lama. Jika
barang tersebut **memang** berasal dari kontrak, gunakan
[Mendaftarkan aset dari kontrak](/how-do-i/register-an-asset-from-a-contract) —
jalur itu mengisikan sebagian besar formulir ini untuk Anda dan mengaitkan aset
ke baris kontraknya secara otomatis.

## Sebelum memulai

Siapkan:

- **Nama** untuk jenis barangnya.
- **Klasifikasi** tempatnya bernaung. Klasifikasi adalah hierarki referensi baku;
  Anda menelusuri atau mencarinya lalu memilih tingkat paling rinci.
- **Instansi** pemiliknya, jika bukan instansi Anda.
- **Vendor** — pabrikan atau merek — jika ingin dicatat.

## Langkah-langkah

1. Buka **Aset** di bilah sisi.
2. Pilih **Aset baru**.
3. Masukkan **Nama**.
4. Pilih **Klasifikasi**. Pemilih akan terbuka; cari sebuah istilah atau
   persempit satu tingkat demi satu tingkat, lalu pilih.
5. Biarkan **Instansi** pada *Gunakan instansi saya*, atau pilih yang lain.
6. Pilih **Vendor**, atau biarkan pada *Tanpa vendor*.
7. Pilih **Kontrak** yang menjadi dasar pembeliannya, atau biarkan pada *Tanpa
   catatan pengadaan*.
8. Tambahkan **Deskripsi** bila membantu pembaca catatan berikutnya.
9. Pilih **Buat aset**.

![Formulir Aset baru](/screenshots/assets/create-asset.gif)

## Rujukan kolom

| Kolom | Wajib | Catatan |
|---|---|---|
| Nama | Ya | Maksimal 255 karakter |
| Klasifikasi | Ya | Hanya tingkat paling rinci yang dapat dipilih |
| Instansi | Tidak | Bawaannya instansi Anda |
| Vendor | Tidak | Pabrikan atau merek. Hanya tampil jika Anda dapat melihat vendor |
| Kontrak | Tidak | Kontrak pengadaan yang menjadi dasar pembeliannya. Hanya tampil jika Anda dapat melihat kontrak |
| Deskripsi | Tidak | Maksimal 5.000 karakter |

> [!NOTE]
> Kolom **Kontrak** bersifat opsional dan masih dapat diisi atau diubah kemudian
> melalui formulir ubah. Mengosongkannya adalah keadaan yang wajar dan
> terdokumentasi — hibah, barang buatan sendiri, dan hasil migrasi memang tidak
> memiliki kontrak.
>
> Jika barangnya memang berasal dari kontrak yang sudah ada di sistem, lebih baik
> [daftarkan dari kontrak tersebut](/how-do-i/register-an-asset-from-a-contract).
> Jalur itu sekaligus menautkan setiap unit ke rincian kontrak asalnya, yang
> tidak dilakukan hanya dengan memilih kontrak di sini.

## Apa yang terjadi setelahnya

Aset dibuat dan Anda tiba di halaman detailnya. Aset itu **belum memiliki unit**,
dan tab Unit menyatakannya secara jelas: aset tanpa unit adalah catatan atas
sesuatu yang belum diterima.

Selanjutnya Anda biasanya akan:

1. [Menambahkan unit aset](/how-do-i/add-an-asset-unit) — satu per barang fisik.
2. Mengisi **Nilai atribut** yang dikonfigurasi untuk klasifikasi tersebut.
3. [Mencatat lokasi setiap unit](/how-do-i/assign-a-location) dan kondisinya.

## Tugas terkait

- [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit)
- [Bagaimana cara mendaftarkan aset dari kontrak?](/how-do-i/register-an-asset-from-a-contract)
