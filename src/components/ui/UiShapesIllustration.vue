<template>

	<svg class="shapes-illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125 375">
		<g class="shapes-illustration__bckgnds" >
			<rect class="shapes-illustration__el--3 cls-1"  data-name="3"  y="93.75" width="1125" height="93.75"/>
			<rect class="shapes-illustration__el--2 cls-2"  data-name="2"  y="187.5" width="1125" height="93.75"/>
			<path class="shapes-illustration__el--1 cls-3"  data-name="1"  d="M0,0H750a0,0,0,0,1,0,0V0a93.75,93.75,0,0,1-93.75,93.75H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"/>
		</g>
		<g class="shapes-illustration__forgnds" >
			<path class="cls-4 shapes-illustration__el--4-3" data-name="4-3"  d="M1125,281.25A93.7543,93.7543,0,0,1,1031.25,375H562.5a93.7543,93.7543,0,0,0,93.75-93.75Z"/>
			<path class="cls-5 shapes-illustration__el--4-2" data-name="4-2" d="M468.75,281.25h187.5a0,0,0,0,1,0,0v0A93.75,93.75,0,0,1,562.5,375H375a0,0,0,0,1,0,0v0A93.75,93.75,0,0,1,468.75,281.25Z"/>
			<path class="cls-5 shapes-illustration__el--4-1" data-name="4-1" d="M281.25,281.25A93.7458,93.7458,0,0,0,187.5,375a93.7458,93.7458,0,0,1-93.75-93.75Z"/>
			<path class="cls-6 shapes-illustration__el--3-3" data-name="3-3" d="M843.75,187.5h187.5A93.75,93.75,0,0,1,1125,281.25v0a0,0,0,0,1,0,0H937.5a93.75,93.75,0,0,1-93.75-93.75v0A0,0,0,0,1,843.75,187.5Z"/>
			<path class="cls-7 shapes-illustration__el--3-2" data-name="3-2" d="M656.25,281.25H468.75A93.7543,93.7543,0,0,0,562.5,187.5,93.7458,93.7458,0,0,1,656.25,281.25Z"/>
			<path class="cls-4 shapes-illustration__el--3-1" data-name="3-1" d="M187.5,187.5H375a0,0,0,0,1,0,0v0a93.75,93.75,0,0,1-93.75,93.75H93.75a0,0,0,0,1,0,0v0A93.75,93.75,0,0,1,187.5,187.5Z"/>
			<path class="cls-5 shapes-illustration__el--2-3" data-name="2-3" d="M937.5,93.75H1125a0,0,0,0,1,0,0v0a93.75,93.75,0,0,1-93.75,93.75H843.75a0,0,0,0,1,0,0v0A93.75,93.75,0,0,1,937.5,93.75Z"/>
			<path class="cls-6 shapes-illustration__el--2-2" data-name="2-2" d="M656.25,93.75A93.7458,93.7458,0,0,0,562.5,187.5a93.7458,93.7458,0,0,1-93.75-93.75Z"/>
			<path class="cls-6 shapes-illustration__el--2-1" data-name="2-1" d="M93.75,93.75h187.5A93.75,93.75,0,0,1,375,187.5v0a0,0,0,0,1,0,0H187.5A93.75,93.75,0,0,1,93.75,93.75v0A0,0,0,0,1,93.75,93.75Z"/>
			<path class="cls-5 shapes-illustration__el--1-2" data-name="1-2" d="M1125,93.75H937.5a93.4232,93.4232,0,0,0,66.29-27.46A93.4232,93.4232,0,0,0,1031.25,0,93.7458,93.7458,0,0,1,1125,93.75Z"/>
			<path class="cls-4 shapes-illustration__el--1-1" data-name="1-1" d="M562.5,0a93.7543,93.7543,0,0,0-93.75,93.75h-375A93.7543,93.7543,0,0,1,187.5,0Z"/>
		</g>
	</svg>

</template>


<script>

export default {

	Name: 'ShapesIllustration',
    //DATA = Variables statiques définies dans le composant
	props:{

	},
	data(){
		return {
			
			}
	},

}
</script>

<style lang="scss" scoped>

.shapes-illustration{
	height: 100%;
	// transform: translateX(calc(-0% / 3));
	
	&__forgnds, &__bckgnds{
		transform: translateX(calc(-200% / 3));
	}

	&[shapes-illu-step="0"]{

		.shapes-illustration{
			&__forgnds{
				transform: translateX(-100%);
			}
			&__bckgnds{
				transform: translateY(-100%);
			}
		}
		
	}
	&[shapes-illu-step="1"]{
		.shapes-illustration{
			&__bckgnds{
				animation: illu-vertical-slide 2s cubic-bezier(0.65, 0, 0.35, 1) forwards; 
			}
			&__forgnds{
				transform: translateX(-100%);
			}
		}
	}

	&[shapes-illu-step="2"]{
		.shapes-illustration{
			&__bckgnds{
				transform: translateX(0%);
			}
			&__forgnds{
				animation: illu-horizontal-slide-1 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
			}
		}
	}

	&[shapes-illu-step="3"]{
		.shapes-illustration{
			&__bckgnds, &__forgnds{
				animation: illu-horizontal-slide-2 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
			}
		}
	}
	
	&[shapes-illu-step="4"]{
		.shapes-illustration{
			&__bckgnds, &__forgnds{
				animation: illu-horizontal-slide-3 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
			}
		}
	}
}

.cls-1 {
	fill: #5b9bd4;
}

.cls-2 {
	fill: #dbdbdb;
}

.cls-3 {
	fill: #c8d96d;
}

.cls-4 {
	fill: #3956a2;
}

.cls-5 {
	fill: #e84330;
}

.cls-6 {
	fill: #ffd34a;
}

.cls-7 {
	fill: #f8aa33;
}
</style>