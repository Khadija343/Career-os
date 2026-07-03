import { UploadCloud, FileText } from "lucide-react";

function UploadResumeCard() {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border-2 border-dashed border-blue-300 hover:border-blue-500 transition duration-300">

      <div className="flex flex-col items-center text-center">

        <div className="bg-blue-100 p-5 rounded-full">
          <UploadCloud size={50} className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold mt-5">
          Upload Your Resume
        </h2>

        <p className="text-gray-500 mt-2">
          Drag & Drop your resume here
        </p>

        <p className="text-gray-400">
          or
        </p>

        <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
          <FileText size={20} />
          Upload PDF
        </button>

        <p className="text-sm text-gray-400 mt-4">
          Supported formats: PDF, DOCX (Max 5 MB)
        </p>

      </div>

    </div>
  );
}

export default UploadResumeCard;