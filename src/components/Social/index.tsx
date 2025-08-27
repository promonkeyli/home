/**
 * @description 社交工具展示
 */

interface SocialItem {
	name: string;
	icon: string;
	link: string;
}
const socialList: Array<SocialItem> = [
	{
		name: "github",
		icon: "/images/github.svg",
		link: "https://github.com/promonkeyli",
	},
	{
		name: "email",
		icon: "/images/envelope.svg",
		link: "mailto:liyang_email@163.com",
	},
	{
		name: "bilibili",
		icon: "/images/bilibili.svg",
		link: "https://space.bilibili.com/125441145",
	},
	{
		name: "blog",
		icon: "/images/blog.svg",
		link: "https://promonkeyli.github.io",
	},
];

function Social() {
	return (
		<div className="grid grid-cols-4 place-items-center gap-5">
			{socialList.map(({ name, link, icon }) => (
				<a
					key={name}
					href={link}
					target="_blank"
					className="cursor-pointer flex flex-col justify-center items-center gap-1"
				>
					<img src={icon} className="w-8 h-8" alt={name} />
					<span className="text-xs">{name}</span>
				</a>
			))}
		</div>
	);
}

export default Social;
