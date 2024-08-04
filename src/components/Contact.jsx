export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-[1fr_auto] md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h2 className=" color-mix text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Learn The Most Powerful Languages and frameworks
          </h2>
          <p className=" color-mix  max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're committed to changing the future of learning for the better
            and provide the tools and skills to teach what you love.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <img
              src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=sph"
              width={200}
              height={200}
              alt="React"
              className="mx-auto mb-4 h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <img
              src="https://img.freepik.com/free-vector/digital-code-abstract-3d-polygonal-wireframe-airplane-blue-night-sky-with-dots-stars-illustration-background_587448-634.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=sph"
              width={200}
              height={200}
              alt="Vue.js"
              className="mx-auto mb-4 h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <img
              src="https://img.freepik.com/free-photo/side-shot-code-editor-using-react-js_181624-61842.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=sph"
              width={200}
              height={200}
              alt="Angular"
              className="mx-auto mb-4 h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <img
              src="https://img.freepik.com/premium-photo/close-up-code-computer-screen_1048944-2940691.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user"
              width={200}
              height={200}
              alt="Next.js"
              className="mx-auto mb-4 h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
