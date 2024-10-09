import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import ModeToggle from "./mode-toggle";
import { ReactNode } from "react";

export default function SocialAccounts() {
	const accounts: { name: string; icon: ReactNode; link: string }[] = [
		{
			name: "GitHub",
			icon: <Icons.gitHub className="w-6 h-6" />,
			link: "https://github.com/het-tale"
		},
		{
			name: "Twitter",
			icon: <Icons.twitter className="w-6 h-6" />,
			link: "https://x.com/het_tale"
		},
		{
			name: "LinkedIn",
			icon: <Icons.linkedin className="w-6 h-6" />,
			link: "https://www.linkedin.com/in/hasnaa-et-taleby/"
		}
	];
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{accounts.map((account, index) => (
					<NavigationMenuItem key={index}>
						<NavigationMenuLink
							href={account.link}
							className={cn(
								navigationMenuTriggerStyle(),
								"hover:bg-transparent dark:hover:text-white bg-transparent dark:text-white focus:bg-transparent"
							)}
						>
							{account.icon}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
				<NavigationMenuItem>
					<ModeToggle />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
