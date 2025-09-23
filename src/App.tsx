import MenuNav from "@/components/MenuNav";
import SocialLink from "@/components/SocialLink";
import ThemeToggle from "@/components/ThemeToggole";

function App() {
	return (
		<div
			className="min-h-screen min-w-[400px] flex flex-col
                       bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200
                     dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
		>
			{/* 顶部：右上角固定主题切换 */}
			<header className="w-full flex justify-end px-6 py-4">
				<ThemeToggle />
			</header>

			{/* 主体内容：居中展示 */}
			<main className="flex-1 flex flex-col items-center justify-center px-4">
				<section className="w-full flex flex-col items-center text-center space-y-8">
					{/* 社交链接区域 */}
					<SocialLink />

					{/* 导航菜单区域 */}
					<div className="mt-6 w-full max-w-3xl">
						<MenuNav />
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
