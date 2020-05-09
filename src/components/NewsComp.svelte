<script>
    import {MessageCircleIcon} from 'svelte-feather-icons'
</script>

<div class="md:w-11/12 w-full h-32 lg:h-64 border-2 flex flex-row rounded-lg shadow-md mt-8 md:ml-8">
    <div class="h-full md:w-64 w-4/12 float-left rounded-lg flex bg-gray-600 "></div>
    <div class="md:w-full w-10/12 h-24 flex flex-col pl-6 m-2">
        <div class="w-full">
            <span class="text-2xl font-bold">Title</span>
        </div>
        <div class="w-full">
            <span>A lot of some text</span>
        </div>
        <div class="flex-1 w-full lg:mt-32">
            <div class="inline-block mt-4">
                <span>Date</span>
            </div>
            <div class="cursor-pointer inline-block float-right mt-2 md:mr-4">
                <MessageCircleIcon size="32"/>
            </div>
        </div>
    </div>
</div>