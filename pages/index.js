import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="text-center">
      <Head>
        <title>Enoch Ndika - Dark mode with Tailwind and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      <button onClick={switchTheme}>Change theme</button>
    </div>
  );
}
