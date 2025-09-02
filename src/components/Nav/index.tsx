/**
 * @description 导航
 */
import NavCard, { type NavCardProps } from "@/components/NavCard";

const navList: Array<NavCardProps> = [
	{
		icon: "/images/file.svg",
		link: "",
		title: "在线简历",
	},
	{
		icon: "/images/list.svg",
		link: "",
		title: "作品展示",
	},
	{
		icon: "/images/user.svg",
		link: "https://notes.promonkeyli.top",
		title: "知识笔记",
	},
	{
		icon: "/images/setting.svg",
		link: "",
		title: "工具整理",
	},
];

function Nav() {
	return (
		<div className="w-full px-5 grid grid-cols-2 md:grid-cols-4 place-items-center gap-5">
			{navList.map((item) => (
				<NavCard key={item.title} {...item} />
			))}
		</div>
	);
}
export default Nav;
