import { Layout } from "~/components/Layout";
import { Hero } from "~/components/Hero";
import { Project, ProjectCard } from "~/components/Project";
import { LinkButton, LinkIcon } from "~/components/Links";

import Typewriter from "typewriter-effect";

const words = ["Hello, I'm Duale", "Hi, I'm Wale", "Hello, I'm Duale Siad"];

export default function Home() {
    return (
        <Layout>
            <Hero>
                <h1 className="mb-8 text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pine to-rose">
                    <Typewriter
                        options={{
                            strings: words,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <h2 className="mb-8 text-2xl font-semibold tracking-tight text-transparent bg-clip-text text-text-dawn dark:text-text">
                    I am a JVM programmer from Melbourne, Australia.
                </h2>
                <LinkIcon
                    href="https://twitter.com/spellsaidwrong"
                    icon={["fab", "twitter"]}
                />
                <LinkIcon
                    href="https://github.com/wale"
                    icon={["fab", "github"]}
                />
                <LinkIcon
                    href="https://unsplash.com/spellsaidwrong"
                    icon={["fab", "unsplash"]}
                />
                <LinkIcon
                    href="mailto:me@wale.id.au"
                    icon={["fas", "envelope"]}
                />
            </Hero>
            <Project>
                <h1 className="mb-8 text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pine to-rose">
                    Projects
                </h1>
                <ProjectCard
                    name="Mapping Melbourne"
                    description="Mapping Melbourne is an upcoming data science project that maps inequality in the state of Victoria."
                />
                <ProjectCard
                    name="prisma-client-kt"
                    description="prisma-client-kt is a Kotlin port of Prisma, a popular JavaScript ORM."
                />
                <ProjectCard
                    name="jptv"
                    description="A full-featured Java client for the Public Transport Victoria timetable API."
                />
            </Project>
        </Layout>
    );
}
