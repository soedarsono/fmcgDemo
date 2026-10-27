// Public demonstration only. All businesses, streets, contacts and transactions
// below are fictional. Region names are geographic labels, not customer data.
const locations = [
  ['Banda Aceh', 'Aceh', '23111'], ['Medan', 'Sumatera Utara', '20111'],
  ['Padang', 'Sumatera Barat', '25111'], ['Pekanbaru', 'Riau', '28111'],
  ['Jambi', 'Jambi', '36111'], ['Palembang', 'Sumatera Selatan', '30111'],
  ['Bengkulu', 'Bengkulu', '38111'], ['Bandar Lampung', 'Lampung', '35111'],
  ['Pangkalpinang', 'Kepulauan Bangka Belitung', '33111'], ['Batam', 'Kepulauan Riau', '29411'],
  ['Jakarta Selatan', 'DKI Jakarta', '12110'], ['Bandung', 'Jawa Barat', '40111'],
  ['Semarang', 'Jawa Tengah', '50111'], ['Yogyakarta', 'DI Yogyakarta', '55111'],
  ['Surabaya', 'Jawa Timur', '60111'], ['Serang', 'Banten', '42111'],
  ['Denpasar', 'Bali', '80111'], ['Mataram', 'Nusa Tenggara Barat', '83111'],
  ['Kupang', 'Nusa Tenggara Timur', '85111'], ['Pontianak', 'Kalimantan Barat', '78111'],
  ['Palangka Raya', 'Kalimantan Tengah', '73111'], ['Banjarmasin', 'Kalimantan Selatan', '70111'],
  ['Samarinda', 'Kalimantan Timur', '75111'], ['Tanjung Selor', 'Kalimantan Utara', '77211'],
  ['Manado', 'Sulawesi Utara', '95111'], ['Palu', 'Sulawesi Tengah', '94111'],
  ['Makassar', 'Sulawesi Selatan', '90111'], ['Kendari', 'Sulawesi Tenggara', '93111'],
  ['Gorontalo', 'Gorontalo', '96111'], ['Mamuju', 'Sulawesi Barat', '91511'],
  ['Ambon', 'Maluku', '97111'], ['Ternate', 'Maluku Utara', '97711'],
  ['Manokwari', 'Papua Barat', '98311'], ['Sorong', 'Papua Barat Daya', '98411'],
  ['Jayapura', 'Papua', '99111'], ['Nabire', 'Papua Tengah', '98811'],
  ['Wamena', 'Papua Pegunungan', '99511'], ['Merauke', 'Papua Selatan', '99611']
];
const pad = (value, length = 4) => String(value).padStart(length, '0');
const date = index => `2026-10-${pad(index % 28 + 1, 2)}`;
const groups = ['Retail', 'Grosir', 'Distributor', 'Modern Trade'];
const storeNames = ['Sinar Pagi', 'Pelangi', 'Bintang', 'Mentari', 'Harapan', 'Sejahtera', 'Ceria', 'Sentosa'];
const customers = Array.from({ length: 320 }, (_, i) => {
  const [city, state, zip] = locations[i % locations.length];
  return {
    id: `customer-${i + 1}`, name: `Toko Demo ${storeNames[i % storeNames.length]} ${pad(i + 1, 3)}`,
    street: `Jl. Simulasi Nusantara ${i % 17 + 1} No. ${i % 90 + 1}`,
    street2: i % 5 === 0 ? `Ruko Fiktif Blok ${String.fromCharCode(65 + i % 6)}-${i % 12 + 1}` : '',
    city, state, zip, code: `CUST-${pad(i + 1)}`,
    phone: `DEMO-0800-${pad(i + 1, 6)}`, email: `toko${pad(i + 1)}@retail-demo.example`,
    priceGroup: groups[i % groups.length], addressIssue: i % 23 === 0
  };
});
const catalog = [
  ['Beverages', ['Air Mineral', 'Teh Melati', 'Kopi Susu', 'Minuman Jeruk', 'Susu UHT', 'Minuman Isotonik'], ['250 ml', '500 ml'], 5000],
  ['Snacks', ['Keripik Kentang', 'Biskuit Cokelat', 'Wafer Vanila', 'Kacang Panggang', 'Kerupuk Udang', 'Kue Kering'], ['80 g', '160 g'], 9000],
  ['Staples', ['Beras Premium', 'Gula Pasir', 'Tepung Terigu', 'Garam Dapur', 'Minyak Goreng', 'Tepung Tapioka'], ['500 g', '1 kg'], 13000],
  ['Instant Food', ['Mi Instan Goreng', 'Mi Instan Soto', 'Bubur Ayam Instan', 'Sup Jagung Instan', 'Sarden Kaleng', 'Kornet Sapi'], ['Reguler', 'Paket Keluarga'], 8000],
  ['Personal Care', ['Sabun Mandi', 'Sampo', 'Pasta Gigi', 'Sabun Cuci Tangan', 'Deodoran', 'Tisu Wajah'], ['Reguler', 'Ekonomis'], 17000],
  ['Home Care', ['Deterjen Bubuk', 'Pewangi Pakaian', 'Sabun Cuci Piring', 'Pembersih Lantai', 'Pembersih Kaca', 'Tisu Dapur'], ['Reguler', 'Isi Ulang'], 19000],
  ['Condiments', ['Kecap Manis', 'Saus Sambal', 'Saus Tomat', 'Santan', 'Kaldu Ayam', 'Bumbu Nasi Goreng'], ['Reguler', 'Paket Hemat'], 11000],
  ['Breakfast', ['Sereal Jagung', 'Oat Instan', 'Selai Stroberi', 'Selai Kacang', 'Madu', 'Susu Bubuk'], ['Reguler', 'Paket Keluarga'], 24000]
];
const products = catalog.flatMap(([category, names, variants, base], categoryIndex) =>
  names.flatMap((name, nameIndex) => variants.map((variant, variantIndex) => {
    const index = categoryIndex * 12 + nameIndex * 2 + variantIndex;
    const price = base + nameIndex * 1500 + variantIndex * 6000;
    return { id: `product-${index + 1}`, name: `${name} ${variant}`, code: `SKU-${pad(index + 1)}`,
      category, price, cost: Math.round(price * 0.7 / 100) * 100,
      stock: index % 13 === 0 ? 0 : (index * 37 + 24) % 580,
      unit: 'pcs', recentDays: index % 31 };
  })));
