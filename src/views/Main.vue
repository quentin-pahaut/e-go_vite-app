<template>
	<sectionHeader />
	<main class="container__main">
		<!-- <illustrationCaption /> -->
		<sectionIllustration />
		<sectionNav />
	</main>
</template>

<script>


import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionIllustration from '@/components/sections/SectionIllustration.vue'
import SectionNav from '@/components/sections/SectionNav.vue'

// import illustrationCaption from '@/components/ui/UiIllustrationCaption.vue'


export default {
	name: 'Main',
	
	components: {
		SectionHeader,
		SectionIllustration,
		SectionNav,
		// illustrationCaption
	},

	mounted(){
		this.$store.commit('firstStep')
	},
}
</script>

<style lang="scss" scoped>
.section{
	&--header{
		animation: main-header-show-animation 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}
	&--illustration {
		animation: main-illustration-show-animation 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}
	&--nav{
		animation: whole-baseline-animation 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}	
}




</style>
 