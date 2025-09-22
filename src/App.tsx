import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggole";

const socialLinks = [
	{
		icon: <img src="/images/github.svg" alt="Github" className="w-5 h-5" />,
		label: "GitHub",
		url: "https://github.com/promonkeyli",
	},
	{
		icon: <img src="/images/envelope.svg" alt="Email" className="w-5 h-5" />,
		label: "Email",
		url: "mailto:liyang_email@163.com",
	},
	{
		icon: <img src="/images/bilibili.svg" alt="Bilibili" className="w-5 h-5" />,
		label: "Bilibili",
		url: "https://space.bilibili.com/125441145",
	},
	{
		icon: <img src="/images/blog.svg" alt="Blog" className="w-5 h-5" />,
		label: "Blog",
		url: "https://blog.promonkeyli.top",
	},
];

const menuItems = [
	{
		icon: (
			<img
				src="/images/user.svg"
				alt="User"
				className="w-5 h-5 dark:text-white"
			/>
		),
		label: "在线简历",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img
				src="/images/list.svg"
				alt="List"
				className="w-5 h-5 dark:text-white"
			/>
		),
		label: "作品展示",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img
				src="/images/file.svg"
				alt="File"
				className="w-5 h-5 dark:text-white"
			/>
		),
		label: "知识笔记",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img
				src="/images/setting.svg"
				alt="Setting"
				className="w-5 h-5 dark:text-white"
			/>
		),
		label: "工具整理",
		url: "https://notes.promonkeyli.top",
	},
];

function App() {
	return (
		<div className="min-h-screen min-w-[400px] flex flex-col items-center justify-center px-4 py-10 sm:py-16 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
			{/* 顶部：仅主题切换，右对齐，无装饰 */}
			<header className="w-full max-w-5xl mx-auto px-2 sm:px-4">
				<div className="flex items-center justify-end py-2 sm:py-3">
					<ThemeToggle />
				</div>
			</header>

			{/* 主体：居中单列 Hero + 下方菜单网格 */}
			<main className="w-full max-w-5xl mx-auto px-2 sm:px-4">
				<section className="flex flex-col items-center text-center">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="rounded-full p-[3px] bg-white dark:bg-neutral-950 shadow-sm ring-1 ring-neutral-200/80 dark:ring-neutral-800/80"
					>
						<img
							src="/images/avatar.jpg"
							alt="avatar"
							title="Young"
							className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
						/>
					</motion.div>
					<h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
						Young
					</h1>
					<p className="mt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
						前端工程师 / 分享与创作
					</p>
					{/* 社交按钮（图标上、文字下） */}
					<div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3">
						{socialLinks.map((item) => (
							<motion.a
								key={item.label}
								href={item.url}
								target="_blank"
								whileHover={{ y: -2, scale: 1.03 }}
								className="group flex flex-col items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/80 backdrop-blur px-4 py-3 shadow-sm hover:shadow-md transition text-neutral-700 dark:text-neutral-200 [&_img]:h-5 [&_img]:w-5 dark:[&_img]:invert"
							>
								<span className="flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
									{item.icon}
								</span>
								<span className="mt-1.5 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300">
									{item.label}
								</span>
							</motion.a>
						))}
					</div>
				</section>

				{/* 菜单网格 */}
				<section className="mt-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
						{menuItems.map((item) => (
							<motion.div key={item.label} whileHover={{ y: -3, scale: 1.02 }}>
								<a
									href={item.url}
									target="_blank"
									className="flex items-center justify-center gap-2 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/80 backdrop-blur shadow-sm hover:shadow-md cursor-pointer transition group [&_img]:h-5 [&_img]:w-5 dark:[&_img]:invert"
								>
									<span className="opacity-90 group-hover:opacity-100 transition">
										{item.icon}
									</span>
									<span className="font-medium text-neutral-700 dark:text-neutral-200">
										{item.label}
									</span>
								</a>
							</motion.div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
export default App;
