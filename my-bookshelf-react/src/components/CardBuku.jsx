export default function CardBuku({ buku }) {
  return (
    <div className="card mb-3 shadow-sm border-0 border-start border-4 border-primary">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{buku.judul}</h5>
          <h6 className="card-subtitle text-muted mb-0">✍️ {buku.penulis}</h6>
        </div>
        <span className="badge bg-secondary p-2">{buku.status}</span>
      </div>
    </div>
  );
}