<script lang="ts">
	let searchText = $state('');

	const portfolio: {
		title: string;
		description: string;
		github?: string;
		image: string;
		link: string;
	}[] = $state([
		{
			title: 'Project 1',
			description: 'Description 1',
			github: 'https://github.com/example/project1',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project1'
		},
		{
			title: 'Project 2',
			description: 'Description 2',
			github: 'https://github.com/example/project2',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project2'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			github: 'https://github.com/example/project3',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project3'
		},
		{
			title: 'Project 4',
			description: 'Description 4',
			github: 'https://github.com/example/project4',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project4'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			github: 'https://github.com/example/project3',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project3'
		},
		{
			title: 'Project 2',
			description: 'Description 2',
			github: 'https://github.com/example/project2',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project2'
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			image: 'https://www.dummyimg.in/placeholder',
			link: 'https://example.com/project3'
		}
	]);

	const filteredPortfolio = $derived(
		portfolio.filter(
			(item) =>
				item.title.toLowerCase().includes(searchText.toLowerCase()) ||
				item.description.toLowerCase().includes(searchText.toLowerCase())
		)
	);

	function handleInput(event: Event) {
		searchText = (event.target as HTMLInputElement).value;
	}
</script>

<div class="flex min-h-[95vh] flex-col items-center justify-center pt-10">
	<div class="flex max-w-4xl flex-col items-center justify-center">
		<h1 class="text-2xl font-bold">Portfolio</h1>
		<p class="my-2 text-center text-sm font-light">
			Here are some of the projects I've worked on. I've included a few of my personal projects and
			some of the projects I've worked on for others.
		</p>
		<div class="flex w-full flex-col gap-2">
			<input
				type="text"
				placeholder="Search..."
				class="border border-gray-700 px-2 text-center"
				bind:value={searchText}
				oninput={handleInput}
			/>
			<div class="grid grid-cols-1 gap-2">
				{#each filteredPortfolio as item}
					<div class="flex gap-2 border border-gray-700 p-2">
						<div class="relative h-[40vh] w-3/5 overflow-hidden">
							<img
								src={item.image}
								alt={item.title}
								class="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
						<div class="relative flex w-2/5 flex-col gap-2 px-2">
							<h2 class="text-2xl font-bold">{item.title}</h2>
							<p class="text-sm font-light italic">{item.description}</p>
							<div class="absolute right-0 bottom-0 flex gap-2">
								{#if item.github}
									<a href={item.github} target="_blank"> GitHub </a>
								{/if}
								{#if item.link}
									<a href={item.link} target="_blank"> Live </a>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
