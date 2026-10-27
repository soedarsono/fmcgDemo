# fmcgDemo

[Buka demo publik](https://soedarsono.github.io/fmcgDemo/)

Pratinjau interaktif tampilan FMCG Workspace berbasis Odoo yang telah disesuaikan. Tersedia diagram alur, menu hover, tab aktif ungu, daftar data, formulir, pengaturan, pratinjau impor, dan contoh laporan keuangan. Bahasa Indonesia dan Inggris dapat dipilih melalui bilah atas.

## Cara mencoba

- Arahkan kursor ke ikon aplikasi atau kartu diagram, lalu pilih fungsi.
- Buka **Database → Alamat** untuk mencari 320 toko fiktif yang mencakup 38 provinsi Indonesia.
- Klik baris untuk membuka rincian, ubah kolom, lalu simpan. Perubahan hanya tersimpan di browser Anda.
- Coba filter aktivitas stok, kelompok harga, promosi, dan pemeriksaan alamat.
- Buka Akuntansi untuk contoh laba rugi, neraca, dan arus kas; tersedia ekspor CSV serta cetak/PDF.
- Seret CSV/TXT/TSV ke mana saja dalam aplikasi untuk pratinjau lokal, atau gunakan contoh rekening koran yang disediakan.

Demo ini menampilkan tata letak dan interaksi, **bukan server Odoo yang berjalan**. Tidak ada PostgreSQL, backend Odoo, login, atau koneksi bank. Seluruh data contoh bersifat fiktif; tidak ada ekspor pelanggan asli atau kredensial. Pencatatan akuntansi, kepatuhan pajak, rekonsiliasi, dan pemrosesan transaksi terhubung tidak diimplementasikan pada situs ini. Laporan memakai buku besar ilustratif tetap yang seimbang dan tidak berubah saat contoh transaksi diedit. Berkas impor hanya dipratinjau di browser dan tidak diunggah oleh aplikasi.

Tombol **DEMO** menjelaskan batasan dan menyediakan reset data contoh. Nama, warna, dan perubahan disimpan di local storage browser, tidak dibagikan kepada pengunjung lain. GitHub Pages menyajikan berkas statis dan dapat memiliki log akses hosting normal.

## Pengembangan

Tidak perlu proses build atau instalasi paket. Sajikan folder ini melalui server HTTP statis. Jika Python sudah tersedia:

```sh
python -m http.server 8080
```

Buka `http://localhost:8080/`. Jangan membuka `index.html` langsung karena aplikasi memakai JavaScript modules. GitHub Pages menerbitkan root branch `main`. Navigasi memakai hash sehingga tautan halaman tetap bekerja saat dimuat ulang.

`app.js`: tampilan dan interaksi. `app.css`: gaya. `routes.js`: menu dan halaman. `flow-data.js`: diagram. `i18n.js`: terjemahan. `data.js`: data fiktif serta laporan ilustratif. `assets/`: ikon aplikasi.

Lisensi LGPL-3.0-or-later; lihat `LICENSE.txt`, `NOTICE.md`, dan `ODOO-COPYRIGHT.txt`. Demo independen ini bukan layanan resmi Odoo, BCA, Mandiri, atau ND6.

[English README](README.md)
