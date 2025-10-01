import ThemeToggler from "./Components/themeToggler/themeToggler";

function App() {
	return (
		<>
			<ThemeToggler></ThemeToggler>
			<div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen p-6">
				<h1 className="text-2xl">Welcome to Dark Mode!</h1>
			</div>
		</>
	);
}

export default App;
