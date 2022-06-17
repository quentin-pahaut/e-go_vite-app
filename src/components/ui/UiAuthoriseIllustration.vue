<template>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 70" class="journey-illustration">

		<g id="high-five">
			<rect id="background" class="cls-1" width="140" height="70"/>
			<path id="background-2" data-name="background" class="cls-2" d="M70,0H210a0,0,0,0,1,0,0V70a0,0,0,0,1,0,0H140A70,70,0,0,1,70,0V0a0,0,0,0,1,0,0Z"/>
			<g id="CHARACTER--right">
				<polygon points="199.99 47.453 202.824 44.624 191.215 33.036 188.382 35.864 199.99 47.453"/>
				<path class="cls-3" d="M201.8763,43.6785l-7.5619-7.5575-3.0955-3.09h-.009L178.6053,20.4483a2.0017,2.0017,0,0,0-2.8334,2.8284L186.3,33.7868V50.561h8.014v-8.78l2.9608,2.9556-.7036.7024a2.0018,2.0018,0,1,0,2.8334,2.8285l3.5342-3.528Z"/>
				<polygon class="cls-3" points="190.457 52.562 186.45 52.562 186.45 69.965 190.457 69.965 194.464 69.965 194.464 52.562 190.457 52.562"/>
				<ellipse class="cls-3" cx="194.3144" cy="27.8891" rx="4.007" ry="4"/>
			</g>
			<g id="CHARACTER--left">
				<path class="cls-3" d="M173.7592,20.5076a2,2,0,0,0-2.8285,0L158.3481,33.09h-.0089l-3.09,3.09-7.5539,7.5629-.9405.9405-.1152.1152,3.5278,3.5279a2,2,0,0,0,2.8285-2.8284l-.7-.7,2.9529-2.9527V50.62h8V33.8461l10.51-10.51A2,2,0,0,0,173.7592,20.5076Z"/>
				<polygon class="cls-3" points="159.1 52.598 155.1 52.598 155.1 70 159.1 70 163.1 70 163.1 52.598 159.1 52.598"/>
				<circle class="cls-3" cx="155.2492" cy="27.9484" r="4"/>
			</g>
			<g id="clap">
				<line class="cls-4" x1="174.5757" y1="26.2209" x2="174.5757" y2="30.2209"/>
				<line class="cls-4" x1="164.5757" y1="20.3238" x2="168.5757" y2="20.3238"/>
				<line class="cls-4" x1="180.5757" y1="20.3238" x2="184.5757" y2="20.3238"/>
				<line class="cls-4" x1="174.5757" y1="10.3238" x2="174.5757" y2="14.3238"/>
				<line class="cls-5" x1="178.6403" y1="16.0386" x2="181.4687" y2="13.2102"/>
				<line class="cls-5" x1="167.4385" y1="13.3586" x2="170.2669" y2="16.187"/>
			</g>
			<g id="chararacter-on">
				<path class="cls-3" d="M44.0738,28.7859,29.9565,14.6686v-.0115h-8V32.1833h8V20.3254L41.2453,31.6143a2,2,0,0,0,2.8285-2.8284Z"/>
				<path class="cls-3" d="M40.7709,45.2526a1.9871,1.9871,0,0,0-.4441-.6793l-10.39-10.39H21.812V61.2989a2,2,0,0,0,4,0V35.71L36.1486,46.054,29.631,52.5716A2,2,0,0,0,32.46,55.4l7.91-7.9094A1.9957,1.9957,0,0,0,40.7709,45.2526Z"/>
				<circle class="cls-3" cx="26.0927" cy="8.8322" r="4"/>
			</g>
		</g>
	</svg>

</template>


<script>

export default {

	Name: 'authoriseIllustration',
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

	.cls-1 {
	fill: #dbdbdb;
	}

	.cls-2 {
	fill: #2e52db;
	}

	.cls-3, .cls-4, .cls-5 {
	fill: #fff;
	}

	.cls-4, .cls-5 {
	stroke: #fff;
	stroke-miterlimit: 10;
	}

	.cls-4 {
	stroke-width: 1.2217px;
	}

	.cls-5 {
	stroke-width: 1.234px;
	}

</style>