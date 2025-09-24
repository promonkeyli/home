/**
 * @description 菜单导航组件
 */
import { motion } from "framer-motion";

const menuItems = [
	{
		icon: (
			<img src="/images/user.svg" alt="User" className="w-7 h-7 dark:invert" />
		),
		label: "在线简历",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img src="/images/list.svg" alt="List" className="w-7 h-7 dark:invert" />
		),
		label: "作品展示",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img src="/images/file.svg" alt="File" className="w-7 h-7 dark:invert" />
		),
		label: "知识笔记",
		url: "https://notes.promonkeyli.top",
	},
	{
		icon: (
			<img
				src="/images/setting.svg"
				alt="Setting"
				className="w-7 h-7 dark:invert"
			/>
		),
		label: "工具整理",
		url: "https://notes.promonkeyli.top",
	},
];

function MenuNav() {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
			{menuItems.map((item, i) => (
				<motion.div
					key={item.label}
					whileHover={{ y: -6, scale: 1.05 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: i * 0.05 }}
				>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white/20 p-7 shadow-sm backdrop-blur hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900/80 transition"
					>
						<span className="text-3xl opacity-80 group-hover:opacity-100 transition">
							{item.icon}
						</span>
						<span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
							{item.label}
						</span>
					</a>
				</motion.div>
			))}
		</div>
	);
}

export default MenuNav;
