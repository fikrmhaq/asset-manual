---
title: Membedakan unit
description: Dua belas laptop identik, dua belas baris identik. Cara membuatnya dapat dibedakan.
order: 10
keywords: [identifikasi, nomor seri, nomor inventaris, membedakan, yang mana, label, deskripsi]
related:
  - concepts/asset-unit
  - concepts/attributes
  - how-do-i/add-an-asset-unit
---

Unit dari aset yang sama memang identik menurut definisinya. Membuatnya dapat
dibedakan adalah sesuatu yang harus Anda lakukan dengan sengaja, dan jauh lebih
mudah dilakukan saat pembuatan daripada enam bulan kemudian.

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

Inilah cara yang dapat diandalkan dalam jangka panjang. Ia kolom yang sebenarnya,
muncul pada tab Nilai atribut unit, dan tidak dapat tertukar dengan apa pun.

> [!IMPORTANT]
> Atribut harus dikonfigurasi pada lingkup **Unit aset**, bukan lingkup Aset.
> Pada lingkup aset, kedua belas laptop berbagi satu nomor seri, yang tidak
> berguna — dan lingkup tidak dapat diubah setelah definisinya dibuat.

## Yang tidak dapat Anda lakukan

> [!LIMITATION]
> Nilai atribut **tidak dapat dicari**. Tidak ada cara mengetik nomor seri pada
> kotak pencarian lalu menemukan unit yang membawanya. Unit selalu dijangkau
> melalui asetnya: temukan "Dell Latitude 5420", buka tab Unit, lalu telusuri
> daftarnya.
>
> Hal ini perlu diketahui sebelum Anda merancang skema pelabelan berbasis nomor
> seri. Mencatat nomor seri berguna untuk identifikasi ketika barangnya sudah ada
> di hadapan Anda; ia tidak akan membantu Anda menemukan unit dari nomornya saja.

## Konvensi yang praktis

Untuk organisasi yang mendaftarkan unit secara berkelompok, cara ini berjalan
baik:

1. Beri setiap unit **deskripsi** yang memuat label fisiknya —
   "Nomor inventaris AM-0412".
2. Konfigurasikan **atribut tingkat unit** untuk nomor seri, lalu isi.
3. Tempelkan nomor inventaris yang sama pada barang fisiknya.

Dengan begitu label pada barang, deskripsi pada pemilih, dan atribut pada catatan
saling bersesuaian, dan siapa pun yang memegang barangnya dapat menemukan
catatannya.

## Artikel terkait

- [Unit Aset](/concepts/asset-unit)
- [Atribut](/concepts/attributes)
- [Bagaimana cara menambahkan unit aset?](/how-do-i/add-an-asset-unit)
