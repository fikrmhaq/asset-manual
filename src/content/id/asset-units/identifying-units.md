---
title: Membedakan unit
description: Dua belas laptop identik, dua belas baris identik. Cara membuatnya dapat dibedakan.
order: 10
keywords: [identifikasi, nomor seri, nomor inventaris, membedakan, yang mana, label, deskripsi]
related:
  - concepts/asset-unit
  - concepts/attributes
  - how-do-i/add-an-asset-unit
  - administration/inventory-code-format
---

Unit dari aset yang sama memang identik menurut definisinya. Membuatnya dapat
dibedakan adalah sesuatu yang harus Anda lakukan dengan sengaja, dan jauh lebih
mudah dilakukan saat pembuatan daripada enam bulan kemudian.

## Kode inventarisnya

Setiap unit memperoleh **kode inventaris** saat didaftarkan — misalnya
`ALM-1-2026-00042`.

**Bentuknya milik instansi Anda.** Secara bawaan kode itu terdiri atas kode
instansi, tahun, dan nomor urut, tetapi administrator dapat merancangnya ulang —
berdasarkan klasifikasi, berdasarkan bagian, dengan awalan tetap, atau memakai
garis miring alih-alih tanda hubung. Lihat
[Format kode inventaris](/administration/inventory-code-format).

Apa pun bentuknya, kode itu **tidak pernah berubah** setelah diterbitkan: tidak
ketika unit berpindah bagian, tidak ketika asetnya dipindahkan ke instansi lain,
tidak ketika kode instansi Anda sendiri diubah, dan tidak ketika formatnya
dirancang ulang.

Justru itulah maksudnya. Begitu sebuah kode tercetak pada stiker dan stiker itu
menempel pada barang, tidak boleh ada tindakan sistem yang membuat stiker
tersebut menjadi keliru. Konsekuensinya, instansi yang mengubah formatnya akan
memakai dua bentuk berdampingan untuk sementara waktu, dan keduanya benar.

Kode tersebut tampil di bagian atas tab Ikhtisar unit, dan dapat Anda cetak
sebagai label — lihat [Mencetak label unit](/asset-units/printing-labels).

> [!NOTE]
> **Anda mungkin diminta mengetik sebagiannya.** Bila format instansi Anda
> memuat **Komposisi nomor**, pendaftaran unit akan menanyakan nilai tersebut —
> nomor yang sudah dicatat instansi Anda dalam registernya sendiri. Selebihnya
> diisikan untuk Anda, dan kode secara keseluruhan tetap disusun oleh aplikasi.
> Lihat [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit).

> [!NOTE]
> Unit yang asetnya tidak memiliki instansi pemilik menampilkan **Belum
> ditetapkan**. Tidak ada instansi, sehingga tidak ada format dan tidak ada bahan
> untuk menyusun kode. Tetapkan instansi pada asetnya, dan unit yang didaftarkan
> setelahnya akan memperoleh kode.

## Tiga hal yang membedakan sebuah unit

### 1. Deskripsinya

Satu-satunya kolom yang ditawarkan saat membuat unit, dan kolom yang muncul pada
setiap pemilih — ketika menambahkan unit ke peminjaman atau transaksi, deskripsi
inilah yang sebagian besar menjadi pegangan Anda.

> [!TIP]
> Tulislah sesuatu yang awet dan spesifik. Potongan nomor seri, nomor
> inventaris, atau ciri permanen dapat dipakai. Tempatnya saat ini tidak — unit
> berpindah, dan deskripsi bertuliskan "Ruang 204" langsung keliru pada
> perpindahan pertama.

### 2. Lokasi dan kondisi terkininya

Ditampilkan pada setiap daftar unit. Berguna untuk menemukan barang sekarang,
tidak berguna sebagai penanda identitas dari waktu ke waktu.

### 3. Nilai atribut tingkat unitnya

Inilah jawaban yang tepat untuk nomor seri, nomor inventaris, dan nomor
registrasi. Administrator mengonfigurasi sebuah atribut pada lingkup **unit**
terhadap klasifikasinya, dan setiap unit kemudian memiliki nilainya sendiri.
Lihat [Atribut](/concepts/attributes).

Inilah cara yang benar-benar berskala. Ia adalah kolom sungguhan, tampil pada tab
Nilai atribut unit, dan tidak dapat tertukar dengan apa pun.

> [!IMPORTANT]
> Atributnya harus dikonfigurasi pada lingkup **Unit aset**, bukan lingkup Aset.
> Pada lingkup aset, dua belas laptop itu berbagi satu nomor seri, yang tidak ada
> gunanya — dan lingkup tidak dapat diubah setelah definisinya dibuat.

## Yang tidak dapat Anda lakukan

> [!LIMITATION]
> Nilai atribut **tidak dapat dicari**. Tidak ada cara mengetik nomor seri pada
> kotak pencarian lalu menemukan unit yang membawanya. Selain memindai label,
> unit dijangkau melalui asetnya: temukan "Dell Latitude 5420", buka tab Unit,
> lalu telusuri daftarnya.
>
> Hal ini perlu diketahui sebelum Anda merancang skema apa pun berbasis nomor
> seri. Mencatat nomor seri berguna untuk identifikasi ketika barangnya sudah ada
> di hadapan Anda; ia tidak akan membantu Anda menemukan unit dari nomornya saja.
> Kode inventaris adalah penanda yang justru bekerja dua arah, karena memindai
> labelnya langsung menuju catatannya.

## Konvensi yang praktis

Untuk organisasi yang mendaftarkan unit secara berkelompok, cara ini berjalan
baik:

1. **Cetak labelnya** lalu tempelkan pada barang fisiknya. Ini menutup jalur dari
   barang menuju catatan — pindai, atau ketik kodenya.
2. Beri setiap unit **deskripsi** yang menyebut sesuatu yang permanen pada barang
   tersebut.
3. Konfigurasikan **atribut tingkat unit** untuk nomor seri, lalu isi.

Langkah pertama adalah yang menutup jarak antara rak dan sistem. Dua langkah
lainnya yang memungkinkan Anda membedakan dua unit di layar, di tempat yang tidak
ada stikernya untuk dilihat.

## Artikel terkait

- [Unit Aset](/concepts/asset-unit)
- [Atribut](/concepts/attributes)
- [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit)
