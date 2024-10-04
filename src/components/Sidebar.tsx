"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";

const SidebarItem = ({ title, dropdown, items }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-all duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <span>{title}</span>
        {dropdown ? (
          isOpen ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )
        ) : null}
      </div>
      {isOpen && dropdown && (
        <ul className="pl-4">
          {items.map((item: string, index: number) => (
            <li
              key={index}
              className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false); // For company dropdown

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white h-full shadow-lg p-4 transition-all duration-300 flex flex-col min-h-screen`} // Sidebar tam ekran olacak şekilde
    >
      {/* Company Section */}
      <div
        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
        className="flex justify-between items-center cursor-pointer p-2 rounded-lg transition-colors duration-300 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100"
      >
        <div className="flex items-center space-x-2">
          <div className="bg-gray-400 h-8 w-8 rounded-full"></div> {/* Empty logo */}
          {isOpen && (
            <div>
              <h2 className="font-semibold">MSE General</h2>
              <p className="text-sm text-gray-400">Branch: Dashboard</p>
            </div>
          )}
        </div>
        {isOpen && (
          <div>
            {isCompanyOpen ? (
              <FiChevronDown className="ml-2" />
            ) : (
              <FiChevronRight className="ml-2" />
            )}
          </div>
        )}
      </div>

      {isCompanyOpen && isOpen && (
        <ul className="pl-4">
          {/* Example dropdown items */}
          <li className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100">
            Company Info
          </li>
          <li className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-100">
            Company Settings
          </li>
        </ul>
      )}

      {/* Arama Çubuğu */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 mb-6">
        <FiSearch className="text-gray-500" />
        {isOpen && (
          <input
            className="ml-2 bg-white outline-none w-full text-gray-900"
            placeholder="Search..."
          />
        )}
      </div>

      {/* Menü Öğeleri */}
      <ul className="flex-1">
        <SidebarItem title="Dashboard" dropdown={false} />
        <SidebarItem
          title="Group Analysis"
          dropdown={true}
          items={["Analysis 1", "Analysis 2"]}
        />
        <SidebarItem
          title="Guest Relations"
          dropdown={true}
          items={["Guest 1", "Guest 2"]}
        />
        <SidebarItem
          title="Settings"
          dropdown={true}
          items={["Profile", "Account Settings"]}
        />
        <SidebarItem
          title="Integrations"
          dropdown={true}
          items={["Integration 1", "Integration 2"]}
        />
        <SidebarItem
          title="Log"
          dropdown={true}
          items={["Log 1", "Log 2"]}
        />
        <SidebarItem
          title="Modules"
          dropdown={true}
          items={["Module 1", "Module 2"]}
        />
      </ul>

      {/* Alt Menü - Support ve Dil */}
      <div className="mt-auto space-y-4">
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <FiSearch className="text-lg" />
          {isOpen && <span>Support</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-500 hover:text-black hover:bg-gray-200 hover:shadow-lg hover:opacity-100 transition-all duration-300 cursor-pointer border border-transparent rounded-lg p-2">
          <FiSearch className="text-lg" />
          {isOpen && <span>English</span>}
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <FiSearch className="text-lg" />
          {isOpen && <span>Version 12.5.23</span>}
        </div>
        <div className="flex items-center space-x-2">
          <FiSearch className="text-lg" />
          {isOpen && (
            <div>
              <h2 className="font-semibold">Murat Tenil</h2>
              <p className="text-xs text-gray-500">murattenil@icloud.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
