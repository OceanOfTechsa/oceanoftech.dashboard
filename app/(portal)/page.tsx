import {Metadata} from "next";
import {AppSettings} from "@/AppSettings";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export const metadata: Metadata = {
    title: `Portal - ${AppSettings.SITE_NAME}`,
    description: AppSettings.SITE_DESCRIPTION,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Home = async () => {
    const motivationalPhrases: string[] = [
        "Code your dreams into reality, one line at a time.",
        "Craft digital wonders, sculpting innovation with lines of code.",
        "Empower the world through your keystrokes, shaping tomorrow's technology.",
        "Unleash your genius, architecting solutions with elegant algorithms.",
        "Transform complexity into simplicity, coding brilliance with precision and passion.",
        "Fuel your creativity, ignite the digital realm with your code.",
        "Embrace the rhythm of code, dancing towards technological harmony.",
        "Illuminate the path with your code, guiding innovation to new horizons.",
        "Let your code be the symphony, composing melodies of digital mastery.",
        "Forge a legacy in the digital age, sculpting the future with code.",
        "Write your vision in code, bringing innovation to life.",
        "Build bridges with your code, connecting ideas to solutions.",
        "Dive into the ocean of possibilities, exploring with every keystroke.",
        "Master the art of problem-solving, one algorithm at a time.",
        "Empower humanity with tools of tomorrow, crafted by your code.",
        "Discover the joy of creation, shaping the world with your software.",
        "In the lines of code, lies the future waiting to unfold.",
        "Rise above challenges, debug the impossible and code the extraordinary.",
        "Transform your passion into progress, weaving dreams with your keyboard.",
        "Code not just for today, but to inspire generations to come.",
        "The world is your canvas; let your code be the masterpiece.",
        "Step into the future boldly, programming the impossible into existence.",
        "Every bug is a lesson, every fix is a victory—keep coding.",
        "Innovate. Iterate. Inspire. Build a digital legacy with your code.",
        "Let curiosity drive you, and creativity fuel your programming journey.",
        "Shape the digital frontier, one innovative idea at a time.",
        "Coding is the superpower that turns thoughts into global solutions.",
        "Harness the infinite potential of code to redefine what’s possible.",
        "Break barriers, create magic, and write the code that matters."
    ];

    function motivation(): string {
        const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
        return motivationalPhrases[randomIndex];
    }

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
  return (
    <div className="p-6 sm:p-20 border rounded-lg flex flex-col gap-3 items-center justify-center w-full">
        <Image width={100} height={100} src="/logo-light.png" alt="Logo" className="w-20 h-20 dark:hidden animate-pulse transition-all duration-500 ease-in-out mt-2"/>
        <Image width={100} height={100} src='/logo-dark.webp' alt="Logo" className="hidden w-20 h-20 dark:block animate-pulse transition-all duration-500 ease-in-out mt-2"/>
        <h1 className="text-3xl font-extrabold dark:text-white mt-3 text-center">
            Welcome to {AppSettings.COMPANY_NAME}&#39;s Dashboard
        </h1>
        <p className="text-sm text-gray-500 text-center">&#34;{motivation()}&#34;</p>
    </div>
  )
}
export default Home;