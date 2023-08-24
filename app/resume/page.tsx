import React from 'react'

export default function page() {
  return (
    <div className="bg-gray-100 p-8">
    {/* ... Resume content ... */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Download Resume</h2>
      <p className="text-md">
        Click the link below to download my resume:
      </p>
      <a
        href="/path/to/resume.pdf" // Update the path to your actual resume file
        download="Your_Name_Resume.pdf"
        className="text-blue-500 hover:underline"
      >
        Download Resume
      </a>
    </section>
  </div>
  )
}
