

export default function CategoriesBar() {
  return (
    <div className="bg-white text-sm shadow">
      <div className="max-w-screen-xl mx-auto flex space-x-6 px-4 py-3 text-purple-800 font-medium relative">
        
        {/* Main Category Item with dropdown */}
        <div className="group relative">
          <button className="hover:text-purple-900">Electronics</button>

          {/* First Dropdown */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white w-48 mt-2 z-10">
            <ul>
              <li className="group relative px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Mobiles

                {/* Nested Dropdown (Sub-submenu) */}
                <div className="absolute left-full top-0 hidden group-hover:block bg-black text-white w-48 ml-1">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Samsung</li>
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">iPhone</li>
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Infinix</li>
                  </ul>
                </div>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Laptops</li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Headphones</li>
            </ul>
          </div>
        </div>

        {/* Another Main Category */}
        <div className="group relative">
          <button className="hover:text-purple-900">Fashion</button>
          <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white w-48 mt-2 z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Men</li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Women</li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Kids</li>
            </ul>
          </div>
        </div>

        {/* More categories as needed */}
      </div>
    </div>
  );
}
