"use client";
import CodeLogo from "@/components/icons/code-logo";
import TypeWriter from "./typewriter";
export default function HeroSection() {
  return (
    <>
        <div className="flex relative min-h-screen items-center justify-between gap-10 px-16 py-32 font-sans dark:bg-#000000" id="hero">
            <div>
                <h1 className="flex text-5xl font-bold"><TypeWriter /></h1>
                <p className="mt-4 text-lg">A passionate developer and lifelong learner.</p>
            </div>
            <div>
                <CodeLogo />
            </div>
        </div>
    </>
  )
}
