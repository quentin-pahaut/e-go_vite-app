<template>
	<header class="section section--header" >
		<ul class="step-list step-list--name">
			<li class="step-list__el step-list__el--name" :class="{ 'step-list__el--active': currentPart ==  'get-on'}">I can Get</li>
			<li class="step-list__el step-list__el--name" :class="{ 'step-list__el--active': currentPart ==  'authorise'}">I authorise</li>
			<li class="step-list__el step-list__el--name" :class="{ 'step-list__el--active': currentPart ==  'take-1'}">I can Make</li>
			<li class="step-list__el step-list__el--name" :class="{ 'step-list__el--active': currentPart ==  'pedal-1'}">I can Pedal</li>
			<li class="step-list__el step-list__el--name" :class="{ 'step-list__el--active': currentPart ==  'end'}">I've done high</li>
		</ul>
		<Logo />
		<ul class="step-list step-list--number">
			<li class="step-list__el step-list__el--number" :class="{ 'step-list__el--active': currentPart ==  'get-on'}">On<span>e</span></li>
			<li class="step-list__el step-list__el--number" :class="{ 'step-list__el--active': currentPart ==  'authorise'}">T<span>w</span>o</li>
			<li class="step-list__el step-list__el--number" :class="{ 'step-list__el--active': currentPart ==  'take-1'}">Th<span>re</span>e</li>
			<li class="step-list__el step-list__el--number" :class="{ 'step-list__el--active': currentPart ==  'pedal-1'}">Fo<span>u</span>r</li>
			<li class="step-list__el step-list__el--number" :class="{ 'step-list__el--active': currentPart ==  'end'}">Five</li>
		</ul>
	</header>
</template>

<script>

import Logo from '@/components/ui/UiLogo.vue'

export default {

	Name: 'SectionHeader',
	//DATA = Variables statiques définies dans le composant

	components:{ 
		Logo,
	},

	data(){
		return {
			currentPart : this.$store.state.appStep,
		}
	}

}
</script>

<style lang="scss" scoped>
.logo{
	grid-column: 2;
}

.section--header{
	display: grid;
	grid-template-columns: 6fr 3fr 3fr;
	// margin : 4.5vw 4.5vw 0 4.5vw;
}

.step-list{
	&--name{
		grid-column: 1;
	}
	&--number{
		grid-column: 3;
	}

	&__el{
		font-size: 4.8vw;
		font-weight: 500;
		// line-height: 1.5;
		color: $color-first--offset;
		&--number{
			text-align: right;		
		}
		&--active{
			color:$color-first;
			font-weight: 700;

			&> span{
				color: $color-first--offset;
				font-weight: 500;
			}
		}
	}
}


</style>