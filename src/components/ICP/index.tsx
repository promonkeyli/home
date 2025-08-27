/**
 * @description ICP 备案信息组件
 */
function ICP() {
	const copyRightString = `Copyright@${new Date().getFullYear()} Design by Young`;

	return (
		<div className="w-full pb-2 text-xs tracking-widest flex flex-col justify-center items-center gap-1 sm:flex-row sm:gap-3">
			<span>{copyRightString}</span>
			<a
				target="_blank"
				rel="noreferrer"
				href=" https://beian.miit.gov.cn/"
				className="no-underline"
			>
				蜀ICP备2022005564号
			</a>
			{/*<a*/}
			{/*	target="_blank"*/}
			{/*	rel="noreferrer"*/}
			{/*	href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51082402000177"*/}
			{/*	className="no-underline"*/}
			{/*>*/}
			{/*	川公网安备 51082402000177号*/}
			{/*</a>*/}
		</div>
	);
}

export default ICP;
