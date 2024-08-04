export default function Cards() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6">
        <div className="space-y-6">
          <h1 className=" fonts text-4xl font-bold tracking-tight md:text-5xl">
            Empowering <span className="color-mix ">NORTHERN KENYA </span>
            Digital Future
          </h1>
          <p className=" font2 max-w-[1000px] text-lg md:text-xl">
            About 230 million jobs in Africa will require digital skills by
            2030. This figure is due to the increasing use of technology and the
            automation of jobs. At FutureDev, we prepare people for the future
            of work by creating opportunities for decent work through
            technology-based training, which includes coding skills, deep tech
            skills, employability skills, and basic digital skills.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <BriefcaseIcon className="h-12 w-12" />
            <h3 className="text-2xl font-semibold">230M+</h3>
            <p className="text-muted-foreground">Tech Jobs by 2030</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RocketIcon className="h-12 w-12" />
            <h3 className="text-2xl font-semibold">50%</h3>
            <p className="text-muted-foreground">Growth in 5 Years</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TrendingUpIcon className="h-12 w-12" />
            <h3 className="text-2xl font-semibold">10%</h3>
            <p className="text-muted-foreground">Annual Growth</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UsersIcon className="h-12 w-12" />
            <h3 className="text-2xl font-semibold">1M+</h3>
            <p className="text-muted-foreground">Skilled Developers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
