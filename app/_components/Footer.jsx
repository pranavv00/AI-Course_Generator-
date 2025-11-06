import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-sm text-gray-600">
            Copyright © 2025 SeedOfCode. All rights reserved.
          </div>
          <p className="text-xs text-gray-500 max-w-2xl">
            Empowering learners with AI-driven personalized education. 
            Create, learn, and grow with custom learning paths tailored to your goals.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
