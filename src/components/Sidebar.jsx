import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "services" },
    { name: "DemoProject", path: "demoProject" },
    { name: "ReviewData ", path: "reviews" },
    { name: "Technologies", path: "technologies" },
    { name: "Blogs", path: "blogs" },
    { name: "Career", path: "career" },
    { name: "About Us", path: "aboutus" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col fixed">
      <h1 className="text-teal-400 text-2xl font-bold p-4 border-b border-gray-700">
        <img className="w-20" src="/logo.png" alt="" />
        Dashboard
      </h1>
      <nav className="flex flex-col p-4 space-y-4">
        {menuItems.map((item) => (
          <Link
            href={`/dashboard/${item.path}`}
            key={item.path}
            className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 px-3 py-2 rounded"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
