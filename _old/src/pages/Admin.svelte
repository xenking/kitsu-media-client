<script>
    import User from "../components/UserPanel.svelte";

</script>

<div class="flex-col w-full md:w-7/12 lg:w-10/12 w-ful md:m-2">
    <div class="w-full md:h-20 h-32">
    </div>
    <div class="p-2 pl-4 rounded-lg border-2 w-full">
        <div class="text-center">
            <a href="#" class="focus:border-indigo-400 focus:bg-gray-400 focus:text-black">
                <div class="cursor-pointer
            hover:border-indigo-400 border-b-4 border-white p-2 text-gray-700">
                    <span>Users</span>
                </div>
            </a>
        </div>

        <div class="">
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    </div>
    <div class="w-full md:h-0 h-20">
    </div>
</div>