<script>
    import Comment from '../components/Comment.svelte';
</script>

<div class="p-4 pl-6 w-full">

    <div class="w-full md:h-20 h-32">
    </div>

    <div class="border-2 rounded-lg w-full shadow-md p-4">
        <div class="md:m-4 h-full">
            <div class="uppercase text-2xl font-bold mx-auto">
                <span class="h-auto w-auto">Title</span>
            </div>
            <div class="">
                <div class="flex flex-row">
                    <div>
                        <span>from</span>
                    </div>
                    <div class="ml-2 hover:text-yellow-500 cursor-pointer hover:underline">
                        <span>Author</span>
                    </div>
                    <div class="m-2 my-auto">
                        <span>01.08.1999</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-col p-4 m-auto text-lg align-middle mb-4">
            <span>
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
                A lot of some textA lot of some textA lot of some textA lot of some text
            </span>
        </div>
        <div class=" grid md:grid-cols-2 p-2 pr-4">
            <div class="w-full h-64 bg-gray-600 mr-2 mb-2 md:md-0 ">
            </div>
            <div class="w-full h-64 bg-gray-600 md:ml-2">
            </div>
        </div>
    </div>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <div class="border-2 rounded-lg p-4 mt-4">
        <div class="font-bold mx-auto text-lg">
            <span>Write a comment</span>
        </div>
        <div class="w-full">
            <textarea class="pb-20 shadow-lg border-2 mt-2 rounded h-32 w-full
             py-2 px-3 text-gray-700 mb-3 focus:outline-none
              focus:border-yellow-500" id="comment" type="text" placeholder="Your comment"></textarea>
        </div>
        <div>
            <button class="transition duration-500 shadow bg-indigo-700 h-12 px-10 rounded-lg text-center text-white hover:bg-indigo-800 focus:outline-none float-right">
                <span>Write</span>
            </button>
        </div>
    </div>
    <div class="w-full md:h-0 h-20">
    </div>
</div>
