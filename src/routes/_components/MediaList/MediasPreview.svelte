<script>
    import SvelteTable from "svelte-table";

    const rows = [
        {id: 1, first_name: "Oresuki", rating: 1, episodes: 12},
        {id: 2, first_name: "Akame ga kill", rating: 10, episodes: 12},
        {id: 3, first_name: "Kimi no nowa", rating: 9, episodes: 12},
        {id: 4, first_name: "Bocu no hero academia", rating: 8, episodes: 12},
        {id: 5, first_name: "Bocu no pico", rating: 7, episodes: 12},
        {id: 6, first_name: "Durarara", rating: 6, episodes: 12},
        {id: 7, first_name: "Oregairu", rating: 4, episodes: 12},
        {id: 8, first_name: "Steins Gate", rating: 8, episodes: 12},
        {id: 9, first_name: "Another", rating: 4, episodes: 12},
        {id: 10, first_name: "When they cry", rating: 8, episodes: 12},
        {id: 11, first_name: "Hellsing OVA", rating: 9, episodes: 12},
        {id: 12, first_name: "Honseki no Kynojin", rating: 3, episodes: 12},
        {id: 13, first_name: "Code Geass", rating: 9, episodes: 24},
        {id: 14, first_name: "Re:Zero", rating: 10, episodes: 24},
        {id: 15, first_name: "Madoka Magica", rating: 1, episodes: 24},
        {id: 16, first_name: "Kyouse so rewa?", rating: 7, episodes: 24},
        {id: 17, first_name: "Black Lagoon", rating: 2, episodes: 11},
        {id: 18, first_name: "Honzuki no Gekokujou", rating: 3, episodes: 21},
        {id: 19, first_name: "Binbougami ga", rating: 2, episodes: 10},
        {id: 20, first_name: "Prison School", rating: 1, episodes: 12}
    ];
    const columns = [
        {
            key: "id",
            title: "#",
            value: v => v.id,
            sortable: true
        },
        {
            key: "first_name",
            title: "Name of media",
            value: v => v.first_name,
            sortable: true
        },
        {
            key: "rating",
            title: "Rate",
            value: v => v.rating,
            sortable: true
        },
        {
            key: "episodes",
            title: "Number of episodes",
            value: v => v.episodes,
            sortable: true
        }
    ];
</script>

<SvelteTable columns="{columns}" rows="{rows}"/>