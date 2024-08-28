import { useState } from "react";
import RouterDemo from "../components/RouterDemo";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";
import Modal from "../components/Modal"; // Import the Modal component

export default function DetailJob() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <RouterDemo />
      </div>

      <div className="mt-5 p-8 rounded-lg shadow-lg border border-gray-300">
        {/* Job Header */}
        <div className="flex items-center border-b pb-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Frontend Developer
            </h1>
            <p className="text-lg text-[#FF9100]">Tech Company, Inc.</p>
            <div className="mt-4 mb-2">
              <div className="my-1 flex flex-row">
                <AiOutlineUser />
                <p className="ml-2 -mt-1"> Penuh Waktu </p>
              </div>
              <div className="my-1 flex flex-row">
                <IoLocationOutline />
                <p className="ml-2 -mt-1">Bandung</p>
              </div>
              <div className="my-1 flex flex-row">
                <MdWorkOutline />
                <p className="ml-2 -mt-1"> 1-2 Tahun Pengalaman</p>
              </div>
              <div className="my-1 flex flex-row">
                <PiMoneyWavyLight />
                <p className="ml-2 -mt-1">RP6.500.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Deskripsi Pekerjaan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are looking for a talented Frontend Developer to join our team.
            You will be responsible for implementing visual elements that users
            see and interact with in a web application.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Kualifikasi
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Proven experience as a Frontend Developer.</li>
            <li>Strong understanding of JavaScript, HTML, and CSS.</li>
            <li>Experience with React or Angular.</li>
            <li>Familiarity with browser testing and debugging.</li>
            <li>Good understanding of layout aesthetics.</li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <button
            onClick={handleApplyClick}
            className="bg-[#03346E] text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
          >
            Lamar Cepat
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
