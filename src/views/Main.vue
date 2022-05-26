<template>
	<sectionHeader />
	<main class="container__main">
		<illustrationCaption />
		<!-- <p class="caption" v-if="currentPart == 'get-on'">The bike</p> -->
		<div>
			<sectionIllustration />
			<sectionNav />
		</div>

	</main>
</template>

<script>


import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionIllustration from '@/components/sections/SectionIllustration.vue'
import SectionNav from '@/components/sections/SectionNav.vue'

import illustrationCaption from '@/components/ui/UiIllustrationCaption.vue'


export default {
	name: 'Main',
	
	components: {
		SectionHeader,
		SectionIllustration,
		SectionNav,
		illustrationCaption
	},

	mounted(){
		this.$store.commit('firstStep')
	},
}
</script>
 