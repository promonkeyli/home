import Avatar from "@/components/Avatar";
import ICP from "@/components/ICP";
import Nav from "@/components/Nav";
import Social from "@/components/Social";

function App() {
	return (
		<div className="h-screen overflow-y-auto">
			<div className="h-full container min-w-[400px] mx-auto grid grid-rows-[1fr_1fr_50px] place-items-center">
				<section className="flex flex-col gap-10">
					<Avatar />
					<Social />
				</section>
				<Nav />
				<ICP />
			</div>
		</div>
	);
}
export default App;
