import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const featuresPart1 = [
  { title: "Set board privacy", icon: "🔒" },
  { title: "Vote on behalf", icon: "🗳️" },
  { title: "Super fast setup", icon: "⚡" },
  { title: "Merge duplicate posts", icon: "🔀" },
  { title: "Set custom domain", icon: "🌍" },
];

const featuresPart2 = [
  { title: "Guest posts", icon: "✍️" },
  { title: "Custom brand colors", icon: "🎨" },
  { title: "Set OpenGraph image", icon: "🖼️" },
  { title: "Dark/Light theme", icon: "🌗" },
  { title: "Priority score", icon: "📊" },
  { title: "Internal comments", icon: "💬" },
];

const FeatureCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 p-6 w-64 h-24 rounded-lg border text-center",
        "border-gray-300 bg-gray-50 hover:bg-gray-100",
        "dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <span className="text-4xl">{icon}</span> {/* Increased icon size */}
      <span className="text-lg font-semibold text-black dark:text-white">{title}</span> {/* Increased text size */}
    </div>
  );
};

export function FeaturesMarquee() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center gap-8 overflow-hidden"> {/* Added gap-8 for spacing */}
      {/* First Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {featuresPart1.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background"></div>

      {/* Second Marquee */}
      <Marquee reverse pauseOnHover className="[--duration:25s]"> {/* Optional: Different duration */}
        {featuresPart2.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background"></div>
    </div>
  );
}
