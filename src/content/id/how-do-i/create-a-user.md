---
title: Bagaimana cara membuat pengguna?
description: Menambahkan akun yang dapat masuk, dan memberinya peran yang diperlukan.
order: 300
task: true
permissions:
  - user:create
  - user-role:create
keywords: [pengguna, akun, tambah pengguna, pegawai, akun baru, kata sandi]
related:
  - how-do-i/create-a-role
  - concepts/roles-and-permissions
---

## Untuk apa ini

Membuat akun yang dapat masuk ke aplikasi. Akun tanpa peran dapat masuk tetapi
tidak dapat melakukan apa pun, sehingga membuat pengguna sebenarnya dua
pekerjaan: akunnya, lalu perannya.

## Sebelum memulai

- Tentukan **peran** apa yang dibutuhkan orang tersebut. Jika peran yang tepat
  belum ada, [buat lebih dahulu](/how-do-i/create-a-role).
- Tentukan **instansinya**. Instansi membatasi apa yang dapat mereka lihat,
  kecuali salah satu perannya bersifat menyeluruh.
- Siapkan kata sandi awal — minimal 12 karakter. Anda perlu menyampaikannya
  kepada mereka melalui sarana di luar aplikasi ini.

> [!IMPORTANT]
> Tidak ada pengaturan ulang kata sandi dan pengguna tidak dapat mengubah kata
> sandinya sendiri. Kata sandi yang Anda tetapkan di sini akan mereka pakai
> seterusnya. Lihat batasan di bawah.

## Langkah-langkah

### 1. Buat akunnya

1. Buka **Organisasi › Pengguna**.
2. Pilih **Pengguna baru**.
3. Isi kolom-kolom di bawah.
4. Pilih **Buat**.

### 2. Berikan perannya

1. Buka pengguna yang baru dibuat lalu masuk ke tab **Peran**.
2. Pilih sebuah peran lalu pilih **Berikan peran**.
3. Ulangi untuk setiap peran yang diperlukan.

## Rujukan kolom

| Kolom | Wajib | Keterangan |
|---|---|---|
| Nama pengguna | Ya | Maksimal 25 karakter. **Permanen** — ia mengidentifikasi akun dalam jejak audit |
| Kata sandi | Ya | Minimal 12 karakter |
| Nama depan | Ya | Maksimal 150 karakter |
| Nama belakang | Ya | Maksimal 150 karakter |
| Informasi kontak | Tidak | Maksimal 500 karakter |
| Instansi | Tidak | Membatasi apa yang dapat mereka lihat, kecuali ada peran menyeluruh |

> [!IMPORTANT]
> **Nama pengguna tidak dapat diubah** setelah dibuat. Nama itulah yang
> mengidentifikasi akun pada log audit, dan mengizinkannya berubah akan merusak
> jejak tersebut. Nama orang dan informasi kontak dapat dikoreksi dengan bebas.

## Apa yang terjadi setelahnya

Pengguna dapat langsung masuk dengan kata sandi yang Anda tetapkan. Navigasinya
dibangun dari peran yang Anda berikan — tanpa peran, mereka akan melihat pesan
bahwa tidak ada modul yang tersedia.

Perubahan peran berlaku seketika; pengguna tidak perlu keluar lalu masuk lagi.

## Kata sandi

> [!LIMITATION]
> Aplikasi tidak memiliki fitur ubah kata sandi maupun atur ulang kata sandi.
> Pengguna tidak dapat mengubah kata sandinya sendiri, dan tidak ada tautan "lupa
> kata sandi" pada layar masuk. Jika seseorang lupa, administrator harus
> menetapkan yang baru lalu menyampaikannya.
>
> Secara praktis: gunakan kata sandi awal yang baik, sampaikan dengan aman, dan
> bersiaplah sesekali mengulanginya.

## Menonaktifkan pengguna

Pengguna dinonaktifkan, bukan dihapus. Menonaktifkan akan **langsung
mengeluarkannya** dan mencegahnya masuk kembali; mengaktifkan kembali memulihkan
aksesnya dengan kata sandi yang lama.

## Tugas terkait

- [Bagaimana cara membuat peran?](/how-do-i/create-a-role)
- [Peran dan izin](/concepts/roles-and-permissions)
