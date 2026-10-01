import { QrCode, Settings } from "lucide-react";

// type Props = {};

const page = () => {
  return (
    <header className="w-full bg-[#fffdf9d1]">
      {/* Sizing wrapper */}
      <div className="h-16 w-full max-w-[1160px] mx-auto px-3">
        {/* Layout wrapper */}
        <div className="flex h-full  min-w-full justify-between items-center">
          {/* App Icon */}
          <div className="h-full flex space-x-3 items-center">
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
              <span className="font-bold text-lg">LineUP</span>
              <span className="text-sm text-gray-600 hidden lg:block">
                Queue, made simple.
              </span>
            </div>
          </div>

          {/* Accounts */}
          <div className="h-full w-fit flex items-center gap-4">
            <div className="h-10 p-1 bg-stone-100 border border-solid border-[#e4ded4] rounded-lg">
              <div className="w-full h-full flex justify-between items-center gap-2">
                <span className="inline-flex h-full px-2 items-center bg-[#fffdf9] rounded-sm text-[#24302d] text-xs font-bold">
                  Staff
                </span>
                <div className="h-full px-2 flex gap-1 items-center">
                  <QrCode className="size-4" />
                  <span className="text-xs">Customer</span>
                </div>
              </div>
            </div>

            <Settings className="size-5 text-gray-500" />

            <div className="size-9 p-1 rounded-full bg-[#9eaa9c] text-white flex items-center justify-center">
              <span className="text-xs">AM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default page;
