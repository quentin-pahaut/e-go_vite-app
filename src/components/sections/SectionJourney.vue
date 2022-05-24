<template>
	<section class="section section--journey" v-if="journeyStep == 5" >
		<ul class="journey" >
			<li class="journey__el journey__el--counted"><span class="journey__el-content"><span class="txt--large">I</span> can get&nbsp;on the&nbsp;bike.</span></li>
			<li class="journey__el journey__el--counted"><span class="journey__el-content"><span class="txt--large">I</span> can authorise the use of <span class="txt--large">my</span> image.</span></li>
			<li class="journey__el journey__el--counted"><span class="journey__el-content"><span class="txt--large">I</span> can do <span class="txt--large">my</span>&nbsp;Selfie.</span></li>
			<li class="journey__el journey__el--counted"><span class="journey__el-content"><span class="txt--large">I</span> can pedal to send <span class="txt--large">my</span>&nbsp;selfie.</span></li>
			<li class="journey__el journey__el--uncounted"><span class="journey__el-content"><span class="txt--large">I</span> pedal again and again ...</span></li>
			<li class="journey__el journey__el--counted"><span class="journey__el-content"><span class="txt--large">I</span> want to get some height</span></li>
		</ul>
	</section>
</template>

<script>
export default {

	Name: 'SectionJourney',

	props:{
		journeyStep: Number
	},
	
	data(){
		return {
			// animationStep: 1
		}
	},

}
</script>

<style lang="scss" scoped>



.journey{
	counter-reset: counted-el;

	display:grid;
	grid-template-columns:  4fr 4fr 4fr;
	row-gap: 4.5vw;

	overflow: hidden;

	@for $i from 1 through 6 {
		@if $i == 1 or $i == 4 {
			
			& :nth-child(#{$i}){
				grid-column: 1 ;
			}

		} @else if $i == 2 or $i == 5 {
			
			& :nth-child(#{$i}){
				grid-column: 2;
			}

		} @else {

			& :nth-child(#{$i}){
				grid-column: 3;
			}	
				
		}
			
	}
	
	
	
	&__el{

		counter-increment: counted-el;

		&> &-content{
			padding-left: 29px;
			position: relative;

			&::before{
			font-weight: 700;
			position: absolute;
			left:8px;
			}
		}

		&--counted{

			&> .journey__el-content{
				
				&::before{
					content: counter(counted-el) ". ";
				}
			}

			&:last-child{

				& .journey__el-content{
				
					&::before{
						content: "5. " ;
					}

				}

			}

		}

		&--uncounted{
			&> .journey__el-content{
				
				&::before{
					content: "... ";
				}
			}
			
		}
	}



	&__el{
		display: block;
		overflow: hidden;

		&-content{
			display: block;
			// transform: translateX(100%);
		}

	}
	
//ANIM
	

@for $j from 1 through 6 {

	$delay: $j*4;

	& :nth-child(#{$j}) > &__el-content{


		@if $j == 1{
			animation: journey-horizontal-slide 2s cubic-bezier(0.45, 0, 0.55, 1) 2s  both

		}@else{

			animation: journey-horizontal-slide 2s cubic-bezier(0.45, 0, 0.55, 1) #{$delay - 2}s  both
			
		}
	}
}
	


}


		



</style>