"use client";

const Page = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handlefacebookLogin = () => {
    window.location.href = "http://localhost:5000/auth/facebook";
  };

  return (
    <div className="h-screen flex justify-center items-center gap-4">
      <button
        onClick={handleLogin}
        className="px-3 py-3 bg-red-300 rounded-none"
      >
        Login with Google
      </button>
      <button
        onClick={handlefacebookLogin}
        className="px-3 py-3 bg-red-300 rounded-none"
      >
        facebook
      </button>
    </div>
  );
};

export default Page;
