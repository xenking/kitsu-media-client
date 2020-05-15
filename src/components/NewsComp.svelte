<script>
    import {MessageCircleIcon} from 'svelte-feather-icons'
</script>

<div class="grid grid-cols-2 border-2 rounded-lg shadow-md m-2">
    <div class="w-full h-full rounded-lg bg-gray-600 "></div>
    <div class="md:w-full flex flex-col p-4">
        <div class="w-full">
            <span class="text-2xl font-bold">Title</span>
        </div>
        <div class="w-full mt-4">
            <span>
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some textA lot of some textA lot of some text
            </span>
        </div>
        <div class="flex-1 w-full mx-auto mt-4">
            <div class="inline-block mt-4">
                <span>Date</span>
            </div>
            <a href="/topic">
                <div class="cursor-pointer inline-block float-right mt-2 md:mr-4">
                    <MessageCircleIcon size="32"/>
                </div>
            </a>
        </div>
    </div>
</div>