<script>
    import Anime from './ProfileMainAnime.svelte';
</script>

<div class="w-full p-2 md:ml-1">
    <div class="p-1 mt-1">
        <div class="grid grid-cols-12 w-full font-bold">
            <div class="grid col-start-1 md:col-end-10 col-end-9 grid-cols-12">
                <div class="">
                    <span class="cursor-default">
                        #
                    </span>
                </div>
                <div class="md:col-start-2 col-start-3 md:col-end-12 flex flex-l">
                    <span class="cursor-pointer hover:underline">
                        Title name
                    </span>
                </div>
            </div>
            <div class="md:col-start-10 col-start-9 col-end-13 grid grid-cols-4">
                <div>
                    <span class="cursor-pointer hover:underline">
                        Rating
                    </span>
                </div>
                <div class="col-start-3">
                    <span class="cursor-pointer hover:underline">
                        Series
                    </span>
                </div>
            </div>

        </div>
    </div>
    <div class="w-full border-2 border-gray-500 rounded-lg">
        <div class="p-1 mt-1">
            <div class="grid grid-cols-12 w-full">
                <div class="grid col-start-1 md:col-end-10 col-end-9 grid-cols-12">
                    <div>
                        <span class="cursor-default">
                            1.
                        </span>
                    </div>
                    <div class="md:col-start-2 col-start-3 col-end-12 text-indigo-700">
                        <span class="cursor-pointer hover:text-yellow-500 ">
                            Непризнанный школой владыка демонов! Сильнейший владыка демонов в истории поступает в академию, переродившись своим потомком
                        </span>
                    </div>
                </div>
                <div class="md:col-start-10 col-start-9 col-end-13 grid grid-cols-4">
                    <div>
                        <span>
                            Rating
                        </span>
                    </div>
                    <div class="col-start-3">
                        <span>
                            Series
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
        <Anime/>
    </div>
</div>