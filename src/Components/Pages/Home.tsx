import { useEffect, useState } from "react"
import { ArrowRight, ExternalLink, LinkIcon } from "lucide-react"
import { Link } from "react-router-dom";
import NavBar from "../SubComponents/NavBar";
import Footer from "../SubComponents/Footer";
import { useContextStore } from "@/Context/ContextApi";

const Home = () => {
    const [isAnimating, setIsAnimating] = useState(false)
    const { token } = useContextStore();


    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 2000)
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <NavBar />
            <main className="flex-1  bg-[#037164] text-[#FFFFE0]" >
                <section className="w-full pl-18 py-12 md:py-24 lg:py-32 ">
                    <div className="container px-4 md:px-6 ">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Shorten URLs, Expand Possibilities
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Create short, memorable links in seconds. Track clicks, customize URLs, and boost your online
                                        presence.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    {
                                        token ? <Link
                                            to="/dashBoard"
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        >
                                     <span className="text-amber-600"> Go to </span>  DashBoard
                                        </Link> :

                                            <Link
                                                to="/signup"
                                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            >
                                                Try for Free
                                            </Link>
                                    }

                                    <Link
                                        to="#features"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                            <div className="h-3 w-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <div className="flex items-center rounded-md border bg-muted/50 px-4 py-2">
                                                <span
                                                    className={`transition-all duration-1000 ${isAnimating ? "opacity-0 scale-95" : "opacity-100"}`}
                                                >
                                                    https://www.example.com/very/long/url/that/nobody/wants/to/share/or/remember?param=value&another=param
                                                </span>
                                                <span
                                                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                                                >
                                                    https://short.link/a1b2c3
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between rounded-md border bg-primary/10 px-4 py-2">
                                                <span className="font-medium text-primary">https://short.link/a1b2c3</span>
                                                <button className="text-primary hover:text-primary/80">
                                                    <ExternalLink className="h-4 w-4" />
                                                    <span className="sr-only">Copy link</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                    Everything you need to manage, track, and optimize your links
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <LinkIcon className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Custom Short Links</h3>
                                    <p className="text-muted-foreground">Create branded, memorable links that reflect your identity</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M3 3v18h18" />
                                        <path d="m19 9-5 5-4-4-3 3" />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                                    <p className="text-muted-foreground">Track clicks, locations, devices, and referrers in real-time</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Secure & Reliable</h3>
                                    <p className="text-muted-foreground">Enterprise-grade security with 99.9% uptime guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-6 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Pricing</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl">Start for free, upgrade as you grow</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Free</h3>
                                    <p className="text-muted-foreground">Perfect for personal use</p>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">$0</span>
                                    <span className="ml-1 text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Up to 50 links
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Basic analytics
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Standard support
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/signup"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Try for Free
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Pro</h3>
                                    <p className="text-muted-foreground">For growing businesses</p>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">$19</span>
                                    <span className="ml-1 text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Unlimited links
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Advanced analytics
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Custom domains
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Priority support
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/signup"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm md:col-span-2 lg:col-span-1">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Enterprise</h3>
                                    <p className="text-muted-foreground">For large organizations</p>
                                </div>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">Custom</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Everything in Pro
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        SSO & team management
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Dedicated support
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4 text-primary"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Custom integrations
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to simplify your links?</h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                                Join thousands of marketers, content creators, and businesses who trust ShortLink.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                            <Link
                                to="/signup"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Try for Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;