export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="fonts text-4xl font-bold tracking-tighter sm:text-6xl">
              Meet Our Inspiring Mentors
            </h2>
            <p className=" color-mix font2 max-w-[900px] text-black md:text-2xl lg:text-xl xl:text-2xl">
              The founders of FutureDev have decades of experience in the tech
              industry, and they're passionate about helping the next generation
              of developers succeed.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <a href="#" className="absolute inset-0 z-10 sr-only">
              View Mentor
            </a>
            <img
              src="https://img.freepik.com/premium-photo/middle-eastern-business-people-modern-office_21730-1106.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
              alt="abdi Photo"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="text-2xl font-bold">Abdi-fatah</h3>
              <p className="text-base text-black">Co-founder, FutureDev</p>
              <p className="text-base text-black">
                abdifatah has over 15 years of experience in the tech industry,
                working as a software engineer, tech lead, and engineering
                manager at leading tech companies.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <a href="#" className="absolute inset-0 z-10 sr-only">
              View Mentor
            </a>
            <img
              src="https://img.freepik.com/free-photo/photo-muslim-student-carries-notepad-notes-holds-modern-cellular-creats-new-publication-social-networks-covers-head-with-veil-according-religious-rules-chats-with-groupmates-online_273609-26738.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
              alt="Jane Smith's Photo"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="text-2xl font-bold">Umulkheir ahmed</h3>
              <p className="text-base text-black">
                technical mentor, FutureDev
              </p>
              <p className="text-base text-black">
                Umulkheir is a seasoned engineering leader with a passion for
                mentoring and empowering early-career developers. She has worked
                at various tech startups and has a deep understanding of the
                challenges faced by aspiring developers.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <a href="#" className="absolute inset-0 z-10 sr-only">
              View Mentor
            </a>
            <img
              src="https://img.freepik.com/free-photo/people-working-late-their-office_23-2149006070.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
              alt="Michael Johnson's Photo"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="text-2xl font-bold">Michael </h3>
              <p className="text-base text-black">Co-founder, FutureDev</p>
              <p className="text-base text-black">
                Meet Michael Johnson, a dynamic force in the tech world and
                co-founder of FutureDev. With a career spanning several
                high-impact tech startups, Michael has a treasure trove of
                experience that he's eager to share. His journey from a curious
                coder to a seasoned engineering leader has given him invaluable
                insights into the trials and triumphs of aspiring developers.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <a href="#" className="absolute inset-0 z-10 sr-only">
              View Mentor
            </a>
            <img
              src="https://img.freepik.com/premium-photo/portrait-young-man-standing-by-wall_1048944-494825.jpg?w=360"
              alt="Emily Davis's Photo"
              width={500}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="text-2xl font-bold">rage </h3>
              <p className="text-base text-black">Co-founder, FutureDev</p>
              <p className="text-base text-black">
                Rage is a seasoned engineering leader with a passion for
                mentoring and empowering early-career developers. She has worked
                at various tech startups and has a deep understanding of the
                challenges faced by aspiring developers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t pt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">About FutureDev</h3>
              <p className="text-base text-black">
                FutureDev is a non-profit organization dedicated to empowering
                the next generation of developers. Our mission is to provide
                mentorship, resources, and opportunities to help aspiring
                developers succeed in the tech industry.
              </p>
            </div>
            <div>
              <h3 className="font2 text-xl font-bold">Our Mission</h3>
              <p className=" font2 text-base text-black">
                At FutureDev, we believe that everyone should have access to the
                tools and support they need to succeed in the tech industry.
                We're committed to creating a more diverse and inclusive tech
                ecosystem by mentoring and empowering aspiring developers from
                all backgrounds.
              </p>
            </div>
            <div>
              <h3 className=" font2 text-xl font-bold">Get Involved</h3>
              <p className="font2 text-base text-black">
                Whether you're an aspiring developer looking for mentorship, or
                an experienced professional who wants to give back, we'd love to
                have you join our community. Visit our website to learn more
                about our programs and how you can get involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
