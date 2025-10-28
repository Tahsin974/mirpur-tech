import pdf from "../../assets/files/tariff-approval.pdf";
export default function TariffApprovalPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${pdf}`;
    link.download = "ISP_Tariff_Approval.pdf";
    link.click();
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            ISP Tariff Approval
          </h1>
          <p className="text-gray-600 mb-6">
            The following tariff plans have been officially approved by the
            Bangladesh Telecommunication Regulatory Commission (BTRC).
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition cursor-pointer"
          >
            Download Approval PDF
          </button>

          <p className="text-sm text-gray-400 mt-6">
            *All tariffs are inclusive of VAT and subject to regulatory
            guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
