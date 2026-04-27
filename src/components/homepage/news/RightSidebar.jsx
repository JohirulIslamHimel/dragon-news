"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };
  return (
    <div className="space-y-6">
      {/* Login Section  */}
      <div>
        <h2 className="font-bold text-lg mb-4">Login with</h2>
        <div className="flex flex-col gap-2">
          <button
            className="btn btn-outline border-blue-500 text-blue-500 w-full"
            onClick={handleGoogleSignin}
          >
            Login with Google
          </button>
          <button
            className="btn btn-outline border-black w-full"
            onClick={handleGithubSignin}
          >
            Login with Github
          </button>
        </div>
      </div>

      {/* Find Us On Section  */}
      <div>
        <h2 className="font-bold text-lg mb-4">Find Us On</h2>
        <div className="flex flex-col border rounded-lg overflow-hidden text-gray-600">
          <a
            href="https://facebook.com"
            className="flex items-center gap-3 p-4 border-b hover:bg-gray-100 transition-all"
          >
            <span className="p-2 bg-gray-100 rounded-full text-blue-600">
              <FaFacebook />
            </span>
            <span className="font-medium">Facebook</span>
          </a>
          <a
            href="https://twitter.com"
            className="flex items-center gap-3 p-4 border-b hover:bg-gray-100 transition-all"
          >
            <span className="p-2 bg-gray-100 rounded-full text-sky-400">
              <FaTwitter />
            </span>
            <span className="font-medium">Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            className="flex items-center gap-3 p-4 hover:bg-gray-100 transition-all"
          >
            <span className="p-2 bg-gray-100 rounded-full text-pink-600">
              <FaInstagram />
            </span>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
