export default function Footer() {
  return (
    <footer className="w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* logo */}
          <div className="relative flex justify-center flex-col md:flex-row mb-4">
            <a
              href="#"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                AI JOBS<span className="text-[#FF9100]">.</span>
              </span>
            </a>
          </div>

          {/* copyright */}
          <p className="text-sm text-gray-500">
            © 2024{" "}
            <a href="https://pagedone.io/" className="hover:underline">
              AI JOBS
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