const vendors = ['PT Demo Pangan Nusantara', 'CV Demo Distribusi Ceria', 'PT Demo Rumah Bersih', 'CV Demo Minuman Sejuk', 'PT Demo Sembako Makmur'];
const orders = Array.from({ length: 80 }, (_, i) => ({
  id: `order-${i + 1}`, number: `SO/2026/10/${pad(i + 1)}`, date: date(i),
  customer: customers[(i * 7) % customers.length].name, total: 1750000 + (i * 357000) % 18500000,
  status: ['Quotation', 'Sales Order', 'Sales Order', 'Completed'][i % 4]
}));
const purchases = Array.from({ length: 45 }, (_, i) => ({
  id: `purchase-${i + 1}`, number: `PO/2026/10/${pad(i + 1)}`, date: date(i + 2),
  vendor: vendors[i % vendors.length], total: 4500000 + (i * 785000) % 42000000,
  status: ['Request for Quotation', 'Purchase Order', 'Received'][i % 3]
}));
// Allocate exact totals in whole rupiah, deterministically, without rounding drift.
function allocate(total, count, salt = 0) {
  const weights = Array.from({ length: count }, (_, i) => 10 + (i * 7 + salt) % 23);
  const weightTotal = weights.reduce((a, b) => a + b, 0);
  const values = weights.map(weight => Math.floor(total * weight / weightTotal / 1000) * 1000);
  values[values.length - 1] += total - values.reduce((a, b) => a + b, 0);
  return values;
}
const invoiceTotals = allocate(1225000000, 60);
let paymentRemaining = 1050000000;
const invoices = invoiceTotals.map((total, i) => {
  const paid = Math.min(total, paymentRemaining);
  paymentRemaining -= paid;
  return { id: `invoice-${i + 1}`, number: `INV/2026/10/${pad(i + 1)}`, date: date(i),
    customer: customers[(i * 5) % customers.length].name, total, paid,
    status: paid === total ? 'Paid' : paid === 0 ? 'Unpaid' : 'Partially Paid' };
});
const payments = allocate(1050000000, 40, 3).map((amount, i) => ({
  id: `payment-${i + 1}`, number: `PAY/2026/10/${pad(i + 1)}`, date: date(i + 1),
  customer: customers[(i * 5) % customers.length].name, amount,
  method: ['Bank Transfer', 'Cash', 'Virtual Account', 'QRIS'][i % 4]
}));
const movements = Array.from({ length: 60 }, (_, i) => ({
  id: `movement-${i + 1}`, number: `${i % 3 === 0 ? 'IN' : 'OUT'}/2026/10/${pad(i + 1)}`,
  date: date(i), partner: i % 3 === 0 ? vendors[i % vendors.length] : customers[(i * 9) % customers.length].name,
  product: products[(i * 11) % products.length].name, quantity: 12 + i * 6 % 300,
  status: ['Done', 'Ready', 'Waiting', 'Done'][i % 4], direction: i % 3 === 0 ? 'Incoming' : 'Outgoing'
}));
const pricelists = Array.from({ length: 8 }, (_, i) => ({
  id: `pricelist-${i + 1}`, name: `${groups[i % 4]} ${i < 4 ? 'Standar' : 'Volume'}`,
  currency: 'IDR', group: groups[i % 4], discount: [0, 5, 10, 7, 3, 8, 12, 9][i]
}));
const promotions = Array.from({ length: 12 }, (_, i) => ({
  id: `promotion-${i + 1}`, name: `Promo Demo ${['Hemat', 'Bundel', 'Grosir'][i % 3]} ${pad(i + 1, 2)}`,
  type: i % 3 === 1 ? 'Buy X Get Y' : 'Discount', minimum: (i % 4 + 1) * 12,
  discount: i % 3 === 1 ? 0 : 3 + i % 8, bonus: i % 3 === 1 ? 2 : 0,
  starts: '2026-10-01', ends: '2026-10-31'
}));
const bankRows = Array.from({ length: 30 }, (_, i) => ({
  id: `bank-${i + 1}`, date: date(i),
  description: i % 3 === 0 ? `Pembayaran pemasok demo ${pad(i + 1)}` : `Penerimaan toko demo ${pad(i + 1)}`,
  amount: (i % 3 === 0 ? -1 : 1) * (2500000 + i * 375000),
  bank: ['Bank Demo Operasional', 'Bank Demo Penjualan'][i % 2],
  match: i % 4 === 0 ? '' : `${i % 3 === 0 ? 'BILL' : 'PAY'}/2026/10/${pad(i + 1)}`,
  status: i % 4 === 0 ? 'Unmatched' : 'Matched'
}));
const accounts = [
  ['1101', 'Kas dan Bank', 265000000, 0], ['1102', 'Piutang Usaha', 175000000, 0],
  ['1103', 'Persediaan', 360000000, 0], ['1201', 'Aset Tetap Bersih', 420000000, 0],
  ['2101', 'Utang Usaha', 0, 190000000], ['2102', 'Utang Pajak', 0, 45100000],
  ['3101', 'Modal Disetor', 0, 825000000], ['3201', 'Laba Ditahan Awal', 0, 0],
  ['4101', 'Penjualan', 0, 1250000000], ['4102', 'Diskon Penjualan', 25000000, 0],
  ['5101', 'Harga Pokok Penjualan', 840000000, 0], ['6101', 'Beban Gaji', 120000000, 0],
  ['6102', 'Beban Operasional Lainnya', 60000000, 0], ['7101', 'Beban Pajak', 45100000, 0]
].map(([code, name, debit, credit]) => ({ code, name, debit, credit, balance: debit - credit }));

export const DATA = { customers, products, orders, purchases, invoices, payments, movements, pricelists, promotions, bankRows, accounts };

const profit = { revenue: 1250000000, discounts: 25000000, netRevenue: 1225000000,
  cogs: 840000000, opex: 180000000, tax: 45100000, netProfit: 159900000 };
const balance = { cash: 265000000, receivables: 175000000, inventory: 360000000,
  fixedAssets: 420000000, assets: 1220000000, payables: 190000000, taxPayable: 45100000,
  capital: 825000000, retainedEarnings: 159900000, liabilitiesEquity: 1220000000 };
// Cash outflows are positive amounts; financing is a positive capital inflow.
// Operational lists are independent illustrative samples, not a full ledger.
const cash = { opening: 180000000, receipts: 1050000000, suppliers: 780000000,
  expenses: 180000000, tax: 45000000, investing: 60000000, financing: 100000000,
  netChange: 85000000, closing: 265000000 };
export const REPORTS = { profit, balance, cash };
