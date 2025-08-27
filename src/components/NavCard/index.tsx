/**
 * @description 个人作品展示卡片组件
 */

export interface NavCardProps {
	icon: string;
	title: string;
	link: string;
}

function NavCard({ icon, title, link }: NavCardProps) {
	return (
		<div className="w-full h-[80px] sm:h-[110px] border border-[#e5e5e5] rounded-md sm:rounded-md grid place-content-center cursor-pointer">
			<a
				href={link}
				target="_blank"
				className="flex justify-center items-center gap-2"
			>
				<img src={icon} className="w-5 h-5 sm:w-7 sm:h-7" alt={title} />
				<span className="tracking-widest text-sm sm:text-md">{title}</span>
			</a>
		</div>
	);
}

export default NavCard;
