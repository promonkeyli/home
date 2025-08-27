import Avatar from "@/components/Avatar";
import ICP from "@/components/ICP";
import Nav from "@/components/Nav";
import Skill from "@/components/Skill";
import Social from "@/components/Social";

function App() {
	return (
		<div className="w-screen h-screen overflow-y-auto grid grid-rows-[1fr_50px]">
			<div className="h-full min-w-[350px] grid grid-cols-1 md:grid-cols-[400px_1fr]">
				<section className="flex flex-col justify-center items-center gap-5 sm:gap-10 py-5 sm:py-20">
					<Avatar />
					<Social />
				</section>
				<section className="w-full p-5 sm:p-20 grid place-content-center">
					<section className="h-[50px]">
						<Skill />
					</section>
					<section className="pt-10 sm:pt-20">
						<Nav />
					</section>
				</section>
			</div>
			{/* 备案信息 */}
			<ICP />
		</div>
	);
}
export default App;
