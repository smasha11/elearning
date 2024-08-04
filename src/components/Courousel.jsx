import { useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "The FutureDev Bootcamp completely transformed my coding skills. I went from a complete beginner to being able to build full-stack web applications in just 6 months.",
      name: "ali ahmed",
      title: "Full-Stack Developer",
      img: "https://img.freepik.com/free-photo/college-students-different-ethnicities-cramming_23-2149891293.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user",
    },
    {
      quote:
        "The hands-on projects and mentorship at FutureDev helped me develop critical thinking and problem-solving skills that I use every day in my new job.",
      name: "Zeitun",
      title: "Software Engineer",
      img: "https://img.freepik.com/free-photo/happy-muslim-woman-advanced-user-technology-holds-notepads-cellular-wears-pink-veil-head_273609-25349.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user",
    },
    {
      quote:
        "The FutureDev curriculum covered everything I needed to know to land my dream job at a top tech company. I'm so grateful for the support and guidance.",
      name: "abubakar",
      title: "Software Developer",
      img: "https://img.freepik.com/premium-photo/middle-eastern-business-people-modern-office_21730-1106.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user",
    },
    {
      quote:
        "The FutureDev Bootcamp not only taught me to code, but also helped me develop essential soft skills like communication, teamwork, and public speaking.",
      name: "samira",
      title: "Full-Stack Developer",
      img: "https://img.freepik.com/premium-photo/young-african-modern-muslim-female-student-using-tablet-computer-with-group-friends-background-wearing-traditional-islamic-hijab-clothes_530697-62637.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user",
    },
    {
      quote:
        "The FutureDev Bootcamp was a life-changing experience. The instructors were incredibly knowledgeable and supportive, and the curriculum was perfectly tailored to my needs.",
      name: "yussuf sheikh",
      title: "Front-End Developer",
      img: "https://img.freepik.com/premium-photo/medium-shot-people-working-together_23-2149546211.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="text-center my-8">
        <h1 className=" fonts text-4xl font-bold">
          What Our Students Have To Say
        </h1>
        <p className=" font2 text-xl mt-4">
          Discover Your Perfect Program In Our Courses
        </p>
      </div>

      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full">
              <div className="p-8 flex flex-col items-center text-center gap-6 bg-white shadow-lg rounded-lg">
                <blockquote className="text-lg font-medium leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.img}
                      alt="User Avatar"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#x2039;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#x203A;
      </button>
    </div>
  );
}
