import React, { useEffect, useState } from "react";

import Logo from "../assets/halwot_logo.png";
import { Link, useLocation } from "react-router-dom";
import { RiCalendarEventFill, RiDashboardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GiPostStamp } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";

const AdminDashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMembershipOpen, setMembershipOpen] = useState(false);

  const toggleMembership = () => {
    setMembershipOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [activePage, setActivePage] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/members") {
      setActivePage("members");
    } else if (location.pathname === "/applications") {
      setActivePage("applications");
    } else if (location.pathname === "/Posts") {
      setActivePage("Posts");
    }
  }, [location]);
  return (
    <>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="#" class="flex ml-2 md:mr-24">
                <img src={Logo} class="h-8 mr-3" alt="FlowBite Logo" />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Halwot
                </span>
              </a>
            </div>
            <div className="flex items-center ml-3">
              <div className="relative ">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded={isOpen}
                    onClick={toggleDropdown}>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 text-base list-none   divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 z-50">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-black" role="none">
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate"
                        role="none">
                        neil.sims@halwot.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white transition-transform  -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full  w-64 px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <Link
              to="/dashboard"
              className={`${
                activePage === "Dashboard"
                  ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                  : "hover:bg-N99/50 text-N60"
              } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <RiDashboardFill />
                <span class="ml-3">Dashboard</span>
              </a>
            </Link>
            <li></li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleMembership}>
                <IoIosPeople className="text-xl" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Membership
                </span>
              </button>
              {isMembershipOpen && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Members
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Applications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Blacklist
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <RiCalendarEventFill className="text-xl" />
                <span class="flex-1 ml-3 whitespace-nowrap">Events</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiPostStamp className="text-xl" />
                <span class="flex-1 ml-3 whitespace-nowrap">Posts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GrAnnounce className="text-xl" />
                <span class="flex-1 ml-3 whitespace-nowrap"> Anouncement </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </>
  );
};

export default AdminDashboardLayout;
