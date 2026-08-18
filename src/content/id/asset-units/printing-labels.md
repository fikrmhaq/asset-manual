---
title: Mencetak label unit
description: Menempelkan label yang dapat dipindai pada barang, dan apa yang terjadi saat seseorang memindainya.
order: 20
keywords: [label, cetak, qr, kode qr, stiker, pindai, barcode, nomor inventaris]
related:
  - asset-units/identifying-units
  - concepts/asset-unit
  - how-do-i/add-an-asset-unit
---

Label menjembatani barang di rak dengan catatannya di sistem. Arahkan ponsel ke
label itu dan unitnya langsung terbuka.

## Mencetak satu label

Buka unitnya, lalu **Cetak label** pada tab Ringkasan. Sebuah lembar berisi
label akan terbuka beserta tombol **Cetak** yang menyerahkan prosesnya ke dialog
cetak bawaan peramban — jadi ukuran kertas, margin, dan pilihan pencetak
ditentukan di sana, sama seperti halaman lain.

Tampilan aplikasi tidak ikut tercetak. Lembar itu hanya berisi label.

## Mencetak semua label sebuah aset

Buka asetnya, masuk ke tab **Unit**, lalu **Cetak semua label**. Anda akan
mendapat satu lembar berisi label untuk setiap unit aset tersebut, dua per baris,
siap dipotong.

Ini urutan yang praktis saat barang datang: daftarkan asetnya beserta jumlah
unit, cetak lembarnya sekali, lalu tempelkan labelnya sambil membongkar kardus.

## Isi sebuah label

- **Kode QR**
- **Instansi** Anda
- **Nama aset**
- **Nomor inventaris**, dicetak besar
- **Klasifikasi**, berikut kode dan namanya
- **Jurusan**, jika unitnya memilikinya

## Yang sengaja tidak dicantumkan

Bukan lokasinya. Bukan kondisinya. Bukan status peminjaman, dan bukan siapa yang
sedang memegangnya.

Semua itu berubah — sering. Label dicetak sekali dan bisa menempel bertahun-tahun
pada sebuah mesin, dan tidak ada cara menariknya kembali untuk diperbaiki. Stiker
yang menyatakan sebuah laptop ada di Ruang 204 menjadi keliru begitu seseorang
membawanya keluar, dan keterangan keliru yang terlihat meyakinkan lebih buruk
daripada tidak ada keterangan sama sekali.

Semua yang berubah ada pada catatan yang dibuka kode QR. Itulah pembagiannya:
stiker menyatakan *unit yang mana ini*, catatan menyatakan *bagaimana keadaannya*.

## Apa yang terjadi saat dipindai

Kode QR berisi alamat web, bukan detail unitnya. Memindainya akan membuka
aplikasi tepat pada unit tersebut.

Karena isinya alamat, kamera ponsel mana pun dapat membacanya — tanpa aplikasi
khusus.

> [!IMPORTANT]
> Memindai **tidak** melewati proses masuk. Orang yang belum masuk akan diarahkan
> ke halaman masuk lebih dulu, lalu dibawa ke unitnya setelah berhasil. Label di
> dinding dapat dibaca siapa saja yang lewat; catatan di baliknya tidak.

Jika kode itu milik unit di instansi lain, hasilnya sama dengan kode yang tidak
pernah diterbitkan: tidak ditemukan. Pesannya menyebutkan kodenya agar Anda dapat
mencocokkannya dengan stiker di tangan.

## Jika sebuah unit belum punya nomor

Anda akan melihat **Belum ada** dan tidak ada tombol cetak.

Nomor inventaris dibentuk dari instansi pemilik, jadi unit yang asetnya belum
memiliki instansi tidak punya bahan untuk membentuknya. Tetapkan instansi pada
asetnya; unit yang didaftarkan setelah itu akan mendapat nomor. Unit lama tetap
kosong, karena nomor yang muncul belakangan tidak akan cocok dengan apa pun yang
sudah tercetak.

## Catatan praktis

- **Cetak pada ukuran yang menjaga kode QR tetap persegi dan tajam.** Mengecilkan
  label agar muat lebih banyak adalah penyebab paling umum pemindaian gagal.
- **Ketahanan terhadap kerusakan sudah diperhitungkan.** Kode QR menyimpan cukup
  cadangan untuk bertahan meski sudutnya tergores — dan itulah sebabnya nomor
  inventaris juga dicetak besar: ketika kode QR akhirnya tidak terbaca, orang
  masih dapat membaca nomornya dan mengetiknya.
- **Mencetak ulang aman.** Nomornya tidak pernah berubah, jadi label pengganti
  persis sama dengan yang digantikannya.

## Artikel terkait

- [Membedakan unit](/asset-units/identifying-units)
- [Unit aset](/concepts/asset-unit)
