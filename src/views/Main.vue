<template>
	<sectionHeader />
	<main class="container__main">
		<p>The bike</p>
		<sectionIllustration />
		<sectionNav />
	</main>
</template>

<script>
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionIllustration from '@/components/sections/SectionIllustration.vue'
import SectionNav from '@/components/sections/SectionNav.vue'

export default {
	name: 'Main',
	
	components: {
		SectionHeader,
		SectionIllustration,
		SectionNav
	}
}
</script>
 