<template>
	<header class="container__header container__header--intro" :baseline-anim-step="baselineAnimStep" >
		<p class="baseline txt--xlarge">
			<span class="baseline__action">
				&nbsp;
				<span class="baseline__el baseline__el--1">I Think</span>
				<span class="baseline__el baseline__el--2">I Measure</span>
				<span class="baseline__el baseline__el--3">I Share</span>
			</span>
			<span class="my-friend-br">
			<span class="txt--large">The Weight</span> of My</span>
		</p>
		<Logo intro="true"/>
	</header>
</template>

<script>

import Logo from '@/components/ui/UiLogo.vue'

export default {

	Name: 'SectionBaseline',


	props:{
		
		baselineAnimStep: Number,

	},

	components: {
		Logo
	},




	data(){
		return {
			// animPhase1:this.introAnimStep1,
		}
	},

}
</script>

<style lang="scss" scoped>

.container__header--intro{
	transform: translateY(calc(100% + 4.5vh));

	&[baseline-anim-step="0"]{
		// animation: whole-baseline-animation reverse 0.8s ease-in forwards; 
	}

	&[baseline-anim-step="1"]{
		animation: whole-baseline-animation normal 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;  
	}

	&[baseline-anim-step="2"]{
		transform: translateY(0%); 
	
		.baseline__el--1{
			animation: action-baseline-animation-show 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
		}
	}

	&[baseline-anim-step="3"]{
		transform: translateY(0%); 
	
		.baseline__el--1{
			animation: action-baseline-animation-hide 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
		}
		.baseline__el--2{
			animation: action-baseline-animation-show 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
		}
	}

	&[baseline-anim-step="4"]{
		transform: translateY(0%); 
	
		.baseline__el--2{
			animation: action-baseline-animation-hide 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
		}
		.baseline__el--3{
			animation: action-baseline-animation-show 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
		}
	}
	&[baseline-anim-step="5"]{
		animation: whole-baseline-animation reverse 1s cubic-bezier(0.33, 1, 0.68, 1) forwards;  
	
		.baseline__el--3{
			transform: translateY(-100%);
		}
	}

}

.baseline{
	display:block;
	margin: auto 0 4.5vw 0;
	line-height: 1.3;


	&__action{
		overflow: hidden;
		display: block;
		position: relative;
	}
	&__el{
		display: block;
		position:absolute;
	}
}
.logo{
	grid-column: 2;
	height: 24vh;	
}




</style>