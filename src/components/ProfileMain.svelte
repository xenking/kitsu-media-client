<script>
    import Anime from './ProfileMainAnime.svelte';
</script>

<div class="w-full p-2 md:ml-1">
    <div class="p-1 mt-1">
        <div class="grid md:grid-cols-12 grid-cols-1 w-full font-bold">
            <div class="grid grid-cols-12 md:col-start-1 md:col-end-10">
                <div class="">
                    <span class="cursor-default">
                        #
                    </span>
                </div>
                <div class="col-start-3 md:col-start-2 col-end-13">
                    <span class="cursor-pointer hover:underline">
                        Title name
                    </span>
                </div>
            </div>
            <div class="col-start-10 col-end-13 md:grid grid-cols-2 hidden">
                <div class="font-bold hover:underline cursor-pointer ">
                    <span>
                        Rating
                    </span>
                </div>
                <div class="font-bold hover:underline cursor-pointer ml-1">
                    <span>
                        Series
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full border-2 border-gray-500 rounded-lg">
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
    </div>
</div>