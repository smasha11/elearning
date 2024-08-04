export default function Html() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold">Welcome to FutureDev!</h1>
        <p className="text-xl font-semibold mt-4">
          We're excited to have you here and thank you for choosing our platform
          to learn HTML. In this module, we'll cover the basics of HTML,
          including its structure, common tags, text formatting, tables, forms,
          semantic HTML, media, and accessibility. Let’s dive in!
        </p>
        <div className="grid gap-6 mt-8">
          <div className="border border-blue-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">HTML Basics</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>What is HTML?</strong> HTML (Hypertext Markup
                  Language) is the standard markup language used to create and
                  structure web pages.
                </li>
                <li>
                  <strong>Basic structure of an HTML document:</strong> The
                  basic structure includes the <code>&lt;html&gt;</code>,{" "}
                  <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.
                </li>
                <li>
                  <strong>Common HTML tags:</strong> <code>&lt;div&gt;</code>,{" "}
                  <code>&lt;span&gt;</code>, <code>&lt;p&gt;</code>,{" "}
                  <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, and more.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-purple-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-500 text-white p-4">
              <h2 className="text-xl font-semibold">Text Formatting</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Headings:</strong> <code>&lt;h1&gt;</code> to{" "}
                  <code>&lt;h6&gt;</code> tags for different heading levels.
                </li>
                <li>
                  <strong>Paragraphs:</strong> <code>&lt;p&gt;</code> tag for
                  paragraphs of text.
                </li>
                <li>
                  <strong>Emphasis:</strong> <code>&lt;em&gt;</code> and{" "}
                  <code>&lt;strong&gt;</code> tags for emphasis.
                </li>
                <li>
                  <strong>Lists:</strong> <code>&lt;ul&gt;</code> for unordered
                  lists and <code>&lt;ol&gt;</code> for ordered lists, with{" "}
                  <code>&lt;li&gt;</code> for list items.
                </li>
                <li>
                  <strong>Links:</strong> <code>&lt;a&gt;</code> tag for
                  creating hyperlinks.
                </li>
                <li>
                  <strong>Images:</strong> <code>&lt;img&gt;</code> tag for
                  inserting images.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-pink-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-500 text-white p-4">
              <h2 className="text-xl font-semibold">Tables</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Table structure:</strong> <code>&lt;table&gt;</code>,{" "}
                  <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, and{" "}
                  <code>&lt;th&gt;</code> tags.
                </li>
                <li>
                  <strong>Table attributes:</strong> <code>colspan</code>,{" "}
                  <code>rowspan</code>, and more.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-blue-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">
                Forms and Input Elements
              </h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Form structure:</strong> <code>&lt;form&gt;</code>{" "}
                  tag.
                </li>
                <li>
                  <strong>Input types:</strong> <code>&lt;input&gt;</code>,{" "}
                  <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>,{" "}
                  <code>&lt;select&gt;</code>, and <code>&lt;option&gt;</code>.
                </li>
                <li>
                  <strong>Form attributes:</strong> <code>action</code>,{" "}
                  <code>method</code>, <code>name</code>, and more.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-purple-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-500 text-white p-4">
              <h2 className="text-xl font-semibold">Semantic HTML</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>HTML5 semantic elements:</strong>{" "}
                  <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
                  <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
                  <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code>, and
                  more.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-pink-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-500 text-white p-4">
              <h2 className="text-xl font-semibold">Media</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Embedding videos:</strong> <code>&lt;video&gt;</code>{" "}
                  tag.
                </li>
                <li>
                  <strong>Embedding audio:</strong> <code>&lt;audio&gt;</code>{" "}
                  tag.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-blue-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">HTML5 Features</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>New input types:</strong> <code>date</code>,{" "}
                  <code>email</code>, <code>range</code>, and more.
                </li>
                <li>
                  <strong>Geolocation API and Canvas API.</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-purple-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-500 text-white p-4">
              <h2 className="text-xl font-semibold">Accessibility</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>ARIA roles and attributes for accessibility.</strong>
                </li>
                <li>
                  <strong>Semantic HTML for better accessibility.</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-pink-500 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-500 text-white p-4">
              <h2 className="text-xl font-semibold">SEO Basics</h2>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>
                  <strong>
                    Metadata in the <code>&lt;head&gt;</code> section.
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8">
          We hope this overview helps you get started with HTML. Let us know if
          you have any questions!
        </p>
      </div>
    </div>
  );
}
