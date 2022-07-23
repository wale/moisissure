import { AppProps } from "next/app";

import "~/styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function App({ Component, pageProps }: AppProps) {
    library.add(fab);
    return <Component {...pageProps} />;
}
