/**
 * @description Avatar 组件，展示个人头像以及跳转 github 主页使用
 */
function Avatar() {
	return (
		<div className="flex flex-col items-center gap-5">
			<a
				className="cursor-pointer inline-block"
				target="_blank"
				href="https://github.com/promonkeyli"
				rel="noopener"
				title="Young"
			>
				<img
					className="w-30 h-30 rounded-full"
					src="/images/avatar.jpg"
					alt="avatar"
				/>
			</a>
			<span className="text-4xl">Young</span>
		</div>
	);
}

export default Avatar;
