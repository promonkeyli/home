/**
 * @description 社交链接组件
 */
import { motion } from "framer-motion";

const socialLinks = [
	{
		icon: (
			<img
				src="/images/github.svg"
				alt="Github"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "GitHub",
		url: "https://github.com/promonkeyli",
	},
	{
		icon: (
			<img
				src="/images/envelope.svg"
				alt="Email"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "Email",
		url: "mailto:liyang_email@163.com",
	},
	{
		icon: (
			<img
				src="/images/bilibili.svg"
				alt="Bilibili"
				className="w-5 h-5 dark:invert"
			/>
		),
		label: "Bilibili",
		url: "https://space.bilibili.com/125441145",
	},
	{
		icon: (
			<img src="/images/blog.svg" alt="Blog" className="w-5 h-5 dark:invert" />
		),
		label: "Blog",
		url: "https://blog.promonkeyli.top",
	},
];

function SocialLink() {
	return (
		<div className="flex flex-col items-center">
			{/* 头像 */}
			<motion.div
				initial={{ scale: 0.85, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="p-[3px] rounded-full bg-gradient-to-tr from-neutral-200 via-neutral-300 to-neutral-100 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 shadow-md"
			>
				<img
					src="/images/avatar.jpg"
					alt="avatar"
					title="Young"
					className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-2 ring-white dark:ring-neutral-950"
				/>
			</motion.div>

			{/* 名字 */}
			<motion.h1
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
			>
				Young
			</motion.h1>

			{/* 社交按钮 */}
			<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
				{socialLinks.map((item, i) => (
					<motion.a
						key={item.label}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm text-sm font-medium text-neutral-700 dark:text-neutral-200 transition"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: i * 0.08,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						whileHover={{
							scale: 1.08,
							boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
						}}
						whileTap={{ scale: 0.95 }}
					>
						<span className="text-lg">{item.icon}</span>
						{item.label}
					</motion.a>
				))}
			</div>

			{/*	分割线 */}
			<div className="mt-10 w-full max-w-md border-t border-neutral-200 dark:border-neutral-800"></div>
		</div>
	);
}

export default SocialLink;
