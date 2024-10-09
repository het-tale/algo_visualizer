"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeAwareContent = () => {
	const { theme, systemTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<span>
			{currentTheme === "dark" ? <>&#128420;</> : <>&#129293;</>} and{" "}
			<span className="mr-1">&#9749;</span>
		</span>
	);
};

const DynamicThemeAwareContent = dynamic(
	() => Promise.resolve(ThemeAwareContent),
	{
		ssr: false
	}
);

export default function Footer() {
	return (
		<footer className="flex flex-col dark:bg-white dark:text-black p-2 gap-6 bg-zinc-950 text-white">
			<p className="text-sm self-center">
				Made with <DynamicThemeAwareContent />
				By Hasnaa Et-taleby
			</p>
		</footer>
	);
}
