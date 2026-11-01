export default function Ringkasan({ totalBuku }) {
  return (
    <div className="alert alert-info shadow-sm text-center">
      <strong>Total Buku di Rak:</strong> <span className="fs-5">{totalBuku}</span> buku
    </div>
  );
}