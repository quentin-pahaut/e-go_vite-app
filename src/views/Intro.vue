<template>
		<SectionBaseline :baselineAnimStep="animationStep"/>
		<main class="container__main container__main--intro">
			<SectionIllustration :shapesIlluStep="animationStep" :moveOutIllustration="animationEnd" />
			<SectionJourney :journeyStep="animationStep" :moveOutJourney="animationEnd"/>
		</main>
</template>

<script>


import SectionBaseline from '../components/sections/SectionBaseline.vue'
import SectionJourney from '../components/sections/SectionJourney.vue'
import SectionIllustration from '../components/sections/SectionIllustration.vue'

export default {
	name: 'Intro',
	
	components: {
		SectionBaseline,
		SectionJourney,
		SectionIllustration,

	},

	data(){
		return {
			animationStep:1,
			animationEnd:false,
			test:0,

		}
	},

	mounted(){
		this.introAnimation()
		// this.setCurrentPart()
	},

	watch: {
		'animationEnd':{
			handler:'endAnimationStatus',
			// deep:true
		}
		
	},

	methods: {

		introAnimation(){

			if (this.animationStep == 1) {
				setTimeout (()=>{

					this.animationStep++
					this.introAnimation()
				}, 2000)
			}
			else{
				setTimeout (()=>{	
					this.animationStep++
					
					if (this.animationStep < 5 ){
						this.introAnimation()
					}else {
						setTimeout(()=>{
							this.animationEnd = true
						}, 30000)
					}
				}, 4000)
			}
		},

		endAnimationStatus(){
			setTimeout(()=>{
				this.$router.push('/participation')
				this.$store.commit('nextStep')
			}, 2000)
		},

		// setCurrentPart(){
		// 	let container = document.getElementById('app')
		// 	container.setAttribute('current-part', 'intro')
		// 	this.currentPart = 'intro'
		// 	console.log(this.currentPart)
		// }
	}
}
</script>

<style lang="scss" scoped>

.section--illustration[moveOutIllustration=true]{
	transform: translateY(-100vh) ;
	transition: 2s cubic-bezier(0.65, 0, 0.35, 1); 
}
.section--journey[moveOutJourney=true]{
	transform: translateY(100vh) ; 
	transition: 2s cubic-bezier(0.65, 0, 0.35, 1); 

}
// .container__header--intro{
// 	&[baseline-phase-1 = "begin"]{
// 		animation: 2s ease-in both whole-baseline-animation ;
// 	}
// 	&[baseline-phase-1 = "ended"]{
// 		animation: 2s ease-out both reverse whole-baseline-animation;
// 	}
// }

</style>
