<script>
    import {XCircleIcon} from 'svelte-feather-icons';
</script>

<div class="grid grid-cols-12 p-2">
    <div class="text-indigo-700  col-start-1 col-end-5">
        <span class="cursor-pointer hover:text-yellow-500">UserName</span>
    </div>
    <div class="col-start-6 col-end-9">
        <span>invite code</span>
    </div>
    <div class="col-start-10 col-end-12">
        <span>Date of registration: 01.02.2003</span>
    </div>
    <div class="cursor-pointer col-start-13 pt-2 ">
        <XCircleIcon class="text-red-500 hover:text-yellow-500" size="22"/>
    </div>
</div>