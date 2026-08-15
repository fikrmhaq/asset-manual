---
title: Bagaimana cara melihat riwayat audit?
description: Mengetahui siapa yang mengubah sebuah catatan, dan apa yang diubahnya.
order: 370
task: true
permissions:
  - audit-log:read
keywords: [audit, siapa mengubah, jejak, telusuri, pertanggungjawaban, log]
related:
  - concepts/audit-log
  - how-do-i/view-unit-history
---

## Untuk apa ini

Menemukan entri pada [log audit](/concepts/audit-log) — catatan otomatis
mengenai siapa yang mengubah catatan mana, dan kapan.

Gunakan untuk menjawab "siapa yang melakukan ini?". Untuk "di mana barang ini
pada bulan Maret?", gunakan [riwayat](/how-do-i/view-unit-history) unitnya.

## Langkah-langkah

1. Buka **Laporan & Audit › Log audit**.
2. Persempit daftarnya dengan penyaring.
3. Pilih sebuah entri untuk melihat persis apa yang berubah.

## Penyaring

| Penyaring | Yang diterima |
|---|---|
| Jenis entitas | Jenis catatannya — `Asset`, `Borrowing`, `Contract`… |
| ID entitas | Pengenal persis satu catatan |
| Pelaku | Siapa yang melakukan perubahan |
| Tindakan | Dibuat, Diubah, Dihapus, Status diubah |
| Rentang tanggal | Tanggal awal, tanggal akhir, atau keduanya |

> [!NOTE]
> Jenis entitas adalah nama catatan internal aplikasi dan **tidak
> diterjemahkan** — keduanya sama di kedua bahasa, karena itulah yang dicocokkan
> penyaring.

## Menelusuri satu catatan

Pencarian yang paling terarah adalah jenis entitas ditambah ID entitas. Untuk
memperoleh ID catatan yang sedang Anda lihat, ambil dari bilah alamat halaman
catatan tersebut — pengenal panjang di bagian akhir.

Saring dengan ID itu dan Anda memperoleh semua yang pernah terjadi pada satu
catatan tersebut, secara berurutan.

## Membaca sebuah entri

Membuka sebuah entri menampilkan:

- **Kapan** kejadiannya, dan **siapa** pelakunya
- **Apa** yang berubah — kolom yang terpengaruh, beserta nilai sebelum dan
  sesudah
- **Alamat IP** asal perubahan

Hanya kolom yang benar-benar berubah yang dicantumkan. Entri tanpa nilai apa pun
berarti perubahan itu tidak mengubah kolom yang dipantau.

## "Sistem" sebagai pelaku

Sebagian entri menampilkan **Sistem** di tempat nama orang. Itu perubahan yang
dilakukan aplikasi sendiri, bukan oleh pengguna — contoh paling jelas adalah
penyapuan semalam yang menandai peminjaman terlambat. Itu nilai yang nyata, bukan
nilai yang hilang.

## Tidak ada yang dapat diubah di sini

Tidak ada penyuntingan dan tidak ada penghapusan pada log audit, bagi siapa pun.
Entri bersifat permanen.

## Catatan mengenai lingkup

> [!IMPORTANT]
> Berbeda dari yang lain, log audit **tidak terbatas pada instansi Anda** — ia
> mencakup semuanya, dan layarnya menyatakan hal itu. Siapa pun yang memiliki
> `perm:audit-log:read` dapat melihat perubahan pada catatan yang selain itu
> tidak dapat mereka lihat. Izin ini sebaiknya diberikan secara terbatas.

## Tugas terkait

- [Log audit](/concepts/audit-log)
- [Bagaimana cara melihat riwayat unit?](/how-do-i/view-unit-history)
