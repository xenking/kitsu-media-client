<script>
    export let usersCount;
    export let page;

    let range;

    {
        range = [];
        for (let i = 0; i < Math.ceil(usersCount / 10); ++i) {
            range.push(i);
        }
    }
</script>

{#if usersCount > 10}
    <nav>
        <ul class="pagination">

            {#each range as v}
                <li class='page-item {v === page ? "active": ""}'>
                    <a class="page-link" href="/{v ? v + 1 : ''}">{v + 1}</a>
                </li>
            {/each}
        </ul>
    </nav>
{/if}