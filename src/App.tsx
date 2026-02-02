import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--bg-img) p-4">
      <h1 className="font-piazzolla-regular text-[67px] text-primary  tracking-[0.05em] leading-tight">
        Albert Einstein
      </h1>

      <p className="font-smoochSans-regular text-[38px] text-primary tracking-[0.08em] mt-4 max-w-3xl text-center leading-snug">
        "Life is like riding a bicycle. To keep your balance you must keep
        moving."
      </p>
    </div>
  );
};

export default App;
