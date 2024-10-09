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
		<footer className="flex flex-col bg-transparent p-2 gap-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white">
			<p className="text-sm self-center">
				Made with <DynamicThemeAwareContent />
				By Hasnaa Et-taleby
			</p>
		</footer>
	);
}
