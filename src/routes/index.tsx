import { createFileRoute } from "@tanstack/react-router";
import MenuNav from "@/components/MenuNav";
import SocialLink from "@/components/SocialLink";
import ThemeToggle from "@/components/ThemeToggole";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div
			className="min-h-screen flex flex-col pb-14
                       bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200
                     dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
		>
			{/* 顶部：右上角固定主题切换 */}
			<header className="w-full flex justify-end px-6 pt-4 pb-10">
				<ThemeToggle />
			</header>

			{/* 主体内容：居中展示 */}
			<main className="flex-1 flex flex-col items-center justify-center px-4">
				<section className="w-full flex flex-col items-center text-center space-y-8 px-2">
					{/* 社交链接区域 */}
					<SocialLink />

					{/* 导航菜单区域 */}
					<div className="mt-10 w-full sm:w-2/3 lg:w-1/2">
						<MenuNav />
					</div>
				</section>
			</main>
		</div>
	);
}
