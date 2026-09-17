import Container from "@/components/Container";

// type Props = {};

const page = () => {
  return (
    <div>
      {/* Header  */}
      <div className="h-20 bg-white">
        <Container>
          <div className="flex space-x-3 items-center">
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
        </Container>
      </div>
    </div>
  );
};

export default page;
