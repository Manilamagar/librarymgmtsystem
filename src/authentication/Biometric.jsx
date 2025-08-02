import React from "react";
import { Fingerprint } from "lucide-react";

const BiometricSetup = () => {
  const handleBiometricEnroll = () => {
    console.log("Initiating biometric setup...");
    // Add logic to integrate biometric authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-200">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-6 max-w-md w-full">
        <Fingerprint className="w-16 h-16 mx-auto text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Enable Biometric Login</h2>
        <p className="text-gray-500">
          Add an extra layer of security by enabling fingerprint or facial recognition.
        </p>
        <button
          onClick={handleBiometricEnroll}
          className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
        >
          Set Up Biometric
        </button>
      </div>
    </div>
  );
};

export default BiometricSetup;
