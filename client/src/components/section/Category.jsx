export default function Category() {
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {/* category card */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/marketing-sosmed.png"
              alt="marketing-sosmed"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Marketing
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/it-engineering.png"
              alt="it-engineering"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                IT & Engineering
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/design-creative.png"
              alt="design-creative"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Design & Creative
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/health-science.png"
              alt="health-science"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Health & Science
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/finance-accounting.png"
              alt="finance-accounting"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Finance & Accounting
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/business-dev-sales.png"
              alt="business-dev-sales"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Business Development & Sales
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/data-product-management.png"
              alt="data-product-management"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Data & Product Management
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/admin.png"
              alt="admin"
              className="w-full h-[110px] object-cover"
            />
            <div className="p-[10px]">
              <p className="text-base font-medium text-gray-800 text-center">
                Admin & Operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
