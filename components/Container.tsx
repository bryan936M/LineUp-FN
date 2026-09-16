import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-start items-center">
      <div className="max-w-[1160px] w-full max-h-screen mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
