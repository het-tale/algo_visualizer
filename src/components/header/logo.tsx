import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

export default function Logo({ isMobile }: Readonly<{ isMobile: boolean }>) {
	return (
		<Link
			href="/"
			className={cn(
				isMobile ? "flex justify-start items-center" : "hidden md:flex"
			)}
		>
			<Icons.logo className="w-12 stroke-current transition-all duration-200 hover:rotate-180 lg:w-14 bg-transparent rounded" />
			{isMobile && <span className="mx-4 font-normal">Het-tale</span>}
		</Link>
	);
}
