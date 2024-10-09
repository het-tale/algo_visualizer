"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			size="icon"
			className="bg-transparent hover:bg-transparent dark:text-white"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black" />
			<Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
