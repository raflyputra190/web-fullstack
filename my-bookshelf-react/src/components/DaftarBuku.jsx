import CardBuku from "./CardBuku";

export default function DaftarBuku({ listBuku, onToggleStatus }) { 
  return (
    <div className="mb-4">
      <h4 className="mb-3 border-bottom pb-2">Daftar Bacaan</h4>
      {listBuku.length === 0 ? (
        <div className="alert alert-warning text-center fw-bold shadow-sm">
          Belum ada data buku saat ini. Silakan tambah buku baru!
        </div>
      ) : (
        listBuku.map((buku) => (
          <CardBuku 
            key={buku.id} 
            buku={buku} 
            onToggleStatus={onToggleStatus} 
          />
        ))
      )}
    </div>
  );
}