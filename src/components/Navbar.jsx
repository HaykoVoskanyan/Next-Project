import NavbarItem from "./NavbarItem";


export default function Navbar() {
  return (
    <div className="flex dark:bg-amber-600 bg-amber-200 p-4 lg:text-lg justify-center gap-8">
        <NavbarItem title='Trendong' param='fetchTrending'/>
        <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}

