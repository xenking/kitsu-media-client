<script>
	import Router from './pager/Router.svelte';
	import Route from './pager/Route.svelte';
	import NotFound from './pager/NotFound.svelte';

	import Menu from './components/Menu.svelte';

	import Home from './pages/Home.svelte';
	import Profile from './pages/Profile.svelte';
	import Signup from './pages/Signup.svelte';
	import Tailwindcss from "./Tailwindcss.svelte";
</script>

<Tailwindcss />

<main class="flex">
	<Menu/>
	<div class="ml-64">
		<Router>
			<Route path="/" component="{Home}"/>
			<Route path="/profile" component="{Profile}"/>
			<Route path="/signup" component="{Signup}"/>
			<Route path="/news">
				<h1>Latest News</h1>
				<p>Finally some good news!</p>
			</Route>
			<NotFound>
				<h1>Sorry. Page not found.</h1>
			</NotFound>
		</Router>
	</div>
</main>