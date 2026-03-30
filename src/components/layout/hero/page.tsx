import CodeLogo from "@/components/icons/code-logo";

export default function HeroSection() {
  return (
    <>
        <div className="flex relative min-h-screen items-center justify-between gap-10 bg-zinc-300 px-16 py-32 font-sans dark:bg-black">
            <div>
                <h1 className="text-5xl font-bold">Hi, I am Anurag Kumar</h1>
                <p className="mt-4 text-lg">A passionate developer and lifelong learner.</p>
            </div>
            <div>
                <CodeLogo />
            </div>
        </div>
    </>
  )
}
