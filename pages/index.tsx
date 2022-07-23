import { Layout } from "~/components/Layout";
import { Hero } from "~/components/Hero";

import Typewriter from "typewriter-effect";

const words = ["Hello, I'm Duale", "Hi, I'm Wale", "Hello, I'm Duale Siad"];

export default function Home() {
    return (
        <Layout>
            <Hero>
                <h1 className="mb-4 text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pine to-rose">
                    <Typewriter
                        options={{
                            strings: words,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-transparent bg-clip-text text-text-dawn dark:text-text">
                    I am a programmer from Melbourne, Australia.
                </h2>
            </Hero>
        </Layout>
    );
}
