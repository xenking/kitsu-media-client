<script>
    import Editor from '../../_components/ArticleList/ArticleEditor.svelte';

    let article = {title: '', description: '', body: '', tagList: []};
</script>

<Editor {article}/>