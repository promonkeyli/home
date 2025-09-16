import Avatar from "@/components/Avatar";
import Nav from "@/components/Nav";
import Social from "@/components/Social";

function App() {
	return (
		<div className="h-screen overflow-y-auto container min-w-[400px] mx-auto grid grid-rows-[1fr_1fr] place-items-center">
			<section className="flex flex-col gap-10">
				<Avatar />
				<Social />
			</section>
			<Nav />
		</div>
	);
}
export default App;
