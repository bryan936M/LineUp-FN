import { QrCode, Settings } from "lucide-react";

// type Props = {};

const page = () => {
  return (
    <header className="w-full bg-[#fffdf9d1]">
      {/* Sizing wrapper */}
      <div className="h-20 w-full max-w-[1160px] mx-auto py-3">
        {/* Layout wrapper */}
        <div className="flex min-w-full justify-between items-center">
          {/* App Icon */}
          <div className="h-16 flex space-x-3 items-center">
            <div className="bg-red-500 text-white w-10 h-10 p-2 rounded-lg rotate-170 -scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scissors"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M8.12 8.12 12 12"></path>
                <path d="M20 4 8.12 15.88"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M14.8 14.8 20 20"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl">LineUP</span>
              <span className="text-sm text-gray-600">Queue, made simple.</span>
            </div>
          </div>

          {/* Accounts */}
          <div className="h-16 flex items-center gap-5">
            <div className="h-10 w-full bg-stone-100 border border-solid border-[#e4ded4] rounded-lg p-1">
              <div className="w-full h-full flex justify-between items-center gap-2">
                <span className="bg-[#fffdf9] p-1 rounded-sm text-[#24302d] font-bold">
                  Staff
                </span>
                <div className="py-1 flex gap-1 items-center">
                  <QrCode className="h-5 w-5" />
                  <span>Customer</span>
                </div>
              </div>
            </div>

            <Settings className="h-10 w-10" />

            <div className="h-10 w-10 p-2 rounded-full bg-[#9eaa9c] text-white flex items-center justify-center">
              <span>AM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default page;
