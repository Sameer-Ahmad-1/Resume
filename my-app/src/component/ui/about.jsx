"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <div className="bg-black text-white">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 pb-8 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-8 last:mb-0">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4 font-semibold">
                {item.title}
              </p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-6 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Detail About Music App",
    description: (
      <>
        <p>🎵 Music App – Responsive Web Application (Next.js)
A fully responsive music streaming web application built using Next.js. The app provides a smooth and modern user experience across all devices, from desktops to mobile phones. Users can explore, play, and interact with music through a sleek and intuitive interface.

Key Features:

🎧 Modern UI/UX with responsive design

🚀 Built with Next.js for fast performance and server-side rendering

📱 Mobile-first layout with full responsiveness

🔍 Search functionality to find songs or artists

🎶 Audio player with play, pause, skip, and volume control

📂 Organized music categories (e.g., Trending, New Releases, Genres)

🌙 Dark mode (optional)

🛠️ Easily extendable architecture for adding more features (e.g., user auth, playlists, etc.)

Tech Stack:

Frontend: Next.js, Tailwind CSS

Audio Playback: HTML5 Audio API or any third-party player

(Optional Backend): Supabase, Firebase, or a custom API

This project demonstrates your skills in building modern, scalable web apps with attention to responsive design and performance optimization.</p>
      </>
    ),
    badge: "Project",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80..."
  },
  {
    title: "Detail About Mailvail Project",
    description: (
      <>
        <p>MailVail is a fully responsive web application designed to validate and manage email addresses efficiently. Built with Next.js, the app features both a user and admin dashboard for real-time email checking, CSV uploads, and management tools—all in a sleek and responsive UI.

🔑 Key Features:

✅ Real-time Email Validation: Instantly checks if an email is valid, formatted correctly, and active.

📂 CSV Upload & Bulk Checking: Upload CSV files to validate multiple emails at once with detailed results.

👤 User Dashboard: Track validation history, manage uploaded files, and view results.

🛠️ Admin Dashboard: Monitor user activity, manage validation stats, and control system settings.

📱 Fully Responsive: Seamlessly adapts to all screen sizes—from desktops to smartphones.

📊 Validation Reports: Download or view results with status indicators (valid, invalid, duplicate, etc.)

🔒 Secure & Scalable: Built with scalability and data privacy in mind.

🧰 Tech Stack:

Frontend: Next.js, Tailwind CSS

Backend: (Optional: Supabase / Node.js / Firebase)

Validation API: Integration with email verification services or custom logic

CSV Handling: Papaparse or backend parsing

MailVail simplifies the process of verifying email addresses while offering a powerful admin dashboard and user-friendly interface for individuals and businesses alike.</p>
      </>
    ),
    badge: "Mailavail Project",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80..."
  }
];
