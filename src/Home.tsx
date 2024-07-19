import ThemeToggle from "./ThemeToogle"

function Home() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a]">
      <h1 className="text-3xl font-bold underline">
        Chat Gippity
      </h1>
      <ThemeToggle/>
      <input></input>
    </div>
  )
}

export default Home
