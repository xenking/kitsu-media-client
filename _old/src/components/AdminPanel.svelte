<script>
    import {BellIcon, UserIcon} from 'svelte-feather-icons';

</script>


<nav class="admin-panel bg-gray-800 pt-2 md:pt-0 pb-1 mt-0 h-auto fixed w-full z-20">

    <div class="flex flex-wrap items-center md:h-12 h-22">
        <div class="md:w-32 float-left"></div>
        <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                <span class="relative md:ml-32 w-full">
                    <input type="search" placeholder="Search"
                           class="w-full bg-gray-900 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal">
                    <div class="absolute search-icon" style="top: .5rem; left: .8rem;">
                        <svg class="fill-current pointer-events-none text-white w-4 h-4"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
        </div>

        <div class="flex w-full content-around justify-between md:w-1/3 md:justify-end">
            <ul class="list-reset flex-1 md:flex-none items-center">
                <li class="flex-1 md:flex-none md:mr-0 mr-3 float-left">
                    <a class="inline-block py-4 px-4 mt-2 hover:bg-gray-600 hover:text-yellow-500 text-white no-underline focus:bg-gray-900 focus:text-yellow-500 md:ml-0 ml-2"
                       href="#">
                        <BellIcon size="24 "/>
                    </a>
                </li>
                <li class="flex-1 md:flex-none md:ml-0 float-right md:mr-0 m-2">
                    <div class="relative inline-block cursor-pointer">
                        <button onclick="toggleDD('myDropdown')"
                                class="drop-button hover:bg-gray-600 hover:text-yellow-500 text-white focus:outline-none focus:text-yellow-500 focus:bg-gray-900">
                            <div class="inline-block align-middle m-2">
                                <UserIcon size="32"/>
                            </div>
                            <span class="m-4 inline-block">Hi, User</span>
                            <svg class="h-3 pr-2 fill-current inline" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </button>
                        <div id="myDropdown"
                             class="dropdownlist absolute bg-gray-800 text-white right-0 p-2 overflow-auto z-30 invisible">
                            <div class=" w-full px-16 pl-20"></div>
                            <a href="/users"
                               class="p-2 hover:bg-gray-700 text-white text-sm no-underline hover:no-underline block hover:text-yellow-500 focus:text-yellow-500 focus:bg-gray-900">
                                <i class="fa fa-user fa-fw"></i> <span>Profile</span></a>
                            <a href="/admin"
                               class="p-2 hover:bg-gray-700 text-white  text-sm no-underline hover:no-underline block hover:text-yellow-500 focus:text-yellow-500 focus:bg-gray-900">
                                <i class="fa fa-cog fa-fw"></i><span>AdminPanel</span></a>
                            <a href="#"
                               class="p-2 hover:bg-gray-700 text-white  text-sm no-underline hover:no-underline block hover:text-yellow-500 focus:text-yellow-500 focus:bg-gray-900">
                                <i class="fas fa-sign-out-alt fa-fw"></i><span>Log Out</span></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>