export default function Event() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className=" fonts text-3xl font-bold tracking-tighter sm:text-4xl">
            Upcoming FutureDev Events
          </h2>
          <p className=" color-mix  fonts max-w-[600px] text-gray-600 md:text-xl lg:text-base xl:text-xl text-center mx-auto">
            Join us for our upcoming events and celebrate the achievements of
            our community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/group-happy-students-graduation-gowns-caps-throwing-up-hands_1156758-34547.jpg?w=740"
              width={400}
              height={200}
              alt="Graduation Ceremony"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 grid gap-4">
              <div className="flex items-center justify-between">
                <button className="text-lg font-medium text-blue-600 hover:text-blue-800">
                  Graduation Ceremony
                </button>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                  In-Person
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  6:00 PM
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  June 15, 2024
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/host-with-microphone-interviews-influencer_482257-81867.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_hybrid"
              width={400}
              height={200}
              alt="Tech Talks"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 grid gap-4">
              <div className="flex items-center justify-between">
                <button className="text-lg font-medium text-blue-600 hover:text-blue-800">
                  Tech Talks
                </button>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                  Virtual
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  7:00 PM
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  september 10, 2024
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/male-developer-entering-binary-data-terminal-panel_482257-75385.jpg?t=st=1722262602~exp=1722266202~hmac=6358370b74d0a0b9bf65d63d4917be483a07f4886a57cc664d3129df661d8416&w=740"
              width={400}
              height={200}
              alt="Hackathon"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 grid gap-4">
              <div className="flex items-center justify-between">
                <button className="text-lg font-medium text-blue-600 hover:text-blue-800">
                  Hackathon
                </button>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                  In-Person
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  9:00 AM
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  oct 5, 2024
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-psd/flat-design-job-fair-landing-page-template_23-2151024387.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_hybrid"
              width={400}
              height={200}
              alt="Career Fair"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 grid gap-4">
              <div className="flex items-center justify-between">
                <button className="text-lg font-medium text-blue-600 hover:text-blue-800">
                  Career Fair
                </button>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                  Virtual
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  11:00 AM
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  oct 28, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
