import { useEffect, useState } from "react";
import marquisImage from "./Marquis.jpeg";

const openMessages = [
  {
    title: "Open when your code won’t compile",
    content: `First of all, breathe.

If anyone can figure it out, it’s you. You literally explain concepts in five different ways until they make sense — that’s elite-level patience and skill.

Worst case scenario… blame the compiler.`,
  },
  {
    title: "Open when you feel old today",
    content: `Age is just another version update.

You’re not old. You’re optimized.

Still running smoothly, might I add.`,
  },
  {
    title: "Open when your student is being stubborn",
    content: `She’s trying her best 😌

And she’s actually grateful — even when she asks too many questions or bullies you.

Your effort doesn’t go unnoticed.`,
  },
  {
    title: "Open when you need a reminder you’re good at what you do",
    content: `You don’t just know how to code.
You know how to teach and hold a conversation. That’s a whole different skill set.

That’s rare.

Impact > syntax.`,
  },
];

export default function BirthdayPage() {
  const fullText = `Senior Dev.
Mentor.
Debugging Legend.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="min-h-screen bg-black text-white font-body px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-24">
        {/* HERO SECTION */}
        <section className="space-y-6 opacity-0 animate-fadeIn relative">
          <div className="absolute right-0 top-0">
            <img
              src={marquisImage}
              alt="Dev"
              className="w-48 h-48 object-cover object-top border border-neutral-800"
            />
          </div>
          <h1 className="text-5xl md:text-5xl font-bold text-yellow-400 font-display">
            Happy Birthday, Marquis
          </h1>

          <pre className="text-green-400 text-lg whitespace-pre-wrap">
            {displayedText}
            <span className="animate-blink">|</span>
          </pre>
        </section>
        <p className="text-white opacity-0 animate-fadeIn delay-100">
          Today, I celebrate the brain behind the daily tutoring sessions and
          the patience of a saint.
        </p>

        {/* APPRECIATION */}
        <section className="space-y-4 opacity-0 animate-fadeIn delay-200">
          <h2 className="text-2xl font-semibold text-white">
            A Quick Note From Your Favorite Student 😉
          </h2>

          <p className="text-white leading-relaxed">
            When we started talking, I didn’t know I was signing up for daily
            coding sessions and life updates in between.
          </p>

          <p className="text-white leading-relaxed">
            Thank you for being consistent, patient, and genuinely invested in
            helping me grow. You make learning feel less intimidating and a lot
            more fun.
          </p>

          <p className="text-white leading-relaxed">
            I’ve improved because you show up — and I don’t take that lightly.
            I’m really glad our paths crossed this year.
          </p>
        </section>

        {/* OPEN WHEN */}
        <section className="space-y-6 opacity-0 animate-fadeIn delay-300">
          <h2 className="text-2xl font-semibold text-white">
            Debug These When Needed
          </h2>

          <div className="space-y-4">
            {openMessages.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
                className="bg-gray-900 border border-gray-800 p-5 rounded-xl cursor-pointer transition transform hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-green-400">{item.title}</h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === i
                      ? "max-h-96 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <section className="space-y-4 opacity-0 animate-fadeIn delay-500">
          <h2 className="text-2xl font-semibold text-white">
            Final Commit Message
          </h2>

          <p className="text-white">
            Thank you for being part of my growth this year.
          </p>

          <p className="text-white">
            I hope this new chapter brings you bigger wins, cleaner code, and
            everything you’ve been working towards.
          </p>

          <p className="text-green-400 mt-6">
            — Your Dev-in-Progress
            <span className="animate-blink">_</span>
          </p>
        </section>
      </div>
    </div>
  );
}
