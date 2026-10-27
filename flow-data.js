export const NODES=[
  {
    "key": "database",
    "title": "Database",
    "subtitle": "Pelanggan · Produk · Daftar harga",
    "root": "fmcg_database.menu_database_root",
    "icon": "database",
    "color": "#79567e",
    "files": "database.py · res_partner.py · product_pricelist.py",
    "hint": "Mulai dari pelanggan, alamat, produk, dan daftar harga. Data induk yang sama dipakai semua transaksi. Address Check menandai toko yang perlu ditinjau.",
    "links": [
      {
        "xmlid": "fmcg_database.menu_products",
        "label": "Produk"
      },
      {
        "xmlid": "fmcg_database.menu_customers",
        "label": "Pelanggan"
      },
      {
        "xmlid": "fmcg_database.menu_pricelists",
        "label": "Daftar harga"
      },
      {
        "xmlid": "fmcg_database.menu_addresses",
        "label": "Alamat"
      },
      {
        "xmlid": "fmcg_database.menu_address_review",
        "label": "Address Check"
      },
      {
        "xmlid": "fmcg_database.menu_quotations",
        "label": "Penawaran"
      }
    ]
  },
  {
    "key": "sales",
    "title": "Penjualan",
    "subtitle": "Pesanan · Harga · Promosi",
    "root": "sale.sale_menu_root",
    "icon": "shopping_cart",
    "color": "#aa7d36",
    "files": "sale_order.py · pricing.py",
    "hint": "Pilih pelanggan → periksa daftar harga → isi produk dan jumlah → terapkan diskon atau bonus → konfirmasi pesanan. Lanjutkan ke pengiriman dan faktur.",
    "links": [
      {
        "xmlid": "sale.menu_sale_order",
        "label": "Pesanan penjualan"
      },
      {
        "xmlid": "sale.menu_sale_quotations",
        "label": "Penawaran"
      },
      {
        "xmlid": "fmcg_pricing.menu_pricing_home",
        "label": "Harga & promosi"
      },
      {
        "xmlid": "sale.menu_product_pricelist_main",
        "label": "Daftar harga"
      },
      {
        "xmlid": "sale.res_partner_menu",
        "label": "Pelanggan"
      }
    ]
  },
  {
    "key": "stock",
    "title": "Persediaan",
    "subtitle": "Penerimaan · Pengiriman · Stok",
    "root": "stock.menu_stock_root",
    "icon": "inventory",
    "color": "#208f83",
    "files": "stock_move.py · stock_quant.py",
    "hint": "Validasi barang yang benar-benar diterima atau dikirim. Stok fokus menampilkan barang dengan stok atau transaksi terbaru. Snapshot ND6 adalah referensi, belum menjadi mutasi stok Odoo.",
    "links": [
      {
        "xmlid": "stock.in_picking",
        "label": "Penerimaan barang"
      },
      {
        "xmlid": "stock.out_picking",
        "label": "Pengiriman barang"
      },
      {
        "xmlid": "stock.menu_product_stock",
        "label": "Laporan stok"
      },
      {
        "xmlid": "stock.menu_reordering_rules_replenish",
        "label": "Pengadaan ulang"
      },
      {
        "xmlid": "fmcg_nd6_stock_import.menu_nd6_stock",
        "label": "Stok sumber ND6"
      }
    ]
  },
  {
    "key": "purchase",
    "title": "Pembelian",
    "subtitle": "Pemasok · Pesanan beli",
    "root": "purchase.menu_purchase_root",
    "icon": "shopping_bag",
    "color": "#cf8063",
    "files": "purchase_order.py",
    "hint": "Pilih pemasok, isi produk dan harga beli, lalu konfirmasi pesanan. Terima barang di Persediaan dan cocokkan tagihan pemasok di Akuntansi.",
    "links": [
      {
        "xmlid": "purchase.menu_purchase_rfq",
        "label": "Permintaan harga"
      },
      {
        "xmlid": "purchase.menu_purchase_form_action",
        "label": "Pesanan pembelian"
      },
      {
        "xmlid": "purchase.menu_product_pricelist_action2_purchase",
        "label": "Daftar harga pemasok"
      },
      {
        "xmlid": "purchase.menu_procurement_partner_contact_form",
        "label": "Pemasok"
      },
      {
        "xmlid": "trial_accounting.menu_bills",
        "label": "Tagihan pemasok"
      }
    ]
  },
  {
    "key": "accounting",
    "title": "Akuntansi",
    "subtitle": "Faktur · Pajak · Laporan",
    "root": "trial_accounting.menu_root",
    "icon": "description",
    "color": "#3d7da8",
    "files": "account_move.py · financial_reports.py",
    "hint": "Faktur dan pembayaran yang diposting membentuk jurnal. Periksa buku besar, pajak, laba rugi, neraca, dan arus kas. Draf belum termasuk dalam laporan keuangan.",
    "links": [
      {
        "xmlid": "trial_accounting.menu_invoices",
        "label": "Faktur pelanggan"
      },
      {
        "xmlid": "trial_accounting.menu_customer_payments",
        "label": "Pembayaran pelanggan"
      },
      {
        "xmlid": "trial_accounting.menu_bills",
        "label": "Tagihan pemasok"
      },
      {
        "xmlid": "trial_accounting.menu_financial_reports",
        "label": "Laporan keuangan"
      },
      {
        "xmlid": "trial_accounting.menu_ledger",
        "label": "Buku besar"
      },
      {
        "xmlid": "fmcg_pricing.menu_pricing_audit_accounting",
        "label": "Jejak harga & promosi"
      },
      {
        "xmlid": "fmcg_bank_import.menu_bank_review",
        "label": "Tinjauan & pencocokan bank"
      }
    ]
  },
  {
    "key": "nd6",
    "title": "Impor ND6",
    "subtitle": "Pelanggan · Produk · Snapshot stok",
    "root": "fmcg_nd6_import.menu_nd6_import",
    "app": "fmcg_database.menu_database_root",
    "icon": "upload_file",
    "color": "#aa7d36",
    "files": "customer_import.py · product_import.py · stock_import.py",
    "hint": "Letakkan file ekspor ND6 di aplikasi, periksa format dan pratinjau, lalu impor. Tinjau alamat yang ditandai. Snapshot stok tidak otomatis membuat stok atau jurnal.",
    "links": [
      {
        "xmlid": "fmcg_nd6_import.menu_nd6_import",
        "label": "Impor pelanggan"
      },
      {
        "xmlid": "fmcg_nd6_product_import.menu_product_import",
        "label": "Impor produk & harga"
      },
      {
        "xmlid": "fmcg_nd6_stock_import.menu_stock_import",
        "label": "Impor snapshot stok"
      },
      {
        "xmlid": "fmcg_database.menu_address_review",
        "label": "Periksa alamat pelanggan"
      }
    ]
  },
  {
    "key": "bank",
    "title": "Bank BCA / Mandiri",
    "subtitle": "Rekening koran · Pelunasan piutang",
    "root": "fmcg_bank_import.menu_bank_import",
    "app": "trial_accounting.menu_root",
    "icon": "account_balance",
    "color": "#3d7da8",
    "files": "bank_import.py · csv_parser.py",
    "hint": "Impor CSV rekening koran dan cocokkan transfer dengan faktur terbuka. Kecocokan jelas dapat direkonsiliasi; baris ambigu dan biaya perlu ditinjau sebelum pencatatan.",
    "links": [
      {
        "xmlid": "fmcg_bank_import.menu_bank_import",
        "label": "Impor rekening koran"
      },
      {
        "xmlid": "fmcg_bank_import.menu_bank_review",
        "label": "Tinjauan & pencocokan bank"
      },
      {
        "xmlid": "trial_accounting.menu_invoices",
        "label": "Faktur pelanggan"
      },
      {
        "xmlid": "trial_accounting.menu_customer_payments",
        "label": "Pembayaran pelanggan"
      }
    ]
  }
];
export const EDGES=[
  {
    "key": "master",
    "title": "Data induk bersama",
    "app": "fmcg_database.menu_database_root",
    "color": "#79567e",
    "d": "M580 180 V230 H190 V286 M580 230 H1010 V286 M580 230 H600 V286",
    "x": 600,
    "y": 221,
    "hint": "Pelanggan, barang, dan harga berasal dari master yang sama. Memperbarui data induk tidak berarti mengganti riwayat transaksi yang sudah diposting.",
    "links": [
      {
        "xmlid": "fmcg_database.menu_products",
        "label": "Produk"
      },
      {
        "xmlid": "fmcg_database.menu_customers",
        "label": "Pelanggan"
      },
      {
        "xmlid": "fmcg_database.menu_pricelists",
        "label": "Daftar harga"
      },
      {
        "xmlid": "fmcg_database.menu_addresses",
        "label": "Alamat"
      },
      {
        "xmlid": "fmcg_database.menu_address_review",
        "label": "Address Check"
      },
      {
        "xmlid": "fmcg_database.menu_quotations",
        "label": "Penawaran"
      }
    ]
  },
  {
    "key": "nd6-import",
    "title": "Impor data",
    "app": "fmcg_database.menu_database_root",
    "color": "#aa7d36",
    "d": "M920 110 H784",
    "x": 850,
    "y": 90,
    "dashed": true,
    "hint": "Letakkan file ekspor ND6 di aplikasi, periksa format dan pratinjau, lalu impor. Tinjau alamat yang ditandai. Snapshot stok tidak otomatis membuat stok atau jurnal.",
    "links": [
      {
        "xmlid": "fmcg_nd6_import.menu_nd6_import",
        "label": "Impor pelanggan"
      },
      {
        "xmlid": "fmcg_nd6_product_import.menu_product_import",
        "label": "Impor produk & harga"
      },
      {
        "xmlid": "fmcg_nd6_stock_import.menu_stock_import",
        "label": "Impor snapshot stok"
      },
      {
        "xmlid": "fmcg_database.menu_address_review",
        "label": "Periksa alamat pelanggan"
      }
    ]
  },
  {
    "key": "delivery",
    "title": "Pesanan",
    "app": "stock.menu_stock_root",
    "color": "#aa7d36",
    "d": "M340 365 H446",
    "x": 395,
    "y": 349,
    "hint": "Pesanan yang dikonfirmasi menyiapkan pengiriman. Periksa jumlah dan ketersediaan sebelum memvalidasi barang keluar.",
    "links": [
      {
        "xmlid": "sale.menu_sale_order",
        "label": "Pesanan penjualan"
      },
      {
        "xmlid": "stock.out_picking",
        "label": "Pengiriman barang"
      }
    ]
  },
  {
    "key": "receipt",
    "title": "Barang masuk",
    "app": "stock.menu_stock_root",
    "color": "#cf8063",
    "d": "M860 365 H754",
    "x": 805,
    "y": 349,
    "hint": "Konfirmasi pembelian, lalu cocokkan penerimaan dengan barang fisik. Validasi penerimaan memperbarui stok Odoo.",
    "links": [
      {
        "xmlid": "purchase.menu_purchase_form_action",
        "label": "Pesanan pembelian"
      },
      {
        "xmlid": "stock.in_picking",
        "label": "Penerimaan barang"
      }
    ]
  },
  {
    "key": "receivables",
    "title": "Faktur & piutang",
    "app": "trial_accounting.menu_root",
    "color": "#aa7d36",
    "d": "M190 440 V500 H510 V566",
    "x": 360,
    "y": 488,
    "hint": "Buat faktur dari pesanan agar harga, diskon, pajak, dan sumber penjualannya tetap terhubung. Posting menambah piutang; pembayaran atau rekonsiliasi menguranginya.",
    "links": [
      {
        "xmlid": "trial_accounting.menu_invoices",
        "label": "Faktur pelanggan"
      },
      {
        "xmlid": "trial_accounting.menu_customer_payments",
        "label": "Pembayaran pelanggan"
      },
      {
        "xmlid": "fmcg_pricing.menu_pricing_audit_accounting",
        "label": "Jejak harga & promosi"
      }
    ]
  },
  {
    "key": "valuation",
    "title": "HPP / valuasi",
    "app": "trial_accounting.menu_root",
    "color": "#208f83",
    "d": "M600 440 V566",
    "x": 600,
    "y": 510,
    "hint": "Nilai persediaan dan HPP mengikuti konfigurasi valuasi produk serta aturan akuntansi. Impor snapshot ND6 saja belum membuat jurnal atau HPP.",
    "links": [
      {
        "xmlid": "stock.menu_product_stock",
        "label": "Laporan stok"
      },
      {
        "xmlid": "trial_accounting.menu_ledger",
        "label": "Buku besar"
      }
    ]
  },
  {
    "key": "payables",
    "title": "Tagihan & utang",
    "app": "trial_accounting.menu_root",
    "color": "#cf8063",
    "d": "M1010 440 V500 H690 V566",
    "x": 870,
    "y": 488,
    "hint": "Cocokkan tagihan pemasok dengan pembelian dan penerimaan. Posting mencatat utang; pembayaran pemasok menyelesaikannya.",
    "links": [
      {
        "xmlid": "trial_accounting.menu_bills",
        "label": "Tagihan pemasok"
      },
      {
        "xmlid": "purchase.menu_purchase_form_action",
        "label": "Pesanan pembelian"
      }
    ]
  },
  {
    "key": "collection",
    "title": "Pelunasan piutang",
    "app": "trial_accounting.menu_root",
    "color": "#3d7da8",
    "d": "M190 570 V540 H360 V504",
    "x": 190,
    "y": 560,
    "hint": "Cocokkan transfer bank dengan faktur dan piutang yang tepat. Tinjau transaksi ambigu atau pembayaran parsial; jangan mencatat pendapatan dua kali saat menagih piutang.",
    "links": [
      {
        "xmlid": "trial_accounting.menu_invoices",
        "label": "Faktur pelanggan"
      },
      {
        "xmlid": "trial_accounting.menu_customer_payments",
        "label": "Pembayaran pelanggan"
      },
      {
        "xmlid": "fmcg_bank_import.menu_bank_import",
        "label": "Impor rekening koran"
      },
      {
        "xmlid": "fmcg_bank_import.menu_bank_review",
        "label": "Tinjauan & pencocokan bank"
      }
    ]
  }
];
