
<div class="p-1 mt-1">
    <style>
        input[type="number"] {
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            appearance: initial;
        }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }

        .number-input {
            display: inline-flex;
        }

        .number-input,
        .number-input * {
            box-sizing: border-box;
        }

        .number-input button {
            outline: none;
            -webkit-appearance: none;
            background-color: transparent;
            border: none;
            align-items: center;
            justify-content: center;
            width: 1rem;
            height: 2rem;
            cursor: pointer;
            margin: 0;
            position: relative;
        }

        .number-input button:before,
        .number-input button:after {
            display: inline-block;
            position: absolute;
            content: '';
            width: 0.75rem;
            height: 1px;
            background-color: #3a415e;
            transform: translate(-50%, -50%);
        }

        .number-input button.plus:after {
            transform: translate(-50%, -50%) rotate(90deg);
        }

        .number-input button:hover:after, .number-input button:hover:before {
            background-color: #ffcf00;
        }

        .number-input input[type=number] {
            max-width: 3rem;
            font-size: 1.25rem;
            height: 2rem;
            text-align: center;
            border-color: white;
            border-width: 2px;

        }

        .inputers input:hover {
            border-color: #ffcf00;
        }

        .inputers input:focus {
            border-color: #ffcf00;
        }

        .rating input {
            color: #3a415e;
        }
    </style>

    <div class="grid md:grid-cols-12 grid-cols-2 w-full">
        <div class="grid col-start-1 md:col-end-10 col-end-9 grid-cols-12">
            <div>
                <span class="cursor-default truncate">
                    120
                </span>
            </div>
            <div class="md:col-start-2 col-start-3 col-end-12 text-indigo-700">
                <span class="cursor-pointer hover:text-yellow-500 ">
                    Непризнанный школой владыка демонов! Сильнейший владыка демонов в истории поступает в академию, переродившись своим потомком
                </span>
            </div>
        </div>
        <div class="inputers col-start-10 col-end-13 md:grid grid-cols-2 hidden">
            <div class="rating ml-1">
                <input class="border-2 border-white rounded h-8 w-12
                        mb-3 focus:outline-none text-center
                        focus:border-yellow-400 hover:border-yellow-400" id="comment" min="0" max="10"
                       aria-valuemax="10" placeholder="─" type="number"/>
            </div>
            <div class="">
                <div class="number-input ml-2">
                    <input class="quantity focus:outline-none rounded" min="0" name="quantity" value="0" type="number">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus"></button>
                </div>
            </div>
        </div>

    </div>
</div>