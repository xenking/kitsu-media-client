<script>
    import {HomeIcon, DownloadCloudIcon, CalendarIcon} from 'svelte-feather-icons';
</script>

<div class="bg-gray-800 shadow-lg h-16 fixed bottom-0 md:relative md:h-full z-50 w-full pt-1 md:w-64">
    <div class="md:w-56 md:float-none md:fixed md:left-0 md:top-0
    md:content-center text-center justify-between md:h-full bg-gray-800 md:bg-gray-700">
        <div class="md:flex hidden md:w-10/12 justify-center md:justify-start m-6 ml-2 pl-3 cursor-pointer ">
            <a href="#">
                <span class="text-yellow-500 font-bold uppercase text-2xl pl-2">Kitsu media</span>
            </a>
        </div>
        <div class="w-auto md:h-24 lg:h-40"></div>
        <ul class="list-reset flex md:flex-col py-0 md:py-3 text-center md:text-left">
            <li class=" flex-1 w-56">
                <a href="/"
                   class="block py-1 md:py-3 pl-2 align-middle text-white no-underline
                    hover:text-yellow-500 hover:bg-gray-600 focus:bg-gray-900 focus:text-yellow-500">
                    <div class="inline-block align-middle">
                        <HomeIcon size="22" class="flex"/>
                    </div>
                    <span class="pb-1 md:pb-0 md:ml-2 text-xs md:text-base block md:inline-block">Anime</span>
                </a>
            </li>
            <li class="md:mr-3 flex-1 w-56 ">
                <a href="/torrents" class="block py-1 md:py-3 pl-2 align-middle text-white no-underline
                 hover:text-yellow-500 hover:bg-gray-600 focus:bg-gray-900 focus:text-yellow-500">
                    <div class="inline-block align-middle">
                        <DownloadCloudIcon size="22" class="flex"/>
                    </div>
                    <span class="pb-1 md:pb-0 md:ml-2 text-xs md:text-base block md:inline-block">Torrents</span>
                </a>
            </li>
            <li class="flex-1 w-56 ">
                <a href="/news"
                   class="block py-1 md:py-3 pl-2 align-middle text-white no-underline
                    hover:text-yellow-500 hover:bg-gray-600 focus:bg-gray-900 focus:text-yellow-500">
                    <div class="inline-block align-middle">
                        <CalendarIcon size="22" class="flex"/>
                    </div>
                    <span class="pb-1 md:pb-0 md:ml-2 text-xs md:text-base block md:inline-block">News</span>
                </a>
            </li>
        </ul>
    </div>
</div>