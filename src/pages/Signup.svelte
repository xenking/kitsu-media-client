<style>
    input:checked + svg {
        display: block;
    }
</style>

<div class="flex bg-indigo-700 w-full h-screen" style="background-image: url('/i/background_image.jpg')">
    <div class="w-1/2">
        <div class="flex-col text-white m-8 ml-12 px-10 border-white">
            <div class="text-4xl text-yellow-500 uppercase font-bold">
                Kitsu media
            </div>
            <div class="text-2xl mt-32">
                <div class="text-5xl font-bold">
                    Download and watch!
                </div>
                <div class="mt-32">
                    Now you can download and watch anime in best quality also with great subtitles!
                </div>
            </div>
            <div class="flex mt-40">
                <div class="mr-6 cursor-pointer">pict1</div> <div class="mx-6 cursor-pointer">pict2</div> <div class="mx-6 cursor-pointer">pict3</div>
            </div>
        </div>
    </div>
    <div class="flex w-1/2">
        <div class="flex-col bg-white m-8 p-16 w-full rounded shadow">
            <div class="text-4xl font-bold mt-12">
                Sign Up
            </div>
            <div class="text-gray-600 mt-6">
                Already have an account? <span class="text-indigo-700 cursor-pointer hover: text-indigo-800 hover:underline">Log in</span>
            </div>
            <div class="mt-8">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        E-mail
                    </label>
                    <input class="shadow appearance-none border mt-2 rounded h-12 w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E-mail">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Hashpassword
                    </label>
                    <input class="shadow appearance-none border mt-2 rounded h-12 w-10/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Hashpassword">

                </div>
            </div>

            <div>
                <label class="flex justify-start items-start cursor-pointer transition duration-500">
                    <div class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input type="checkbox" class="opacity-0 absolute">
                        <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                    </div>
                    <div class="select-none">I agree to sell my mother</div>
                </label>
            </div>
            <button class="transition duration-500 shadow bg-indigo-700 h-12 mt-6 w-1/4 rounded-lg text-center text-white hover:bg-indigo-800">
                Sign up
            </button>
        </div>
    </div>
</div>