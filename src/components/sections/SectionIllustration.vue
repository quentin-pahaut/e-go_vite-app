<template>
	<section class="section section--illustration">
		<illustrationCaption />
		<div class="illustration-container">
			<ShapesIllustration :shapes-illu-step="shapesIlluStep" v-if="currentPart == 'intro' || currentPart == 'end'" />
			<getOnIllustration  v-if="currentPart == 'get-on'"/>
			<authoriseIllustration v-if="currentPart == 'authorise'"/>
			<selfieIllustration v-if="currentPart == 'take-1'"/>
			<div class="test test--picture" v-if="currentPart == 'take-2' || currentPart == 'pedal-2'"></div>
			<pedalIllustration v-if="currentPart == 'pedal-1'"/>
		</div>

	</section>
</template>

<script>
import illustrationCaption from '@/components/ui/UiIllustrationCaption.vue'
import ShapesIllustration from '@/components/ui/UiShapesIllustration.vue'
import getOnIllustration from '@/components/ui/UiGetOnIllustration.vue'
import authoriseIllustration from '@/components/ui/UiAuthoriseIllustration.vue'
import selfieIllustration from '@/components/ui/UiSelfieIllustration.vue'
import pedalIllustration from '@/components/ui/UiPedalIllustration.vue'
import { mapState } from 'vuex'

export default {

	Name: 'SectionIllustration',
	//DATA = Variables statiques définies dans le composant
	props:{
		shapesIlluStep:Number,
		// currentPart:String
	},
	components: {
		ShapesIllustration,
		illustrationCaption,
		getOnIllustration,
		authoriseIllustration,
		selfieIllustration,
		pedalIllustration
	},

	data (){
		return {}
	},

	computed: 
		mapState({
			currentPart: state => state.appStep
		}),
	
	methods:{
		
	}

}
</script>

<style lang="scss" scoped>
.test{
	height: 100%;

	&--take{
		background-color: rgb(255, 47, 47);		
	}
}

</style>