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
		link: "",
		title: "面试总结",
	},
	{
		icon: "/images/setting.svg",
		link: "",
		title: "工具整理",
	},
];

function Nav() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 place-items-center gap-5 sm:gap-10">
			{navList.map((item) => (
				<NavCard key={item.title} {...item} />
			))}
		</div>
	);
}
export default Nav;
