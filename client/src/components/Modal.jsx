import { useState } from "react";

export default function Modal({ isOpen, onClose }) {
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Resume:", resume);
    console.log("Cover Letter:", coverLetter);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Attach Your Resume and Cover Letter
        </h2>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="border border-gray-300 p-3 rounded-md w-full mb-4 bg-gray-50 hover:bg-gray-100 transition duration-200"
        />
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Write your cover letter here..."
          className="border border-gray-300 p-3 rounded-md w-full mb-4 bg-gray-50 hover:bg-gray-100 transition duration-200"
          rows="4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#03346E] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
