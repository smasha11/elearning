import { Link } from "react-router-dom";
import React from "react";
import Cards from "./Cards";
import Courousel from "./Courousel";
import Contact from "./Contact";
import Footer from "./Footer";
import Require from "./Require";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className=" fonts text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Unlock Your Tech Future with{" "}
            <span className="color-mix">FutureDev</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Immerse yourself in a transformative software engineering bootcamp
            and kickstart your career in tech.
          </p>
          <Link to="/courses">
            <a
              href="#"
              className=" color-mix inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Apply Now
            </a>
          </Link>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/coding-sustainable-future-futuristic-programming-classes-with-purpose_1108314-2013.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
          width="600"
          height="500"
          alt="Developer"
          className="bg-hero mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>

      <div className="mt-12 md:mt-24 lg:mt-32">
        <div className="text-center space-y-4">
          <h2 className=" fonts text-3xl md:text-4xl font-bold">
            WHY YOU CHOOSE FUTUREDEV
          </h2>
          <p className=" fonts text-muted-foreground max-w-3xl mx-auto">
            FutureDev is more than eLearning. We're committed to changing the
            future of learning for the better and provide the tools and skills
            to teach what you love.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 w-full sm:w-[320px]">
              <img
                className="w-full h-40 object-cover"
                src="https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=sph"
                alt="Latest Technology"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Latest Trend Of Technologies
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Discover lessons compatible with modern web and mobile tech.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 w-full sm:w-[320px]">
              <img
                className="w-full h-40 object-cover"
                src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
                alt="Learning Through Doing"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Learning Through Doing
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Work on real-world projects, not just short exercises.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 w-full sm:w-[320px]">
              <img
                className="w-full h-40 object-cover"
                src="https://img.freepik.com/premium-photo/programming-mentor-guiding-young-students-aig_31965-363419.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
                alt="Learn At Your Own Pace"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Learn At Your Own Pace
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Take our courses online, anytime, anywhere in the world.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 w-full sm:w-[320px]">
              <img
                className="w-full h-40 object-cover"
                src="https://img.freepik.com/premium-photo/young-multiethnics-business-team-software-developers-working-together-using-laptop-computer-while-writing-programming-code-modern-startup-office_530697-597.jpg?w=740"
                alt="Engagement Platform"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Engagement Platform
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Enjoy lessons without feeling burdened or bored.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 w-full sm:w-[320px]">
              <img
                className="w-full h-40 object-cover"
                src="https://img.freepik.com/premium-photo/learn-computer_1161898-4307.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
                alt="Reliable Student Support"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Reliable Student Support
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Access community support if you get stuck or need help.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h2 className=" color-mix fonts text-3xl md:text-4xl font-bold tracking-tight">
                    Mentorship program
                  </h2>
                  <p className=" font2 text-muted-foreground text-lg md:text-xl">
                    Discover the ultimate mentorship program for software
                    engineering. Our expert mentors provide personalized
                    guidance and support, helping you to refine your skills and
                    navigate your career path. With our intuitive platform and
                    seamless communication tools, you'll have the resources you
                    need to transform your ideas into impactful solutions and
                    achieve your professional goals.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                ></a>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/college-students-different-ethnicities-cramming_23-2149891224.jpg?uid=R155442167&ga=GA1.1.841413721.1720715939&semt=ais_user"
                  alt="Unleash Your Creativity"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <Cards />
        <Courousel />
        <Contact />
        <Require />
      </div>
      <Footer />
    </section>
  );
}
