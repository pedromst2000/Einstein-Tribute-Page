import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--bg-img) p-4">
      <h1 className="font-piazzolla-regular text-[67px] text-primary  tracking-[0.05em] leading-tight">
        404 - Page Not Found
      </h1>
      <p className="font-smoochSans-regular text-[38px] text-primary tracking-[0.08em] mt-4 max-w-3xl text-center leading-snug">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-primary text-secondary rounded hover:bg-primary-dark transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
