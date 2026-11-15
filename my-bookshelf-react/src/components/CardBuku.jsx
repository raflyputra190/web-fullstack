export default function CardBuku({ buku, onToggleStatus}) {
  return (
    <div className="card mb-3 shadow-sm border-0 border-start border-4 border-primary">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{buku.judul}</h5>
          <h6 className="card-subtitle text-muted mb-0">✍️ {buku.penulis}</h6>
        </div>
        <button 
          onClick={() => onToggleStatus(buku.id, buku.sudahDibaca)}
          className={`btn btn-sm ${buku.sudahDibaca ? 'btn-success' : 'btn-secondary'}`}
        >
          {buku.sudahDibaca ? 'Sudah Dibaca' : 'Belum Dibaca'}
        </button>
      </div>
    </div>
  );
}