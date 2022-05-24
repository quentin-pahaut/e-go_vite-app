<template>
	<section class="section section--illustration">
		<ShapesIllustration :shapes-illu-step="shapesIlluStep" v-if="currentPart == 'intro' || currentPart == 'end'" />
		<div class="test test--get" v-if="currentPart == 'get-on'"></div>
		<div class="test test--authorise" v-if="currentPart == 'authorise'"></div>
		<div class="test test--take" v-if="currentPart == 'take-1'"></div>
		<div class="test test--picture" v-if="currentPart == 'take-2' || currentPart == 'pedal-2'"></div>
		<div class="test test--pedal" v-if="currentPart == 'pedal-1'"></div>
	</section>
</template>

<script>
import ShapesIllustration from '@/components/ui/UiShapesIllustration.vue'
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
	},

	data (){
		return {}
	},

	computed: mapState({
		currentPart: state => state.appStep
	}),
	
	methods:{
		
	}

}
</script>

<style lang="scss" scoped>
.test{
	height: 100%;

	&--get{
		background-color: greenyellow;		
	}
	&--authorise{
		background-color: rgb(57, 47, 255);		
	}
	&--take{
		background-color: rgb(255, 47, 47);		
	}
	&--pedal{
		background-color: rgb(255, 189, 47);		
	}
}

</style>