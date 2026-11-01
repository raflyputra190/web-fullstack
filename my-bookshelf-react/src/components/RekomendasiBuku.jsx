import { useState, useEffect } from "react";

export default function RekomendasiBuku() {
  const [rekomendasi, setRekomendasi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRekomendasi = async () => {
    setLoading(true);
    setError(false);
    try {
      // Menggunakan JSONPlaceholder sesuai izin dosen (bebas limit)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
      if (!response.ok) throw new Error("Gagal mengambil data");
      
      const data = await response.json();
      setRekomendasi(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRekomendasi();
  }, []);

  return (
    <div className="card mt-4 mb-4 shadow-sm border-info">
      <div className="card-body">
        <h5 className="card-title text-info mb-3">🌟 Rekomendasi Bacaan (Mock API)</h5>
        
        {loading && (
          <div className="alert alert-secondary text-center fw-bold">
            ⏳ Sedang memuat data...
          </div>
        )}

        {error && !loading && (
          <div className="alert alert-danger text-center">
            ❌ Gagal memuat data dari server.
            <br />
            <button onClick={fetchRekomendasi} className="btn btn-sm btn-danger mt-2 fw-bold">
              🔄 Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && rekomendasi.length > 0 && (
          <ul className="list-group">
            {rekomendasi.map((item) => (
              <li key={item.id} className="list-group-item border-info">
                <strong className="text-capitalize">📖 {item.title.substring(0, 25)}...</strong>
                <br />
                <small className="text-muted">Sumber: JSONPlaceholder</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}