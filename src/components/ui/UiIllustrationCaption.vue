<template>
	<p class="caption" v-if="currentPart == 'get-on'">The bike !</p>
	<p class="caption" v-if="currentPart == 'authorise'">use my Selfie to participate in this art work.</p>
	<p class="caption" v-if="currentPart == 'take-1'">Selfie with my Reflection in the background.</p>
	<p class="caption" v-if="currentPart == 'pedal-1'">Energy !</p>
	<p class="caption" v-if="currentPart == 'end'">Thank you for participating in this collaborative artwork.</p>

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