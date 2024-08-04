export default function Require() {
  return (
    <div className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-lg shadow-lg overflow-hidden">
      <div className="px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className=" fonts text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Course Prerequisites
          </h2>
          <p className=" fonts mt-4 text-lg text-white/80">
            Review the requirements to ensure you're prepared for the course.
          </p>
        </div>
        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8 lg:mt-16 lg:space-y-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <CheckIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className=" font2 text-xl font-semibold text-white">
                Basic computer skills
              </h3>
              <p className="font2 mt-2 text-white/80">
                You should be comfortable using a computer, navigating files and
                folders, and basic software applications.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <LanguagesIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className=" font2 text-xl font-semibold text-white">
                Proficiency in English
              </h3>
              <p className=" font2 mt-2 text-white/80">
                You should be able to communicate effectively in English, both
                spoken and written.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <ComputerIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Computer requirements
              </h3>
              <p className=" fonts mt-2 text-white/80">
                You'll need access to a computer or laptop with a Core i5 - i7
                processor, 8GB RAM, and 500GB storage.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <NetworkIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Stable internet access
              </h3>
              <p className="mt-2 text-white/80">
                All classes are fully online, so you'll need a reliable internet
                connection.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <LightbulbIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Desire to learn
              </h3>
              <p className="mt-2 text-white/80">
                You should have a genuine interest and curiosity to learn the
                course material.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-2">
                <CalendarIcon className="w-6 h-6 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Availability</h3>
              <p className="mt-2 text-white/80">
                You'll need to be available to attend all scheduled classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function LanguagesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
