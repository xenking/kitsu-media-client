
<script>
	import Router from './pager/Router.svelte';
	import Route from './pager/Route.svelte';
	import NotFound from './pager/NotFound.svelte';

	import Menu from './components/Menu.svelte';
	import AdminPanel from './components/AdminPanel.svelte';

	import Home from './pages/Anime.svelte';
	import Profile from './pages/Profile.svelte';
	import Signup from './pages/Signup.svelte';
	import News from './pages/News.svelte';
	import Tailwindcss from "./Tailwindcss.svelte";
	import NotFoundPage from "./pages/NotFoundPage.svelte";

</script>

<Tailwindcss />

<main>
	<div class="flex flex-col md:flex-row">
		<Router>
			<AdminPanel/>
			<Menu/>
			<Route path="/" component="{Home}"/>
			<Route path="/profile" component="{Profile}"/>
			<Route path="/news" component="{News}"/>
			<NotFound>
				<NotFoundPage/>
			</NotFound>
		</Router>
	</div>
</main>

