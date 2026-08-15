---
title: Log audit
description: Catatan siapa mengubah apa yang hanya dapat dibaca, dan bedanya dengan riwayat unit.
order: 200
keywords: [audit, log, jejak, siapa mengubah, pertanggungjawaban, pelacakan]
related:
  - concepts/history
  - how-do-i/view-audit-history
---

**Log audit** mencatat perubahan pada catatan-catatan penting: apa yang diubah,
oleh siapa, dan kapan. Ia ditulis aplikasi secara otomatis — tidak ada yang
memutuskan untuk membuat entri audit.

## Hanya dapat dibaca, secara permanen

> [!IMPORTANT]
> Entri audit tidak pernah dapat diubah atau dihapus, oleh siapa pun, termasuk
> administrator. Tidak ada menu tindakan pada layar audit dan tidak ada izin yang
> memungkinkannya. Justru itulah intinya: jejak yang dapat Anda ubah tidak
> membuktikan apa pun.

## Isi sebuah entri

| | |
|---|---|
| Kapan | Saat perubahan terjadi |
| Pelaku | Pengguna yang melakukannya, atau **Sistem** untuk perubahan oleh aplikasi sendiri |
| Tindakan | Dibuat, Diubah, Dihapus, atau Status diubah |
| Entitas | Jenis catatannya, dan catatan yang mana |
| Sebelum / sesudah | Nilai kolom yang berubah |
| Rincian permintaan | Alamat IP asal perubahan |

Membuka sebuah entri menampilkan kolom yang berubah secara berdampingan, sebelum
dan sesudah. Kolom yang tidak berubah tidak dicantumkan.

## "Sistem" sebagai pelaku

Sebagian perubahan tidak dilakukan oleh orang. Contoh paling jelas adalah
penyapuan semalam yang menandai peminjaman terlambat: tidak ada yang menekan
tombol, sehingga pelakunya dicatat sebagai **Sistem**. Itu nilai yang nyata,
bukan nilai yang hilang.

## Log audit atau riwayat unit?

Keduanya mudah tertukar dan menjawab pertanyaan yang berbeda.

| | [Riwayat unit](/concepts/history) | Log audit |
|---|---|---|
| Subjek | Satu barang fisik | Catatan apa pun dalam aplikasi |
| Mencatat | Tempatnya, kondisinya, dan statusnya | Kolom mana pada sebuah catatan yang berubah |
| Ditulis oleh | Anda, secara sengaja | Aplikasi, secara otomatis |
| Menjawab | "Di mana barang ini pada bulan Maret?" | "Siapa yang mengubah ini, dan kapan?" |
| Pembaca | Siapa pun yang mengoperasikan sistem | Orang yang sedang menelusuri |

Memindahkan sebuah unit menghasilkan keduanya: entri riwayat yang menjelaskan
perpindahannya, dan entri audit yang mencatat bahwa catatannya berubah.

## Lingkup

> [!NOTE]
> Berbeda dari hampir semua hal lain, log audit **tidak terbatas pada instansi
> Anda** — ia mencakup semuanya, dan layarnya menyatakan hal itu. Aksesnya karena
> itu sepenuhnya dikendalikan oleh izin `perm:audit-log:read`, yang sebaiknya
> diberikan secara terbatas.

## Menemukan sebuah entri

Penyaring: jenis entitas, ID entitas, pelaku, tindakan, dan rentang tanggal.
Jenis entitas adalah nama catatan milik aplikasi — `Asset`, `Borrowing`,
`Contract` — dan tidak diterjemahkan, karena itulah yang dicocokkan penyaring.

Lihat [Bagaimana cara melihat riwayat audit?](/how-do-i/view-audit-history).

## Artikel terkait

- [Riwayat](/concepts/history)
- [Bagaimana cara melihat riwayat audit?](/how-do-i/view-audit-history)
