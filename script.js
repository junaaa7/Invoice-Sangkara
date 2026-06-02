function rupiah(angka) {
    if (isNaN(angka) || angka === null || angka === '') {
        return '0';
    }
    return Number(angka).toLocaleString('id-ID');
}

function formatTanggalIndonesia(tanggalInput) {
    if (!tanggalInput) return '';
    let tgl = new Date(tanggalInput);
    if (isNaN(tgl.getTime())) return tanggalInput;
    return tgl.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function generateInvoice() {
    // Ambil nilai dari input (bisa kosong)
    let invoice = document.getElementById('invoice_no').value;
    let nama = document.getElementById('nama').value;
    let periode = document.getElementById('periode').value;
    let tempoRaw = document.getElementById('tempo').value;
    let tempo = tempoRaw ? formatTanggalIndonesia(tempoRaw) : '';

    let pendaftaran = parseInt(document.getElementById('pendaftaran').value) || 0;
    let iuran = parseInt(document.getElementById('iuran').value) || 0;
    let total = pendaftaran + iuran;

    let kota = document.getElementById('kota').value;
    let tanggalSuratRaw = document.getElementById('tanggal_surat').value;
    let tanggalSurat = tanggalSuratRaw ? formatTanggalIndonesia(tanggalSuratRaw) : '';
    let adminNama = document.getElementById('admin_nama').value;

    // Update tampilan invoice (tampilkan - jika kosong)
    document.getElementById('out_invoice').innerText = invoice || '-';
    document.getElementById('out_nama').innerText = nama || '-';
    document.getElementById('out_periode').innerText = periode || '-';
    document.getElementById('out_tempo').innerText = tempo || '-';

    document.getElementById('out_pendaftaran').innerText = rupiah(pendaftaran);
    document.getElementById('out_iuran').innerText = rupiah(iuran);
    document.getElementById('out_total').innerText = rupiah(total);

    document.getElementById('out_kota').innerText = kota || '-';
    document.getElementById('out_tanggal_surat').innerText = tanggalSurat || '-';
    document.getElementById('out_admin').innerText = adminNama || '-';
}