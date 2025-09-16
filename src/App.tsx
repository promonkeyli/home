import { motion } from "framer-motion";

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
		<div className="min-h-screen min-w-[400px] flex flex-col items-center justify-center px-4 py-10 bg-neutral-50 dark:bg-neutral-950">
			{/* 头像 */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-500 shadow-lg"
			>
				<img
					src="/images/avatar.jpg"
					alt="avatar"
					title="Young"
					className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-neutral-900"
				/>
			</motion.div>

			{/* 名称 */}
			<h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
				Young
			</h1>

			{/* 社交按钮 */}
			<div className="flex gap-3 mt-6">
				{socialLinks.map((item) => (
					<motion.a
						key={item.label}
						href={item.url}
						target="_blank"
						whileHover={{ scale: 1.05 }}
						className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:text-white transition"
					>
						{item.icon}
					</motion.a>
				))}
			</div>

			{/* 菜单区块 */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 w-full max-w-md">
				{menuItems.map((item) => (
					<motion.div key={item.label} whileHover={{ y: -3, scale: 1.02 }}>
						<a
							href={item.url}
							target="_blank"
							className="flex items-center justify-center gap-2 p-6 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md cursor-pointer transition"
						>
							{item.icon}
							<span className="font-medium text-neutral-700 dark:text-neutral-200">
								{item.label}
							</span>
						</a>
					</motion.div>
				))}
			</div>
		</div>
	);
}
export default App;
