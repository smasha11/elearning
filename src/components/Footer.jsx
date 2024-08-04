import React from "react";
import logo from "../assets/futuredev.png";

export default function Component() {
  return (
    <footer className=" fonts2 bg-background py-12 border-t border-muted">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} width={40} height={40} alt="FutureDev" />
            <span className=" color-mix text-lg font-bold text-primary">
              FutureDev
            </span>
          </div>
          <p className=" color-mix text-muted-foreground">
            Empowering the next generation of developers.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Courses</h3>
          {["HTML", "CSS", "JAVASCRIPT", "REACT"].map((course) => (
            <a
              key={course}
              href="#"
              className="hover:underline text-muted-foreground hover:text-primary transition-colors"
            >
              {course}
            </a>
          ))}
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Quick Links</h3>
          {["Careers", "FAQs", "Contact Us", "Privacy Policy", "Events"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:underline text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            )
          )}
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Contact</h3>
          <p className="text-muted-foreground">
            FutureDev
            <br />
            Garissa
            <br />
            Kenya
          </p>
          <p className="text-muted-foreground">
            Phone: +254 717 669 097
            <br />
            Email: info@futuredev.com
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-8 text-center text-sm text-muted-foreground">
        <p className="mb-2">&copy; 2024 FutureDev. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          {["Terms of Service", "Privacy Policy", "Contact"].map((text) => (
            <a
              key={text}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
