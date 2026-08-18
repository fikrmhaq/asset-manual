---
title: Klasifikasi
description: Hierarki referensi tempat setiap aset dan lokasi digolongkan, dan cara menambahkan entri sendiri.
order: 40
keywords: [klasifikasi, kode, hierarki, paling rinci, pemilih, golongan]
related:
  - concepts/category
  - concepts/attributes
  - how-do-i/create-an-asset
---

**Klasifikasi** menyatakan jenis suatu barang. Klasifikasi berasal dari hierarki
referensi pemerintah yang dibawa aplikasi — sekitar empat belas setengah ribu
entri, tersusun dari pengelompokan luas hingga jenis barang yang sangat spesifik.

Setiap [aset](/concepts/asset) dan setiap [lokasi](/concepts/location) harus
diklasifikasikan.

## Entri dari pemerintah bersifat tetap

Hierarki bawaan aplikasi berasal dari luar dan tidak dapat diubah di sini. Anda
tidak dapat mengganti nama, memindahkan, atau menghapus entri tersebut, dan
justru itulah gunanya: maknanya sama di mana pun. Anda dapat menelusuri dan
mencarinya melalui **Klasifikasi** di bilah sisi.

Setiap entri memiliki kode dua belas karakter dan sebuah nama. Kode itulah yang
membuat sebuah entri tidak ambigu, dan ia ditampilkan bersama nama di sebagian
besar tempat.

## Menambah entri sendiri

Kadang tidak ada entri pemerintah yang cocok — peralatan khusus milik instansi
Anda, atau jenis ruangan yang hanya ada di gedung Anda. Untuk hal seperti itu
Anda dapat mendaftarkan entri sendiri, dan entri tersebut akan berperilaku sama
seperti klasifikasi lain: muncul di pemilih, dapat memiliki atribut, dan ikut
terhitung dalam laporan.

Tambahan ditandai **Tambahan lokal** di mana pun ia muncul, sehingga selalu jelas
mana entri bawaan aplikasi dan mana yang didaftarkan instansi Anda.

### Di mana tambahan boleh diletakkan

Tambahan hanya boleh diletakkan pada **tingkat paling rinci** — di bawah entri
yang anak-anaknya berupa barang satuan, bukan pengelompokan lebih lanjut. Tombol
**Tambah rincian** baru muncul setelah Anda menelusuri cukup dalam; jika belum
terlihat, teruskan menelusuri ke bawah.

Ini bukan pembatasan yang mengada-ada. Menambah di bawah pengelompokan yang lebih
luas akan mengubah entri yang sudah dipakai aset menjadi pengelompokan, dan semua
aset tersebut menjadi tidak sah.

### Kodenya diberikan otomatis

Anda memilih namanya; aplikasi yang memberikan kode dua belas karakternya. Kode
diambil dari ujung jauh rentang yang tersedia sehingga tidak akan pernah bentrok
dengan kode yang muncul pada pemutakhiran dari pemerintah.

### Siapa yang dapat melihatnya

Saat menambah entri, Anda memilih apakah entri itu **hanya untuk instansi Anda**
atau untuk **semua instansi**. Entri milik satu instansi tidak terlihat oleh
instansi lain — tidak muncul di pemilih, pencarian, maupun laporan mereka.

Hanya administrator sistem yang dapat membuat entri untuk semua instansi, atau
membagikan entri yang sudah ada kepada semuanya.

> [!WARNING]
> Membagikan entri ke semua instansi tidak dapat dibatalkan. Begitu instansi lain
> dapat memakainya, menariknya kembali akan membuat aset mereka menunjuk pada
> sesuatu yang tidak dapat dilihat penggunanya.

### Mengubah nama dan menghapus

Entri yang ditambahkan instansi Anda dapat **diubah namanya** kapan saja. Kodenya
tidak pernah berubah, sehingga aset dan lokasi yang sudah memakainya tidak
terpengaruh — hanya label yang ditampilkan yang berubah.

Entri hanya dapat **dihapus** selama belum dipakai. Jika ada aset, lokasi, atau
definisi atribut yang merujuknya, penghapusan ditolak dan pesannya menyebutkan
apa yang menahannya. Pindahkan dulu catatan tersebut.

Tidak ada cara menonaktifkan entri — entri itu sedang dipakai, atau dapat dihapus
sekaligus.

## Hanya tingkat paling rinci yang dapat dipilih

Hal inilah yang paling sering membuat orang tersendat.

Saat memilih klasifikasi, pemilih hanya mengizinkan Anda memilih entri yang
**tidak memiliki turunan** — tingkat terdalam pada cabang itu. Anda dapat
menelusuri tingkat yang lebih luas untuk mencapainya, tetapi tidak dapat
menggolongkan aset pada pengelompokan yang luas.

> [!IMPORTANT]
> Jika pemilih tidak mengizinkan Anda memilih entri yang sedang Anda lihat,
> berarti entri itu masih punya turunan. Teruslah menurun sampai menemukan entri
> yang tidak punya.

Alasannya, segala hal yang bergantung pada klasifikasi — [atribut](/concepts/attributes)
mana yang berlaku, bagaimana laporan mengelompokkan — membutuhkan satu jawaban
yang tepat. Klasifikasi setengah jadi membuat pertanyaan itu tidak terjawab.

## Menggunakan pemilih

Pemilih klasifikasi muncul di mana pun klasifikasi dibutuhkan. Ia menawarkan dua
cara kerja:

- **Cari** berdasarkan nama atau kode, jika Anda tahu kira-kira yang dicari.
- **Telusuri** satu tingkat demi satu tingkat, jika belum tahu.

Jejak di bagian atas menunjukkan posisi Anda, dan Anda dapat menaikinya kembali.

## Yang ditentukan oleh klasifikasi

| Menentukan | Caranya |
|---|---|
| Atribut mana yang berlaku | Definisi atribut dikonfigurasi per klasifikasi |
| Cara laporan mengelompokkan | Laporan **Menurut klasifikasi** menghitung aset di bawah masing-masing |
| Identitas catatan | Nama dan kodenya muncul pada aset dan dalam ekspor |

## Mengubah klasifikasi sebuah aset

Anda dapat mengubahnya dengan menyunting aset. Perlu diingat, hal itu juga
mengubah **atribut mana yang berlaku** — definisi atribut melekat pada
klasifikasi, sehingga klasifikasi berbeda berarti kumpulan kolom tambahan yang
berbeda pula.

## Mengklasifikasikan lokasi

Lokasi juga diklasifikasikan, dari hierarki yang sama dan dengan aturan tingkat
paling rinci yang sama. Klasifikasi sebuah lokasi ditetapkan saat pembuatan dan
setelahnya ditampilkan sebagai detail tetap.

## Artikel terkait

- [Kategori](/concepts/category)
- [Atribut](/concepts/attributes)
- [Bagaimana cara membuat aset?](/how-do-i/create-an-asset)
