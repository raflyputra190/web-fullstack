import { useState } from "react";

export default function FormTambah({ onAddBuku }) {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul || !penulis) return;
    
    onAddBuku({ 
      id: Date.now(), 
      judul, 
      penulis, 
      status: "Belum Dibaca" 
    });
    
    setJudul("");
    setPenulis("");
  };

  return (
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-body">
        <h5 className="card-title text-primary">➕ Tambah Buku Baru</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Judul Buku</label>
            <input type="text" className="form-control" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Masukkan judul..." />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Penulis</label>
            <input type="text" className="form-control" value={penulis} onChange={(e) => setPenulis(e.target.value)} placeholder="Nama penulis..." />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Simpan Buku</button>
        </form>
      </div>
    </div>
  );
}