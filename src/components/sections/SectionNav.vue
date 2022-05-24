<template>
	<section class="section section--nav">
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__el"><backButton @click.prevent="clickBack" :disable="buttonStatus"/></li>
				<li class="nav__el"><nextButton @click.prevent="clickNext" :disable="buttonStatus"/></li>
			</ul>
		</nav>
	</section>
</template>

<script>

import backButton from '@/components/ui/UiBackButton.vue'
import nextButton from '@/components/ui/UiNextButton.vue'

export default {

	Name: 'SectionNav',
	//DATA = Variables statiques définies dans le composant
	components:{
		backButton,
		nextButton
	},
	data(){
		return {
			buttonStatus:false,
			currentPart : this.$store.state.appStep,
		}
	},

	methods:{
		clickBack(){
			console.log("click back")
			this.$store.commit('previousStep')
			console.log(this.$store.state.appStep)

		},
		clickNext(){
			console.log("click next")
			this.$store.commit('nextStep')
			console.log(this.$store.state.appStep)

		}
	}
}
</script>

<style lang="scss" scoped>

.section--nav{
	margin : 4.5vw 0 0 0;
}
.nav{

	&__list{
		display:grid;
		grid-template-columns: repeat(4, 3fr);
		column-gap: 4.5vw;
	}

	&__el{
		position:relative;
		z-index: 10;
		width:100%;
		height: 0;
		padding-bottom:100%;

		box-sizing: border-box;


		border: solid 1px $color-first;

		&:first-child{
			grid-column: 1;
		}

		&:last-child{
		grid-column: 4;
		}
	}
}

</style>