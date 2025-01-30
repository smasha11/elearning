import React from "react";

const Css = () => {
  return (
    <div className="bg-gray-10000 min-h-screen py-11 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          HTML & CSS Course Notes
        </h1>
        <p className="text-gray-600 mb-6">
          HTML & CSS are the backbone of the internet, and almost every website
          out there can be boiled down into some unique mutation of the two.
          While relatively simple to learn, together they can really pack a
          powerful punch.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Resources
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <a
                href="https://the-internet-is-hard.com"
                className="text-blue-600 hover:underline"
              >
                The Internet Is Hard
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/html/"
                className="text-blue-600 hover:underline"
              >
                Learn HTML & CSS
              </a>
            </li>
            <li>
              <a
                href="https://discord.com"
                className="text-blue-600 hover:underline"
              >
                Discord Channel
              </a>
            </li>
            <li>
              <a
                href="https://learntocoderoadmap.com"
                className="text-blue-600 hover:underline"
              >
                Learn to Code Roadmap
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Table of Contents
          </h2>
          <ul className="list-decimal list-inside text-gray-600">
            <li>
              Chapter 1 - Introduction to HTML
              <ul className="list-disc list-inside pl-4">
                <li>1.1 Creating an HTML Document</li>
                <li>1.2 Initializing an HTML Document</li>
                <li>1.3 HTML Tags</li>
                <li>1.4 HTML Tag Functionalities</li>
                <li>1.5 Code Commenting in HTML</li>
                <li>1.6 HTML Tag Attributes</li>
                <li>1.7 A Basic Singlepage Website</li>
                <li>1.8 Building Multipage Applications</li>
              </ul>
            </li>
            <li>
              Chapter 2 - Introduction to CSS
              <ul className="list-disc list-inside pl-4">
                <li>2.1 Creating a CSS File</li>
                <li>2.2 Importing our CSS File</li>
                <li>2.3 Styling our HTML Document</li>
                <li>2.4 CSS Styles</li>
                <li>2.5 Advanced CSS Selectors</li>
                <li>2.6 TailwindCSS</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Chapter 1 - Introduction to HTML
          </h2>
          <p className="text-gray-600 mb-4">
            HTML stands for Hyper Text Markup Language, and it's technically not
            a programming language, but instead, a markup language. For now,
            we'll think of it as a glorified word document.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            1.1 Creating an HTML Document
          </h3>
          <p className="text-gray-600 mb-4">
            To get started coding in HTML, we first need to create an HTML
            document. We can do that by initializing a new file, just as if we
            were creating a standard word document, and giving it any name
            followed by the .html suffix.
          </p>
          <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
            <code>
              {`project_directory
|- index.html
|- about.html
|- contact.html`}
            </code>
          </pre>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            1.2 Initializing an HTML Document
          </h3>
          <p className="text-gray-600 mb-4">
            Here’s a standard HTML boilerplate:
          </p>
          <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
            <code>
              {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    visible content goes here . . .
  </body>
</html>`}
            </code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Key HTML Concepts
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>HTML Tags:</strong> HTML is created using tags. Tags are
              keywords surrounded by <code>&lt; &gt;</code>.
            </li>
            <li>
              <strong>Opening and Closing Tags:</strong> Most tags have an
              opening and closing tag (e.g.,{" "}
              <code>&lt;div&gt; content &lt;/div&gt;</code>).
            </li>
            <li>
              <strong>Self-Closing Tags:</strong> Some tags are self-closing
              (e.g., <code>&lt;input /&gt;</code>).
            </li>
            <li>
              <strong>Semantic Tags:</strong> These give meaning to your HTML
              (e.g., <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>).
            </li>
          </ul>
          <div className="bg-gray-100 min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                HTML & CSS Course Notes
              </h1>
              <p className="text-gray-600 mb-6">
                HTML & CSS are the backbone of the internet, and almost every
                website out there can be boiled down into some unique mutation
                of the two. While relatively simple to learn, together they can
                really pack a powerful punch.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Resources
                </h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>
                    <a
                      href="https://the-internet-is-hard.com"
                      className="text-blue-600 hover:underline"
                    >
                      The Internet Is Hard
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3schools.com/html/"
                      className="text-blue-600 hover:underline"
                    >
                      Learn HTML & CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com"
                      className="text-blue-600 hover:underline"
                    >
                      Discord Channel
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://learntocoderoadmap.com"
                      className="text-blue-600 hover:underline"
                    >
                      Learn to Code Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-8"></div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Chapter 1 - Introduction to HTML
                </h2>
                <p className="text-gray-600 mb-4">
                  HTML stands for Hyper Text Markup Language, and it's
                  technically not a programming language, but instead, a markup
                  language. For now, we'll think of it as a glorified word
                  document.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.1 Creating an HTML Document
                </h3>
                <p className="text-gray-600 mb-4">
                  To get started coding in HTML, we first need to create an HTML
                  document. We can do that by initializing a new file, just as
                  if we were creating a standard word document, and giving it
                  any name followed by the .html suffix.
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>
                    {`project_directory
|- index.html
|- about.html
|- contact.html`}
                  </code>
                </pre>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.2 Initializing an HTML Document
                </h3>
                <p className="text-gray-600 mb-4">
                  Here’s a standard HTML boilerplate:
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    visible content goes here . . .
  </body>
</html>`}
                  </code>
                </pre>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.2.1 Local Development
                </h3>
                <p className="text-gray-600 mb-4">
                  To get your code live in a local development environment & to
                  see how it looks, simply drag and drop any HTML file
                  (typically the index.html) onto your browser. Page refresh
                  after saving changes to your HTML document to see the updated
                  changes.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.3 HTML Tags
                </h3>
                <p className="text-gray-600 mb-4">
                  If we take a look at the code displayed above, there's a few
                  key observations worth taking note of.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>
                    HTML is created using tags. Tags (sometimes referred to as
                    elements) are the keywords surrounded by the greater-than
                    and lesser-than brackets, or the <code>&lt; &gt;</code>{" "}
                    keys.
                  </li>
                  <li>
                    Most tags have an opening and paired closing tag. Any
                    contents contained within the associated opening and closing
                    tags is known as the children contents. The opening tag
                    always appears first, and the closing tag can be discerned
                    from the opening tag via the use of the forwards slash{" "}
                    <code>/</code>.
                  </li>
                  <li>
                    For example -&gt;{" "}
                    <code>&lt;div&gt; child contents &lt;/div&gt;</code>. The
                    left-hand tag is the opening tag, and the right-most tag is
                    the closing tag as we see it has the forwards slash.
                  </li>
                  <li>
                    Some tags are self-closing. This means that the opening tag
                    has a forwards slash at the end of the tag as opposed to at
                    the start of the closing tag.
                    <code>&lt;input /&gt;</code>
                  </li>
                  <li>
                    HTML tags are either semantic or non-semantic. Semantic tags
                    imply more meaning about the subcontents that non-semantic
                    tags. Some examples of semantic tags are as follows:
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        Single use: <code>&lt;head&gt;</code>,{" "}
                        <code>&lt;body&gt;</code>, <code>&lt;header&gt;</code>,{" "}
                        <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
                        <code>&lt;main&gt;</code>
                      </li>
                      <li>
                        Multi use: <code>&lt;section&gt;</code>,{" "}
                        <code>&lt;details&gt;</code>,{" "}
                        <code>&lt;summary&gt;</code>, <code>&lt;aside&gt;</code>
                        , <code>&lt;time&gt;</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Tag pairs contained within other tag pairs are known as
                    Nested tags.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.4 HTML Tag Functionalities
                </h3>
                <p className="text-gray-600 mb-4">
                  HTML tags in general typically serve 1 of 3 general purposes
                  container, typography, or miscellaneous.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Container Tags:</strong> These deal with the
                  containerization or grouping of contents. This could be by
                  arranging associated contents in a row, in a column, or even
                  in a grid. We can think of it as if we were organizing
                  clothing within a set of drawers. We might have a drawer for
                  all things lower body, and within the drawer, we might have
                  individual subcontainers for shorts, socks, and undergarments,
                  and perhaps socks are further segregated into grouping of long
                  socks and short socks.
                </p>
                <p className="text-gray-600 mb-4">
                  Typically the containerization of contents is determined by
                  the relatability of the content. If some information pertains
                  to some other, we'll likely contain them together. Equally,
                  the relation might be determined by styling requirements;
                  i.e., this element is spaced or styled depending on another.
                  The primary container tags are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>
                    <strong>Semantic Container Tags</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        <code>&lt;head&gt;</code>: contains meta information
                        about the HTML web page; single-use
                      </li>
                      <li>
                        <code>&lt;body&gt;</code>: contains all the visible page
                        contents; single-use
                      </li>
                      <li>
                        <code>&lt;header&gt;</code>: contains contents that
                        create the page header (logo, ...
                      </li>
                    </ul>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.4 HTML Tag Functionalities (cont.)
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Typography Tags:</strong> These are primarily used for
                  displaying and styling text. They help define the structure of
                  text in an HTML document. Common typography tags include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>
                    <code>&lt;h1&gt; - &lt;h6&gt;</code>: Header tags, used to
                    define headings of different levels.
                  </li>
                  <li>
                    <code>&lt;p&gt;</code>: Paragraph tag, used to define a
                    block of text.
                  </li>
                  <li>
                    <code>&lt;span&gt;</code>: Inline container for text.
                  </li>
                  <li>
                    <code>&lt;a&gt;</code>: Anchor tag, used to create
                    hyperlinks.
                  </li>
                  <li>
                    <code>&lt;strong&gt;</code>: Used to emphasize text,
                    typically bold.
                  </li>
                  <li>
                    <code>&lt;em&gt;</code>: Used to emphasize text, typically
                    italicized.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  <strong>Miscellaneous Tags:</strong> These serve a variety of
                  purposes not covered by the previous categories. They are used
                  for embedding media, form controls, and other content.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>
                    <code>&lt;img&gt;</code>: Embeds an image.
                  </li>
                  <li>
                    <code>&lt;video&gt;</code>: Embeds a video.
                  </li>
                  <li>
                    <code>&lt;form&gt;</code>: Defines an HTML form for user
                    input.
                  </li>
                  <li>
                    <code>&lt;input&gt;</code>: Specifies an input field in a
                    form.
                  </li>
                  <li>
                    <code>&lt;button&gt;</code>: Defines a clickable button.
                  </li>
                  <li>
                    <code>&lt;iframe&gt;</code>: Embeds another HTML page within
                    the current page.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.5 Code Commenting in HTML
                </h3>
                <p className="text-gray-600 mb-4">
                  In HTML, comments are used to explain code or make notes
                  within the code for developers. Comments are ignored by the
                  browser, so they don’t affect the output of the webpage. A
                  comment is written as follows:
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>{`<!-- This is a comment -->`}</code>
                </pre>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.6 HTML Tag Attributes
                </h3>
                <p className="text-gray-600 mb-4">
                  HTML tags can have attributes that provide additional
                  information about the element. Attributes are placed inside
                  the opening tag and consist of a name and a value. For
                  example:
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>{`<a href="https://example.com">Visit Website</a>`}</code>
                  <p className="text-gray-600 mt-2">
                    In this case, the <code>href</code> attribute specifies the
                    URL of the link.
                  </p>
                </pre>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.7 A Basic Singlepage Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Let’s look at a simple example of a basic single-page website
                  layout:
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <main>
      <section>
        <h2>About Me</h2>
        <p>This is a paragraph about me.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Contact information goes here.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>`}
                  </code>
                </pre>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.8 Building Multipage Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  In a multipage website, we’ll have separate HTML files for
                  each page. Each page will link to the others through anchor
                  tags:
                </p>
                <pre className="bg-gray-800 text-white rounded-lg p-4 mb-4">
                  <code>{`<a href="about.html">About</a>`}</code>
                </pre>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Chapter 2 - Introduction to CSS
                </h2>
                <p className="text-gray-600 mb-4">
                  CSS, or Cascading Style Sheets, is used to style the layout
                  and presentation of an HTML document. It allows you to define
                  styles for your website's elements, including their color,
                  size, spacing, fonts, and more.
                </p>
                {/* Add more content for CSS chapters here */}
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Css;
