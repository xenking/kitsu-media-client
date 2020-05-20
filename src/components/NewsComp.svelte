<script>
    import {MessageCircleIcon} from 'svelte-feather-icons'
</script>

<div class=" border-2 rounded-lg shadow-md m-2">
    <div class="md:w-full flex flex-col p-4">
        <div class="w-full">
            <span class="text-2xl font-bold">Title</span>
        </div>
        <div class="flex flex-row">
            <div>
                <span>from</span>
            </div>
            <div class="ml-2 hover:text-yellow-500 cursor-pointer hover:underline font-bold">
                <span>Author</span>
            </div>
            <div class="m-2 my-auto">
                <span>01.08.1999</span>
            </div>
        </div>

        <div class="w-full mt-4">
            <span>
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
                ...
            </span>
            <a href="/topic">
                <span class="hover:text-yellow-500 cursor-pointer hover:underline text-indigo-700">
                    Read more>>
                </span>
            </a>
        </div>
    </div>
    <div class="grid md:grid-cols-2 p-2 pr-4">
        <div class="w-full h-32 bg-gray-600 md:mr-2"></div>
        <div class="w-full h-32 bg-gray-600 md:ml-2 md:mt-0 mt-2 ml-0"></div>
    </div>
</div>