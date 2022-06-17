<template>
	<p class="caption" v-if="currentPart == 'get-on'"><span class="txt--large">The bike.</span></p>
	<p class="caption" v-if="currentPart == 'authorise'"><span class="txt--large">use my Selfie</span> to participate in this art work.</p>
	<p class="caption" v-if="currentPart == 'take-1'"><span class="txt--large">Selfie</span> with <span class="txt--large">my Reflection</span> in the background.</p>
	<p class="caption" v-if="currentPart == 'pedal-1'"><span class="txt--large">Energy !</span></p>
	<!-- <p class="caption" v-if="currentPart == 'end'"><span class="txt--large">Thank you for participating in this collaborative artwork.</p> -->
</template>


<script>
import { mapState } from 'vuex'

export default {
	

	Name: 'illustrationCaption',
    //DATA = Variables statiques définies dans le composant
	props:{

	},
	data(){
		return {
			
			}
	},
	computed: 
		mapState({
			currentPart: state => state.appStep
		}),
}


</script>

<style lang="scss" scoped>

	

</style>