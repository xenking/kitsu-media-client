<script>
    import {UserIcon} from 'svelte-feather-icons';
</script>

<div class="h-32 w-full z-50 pt-4 pl-5 text-black">
    <div class="flex flex-row w-full p-1">

        <div class="bg-indigo-400 md:w-20 w-24 h-20 border-2 rounded-full block cursor-pointer pt-3 hover:text-yellow-500 mt-2">
            <UserIcon class="m-auto" size="50"/>
        </div>
        <div class="w-full">
            <div class="text-4xl md:ml-4 md:mt-4 mt-5 ml-8 cursor-pointer float-left ">
                <span>Nickname</span>
            </div>
            <div class="grid grid-cols-4 mr-3 mt-6 float-right hidden md:flex">
                <div class="bg-indigo-400 w-10 h-10 cursor-pointer rounded-full border-2">
                </div>
                <div class="bg-indigo-400 w-10 h-10 cursor-pointer rounded-full border-2 ml-1">
                </div>
                <div class="bg-indigo-400 w-10 h-10 cursor-pointer rounded-full border-2 ml-1">
                </div>
                <div class="bg-indigo-400 w-10 h-10 cursor-pointer rounded-full border-2 ml-1">
                </div>
            </div>
        </div>


    </div>

</div>