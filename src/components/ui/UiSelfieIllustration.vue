<template>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 70" class="journey-illustration">

		<g id="selfie">
			<rect class="cls-1" x="70" width="140" height="70"/>
			<path class="cls-2" d="M0,0H70a70,70,0,0,1,70,70v0a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"/>
			<g id="selfie-background">
				<g id="Selfie--vBackground">
					<path class="cls-3" d="M177.77,58.4478l-4.9368-4.9367v-.03l-2.33-2.3075h-.0035l-7.8766-7.8766V41.1739a1.9941,1.9941,0,0,0-3.41-1.41,1.9553,1.9553,0,0,0-.59,1.41V44.941l-.0065.0065,6.2263,6.2264h-.01v7.2768h8v-.0029Z"/>
					<circle class="cls-3" cx="172.8328" cy="45.1786" r="4"/>
					<rect id="phone" class="cls-4" x="160.7846" y="33.1786" width="3.6755" height="8" rx="1.8378" transform="translate(325.2448 74.3573) rotate(-180)"/>
					<g id="flash">
						<line class="cls-5" x1="158.6538" y1="34.4452" x2="153.7918" y2="34.4452"/>
						<line class="cls-5" x1="171.4844" y1="34.4452" x2="166.6224" y2="34.4452"/>
						<line class="cls-5" x1="162.6224" y1="30.572" x2="162.6224" y2="25.7101"/>
						<line class="cls-5" x1="159.6607" y1="32.0484" x2="156.2228" y2="28.6104"/>
						<line class="cls-5" x1="168.8328" y1="28.3294" x2="165.3949" y2="31.7673"/>
					</g>
				</g>
			<g id="Selfie--vBackground-2" data-name="Selfie--vBackground">
				<polygon class="cls-4" points="198.09 41.247 195.494 43.811 195.524 46.421 195.524 58.034 169.981 58.034 179.524 48.491 181.854 46.171 184.194 43.821 184.194 43.811 198.09 29.948 198.09 41.247"/>
				<circle class="cls-4" cx="179.5218" cy="31.8208" r="8"/>
			</g>
				<rect class="cls-5" x="151.7543" y="11.6982" width="46.3355" height="46.3355"/>
			</g>
			<g id="selfie-2" data-name="selfie">
				<path class="cls-3" d="M51.8492,26.2836l-.0066-.0066V22.51a1.955,1.955,0,0,0-.59-1.41,1.9941,1.9941,0,0,0-3.41,1.41v2.1234L39.966,32.51h-.0034l-2.33,2.33v.009l-5.005,5.0051.0025.0025h-.0019v3.2461a2,2,0,0,0,4,0V41.51l1.0044-1.0044V50.75h8V32.51h-.01Z"/>
				<circle class="cls-3" cx="37.6327" cy="26.5147" r="4"/>
				<path class="cls-3" d="M47.8431,15.5147a.8387.8387,0,0,1,.8377.8378V20.677a.8378.8378,0,0,1-1.6755,0V16.3525a.8387.8387,0,0,1,.8378-.8378m0-1a1.8378,1.8378,0,0,0-1.8378,1.8378V20.677a1.8378,1.8378,0,0,0,3.6755,0V16.3525a1.8378,1.8378,0,0,0-1.8377-1.8378Z"/>
				<g>
					<line class="cls-5" x1="36.7574" y1="45.4332" x2="39.5858" y2="48.2616"/>
					<line class="cls-5" x1="39.2354" y1="48.1213" x2="47.2354" y2="48.1213"/>
					<line class="cls-5" x1="33.1063" y1="45.5836" x2="37.1063" y2="45.5836"/>
					<line class="cls-5" x1="46.8847" y1="48.2678" x2="49.7131" y2="45.4394"/>
					<line class="cls-5" x1="49.364" y1="45.5785" x2="53.364" y2="45.5785"/>
				</g>
				<line class="cls-5" x1="51.8117" y1="15.7813" x2="56.6736" y2="15.7813"/>
				<line class="cls-5" x1="38.9811" y1="15.7813" x2="43.843" y2="15.7813"/>
				<line class="cls-5" x1="47.843" y1="11.9081" x2="47.843" y2="7.0462"/>
				<line class="cls-5" x1="50.8047" y1="13.3844" x2="54.2426" y2="9.9465"/>
				<line class="cls-5" x1="41.6327" y1="9.6655" x2="45.0706" y2="13.1034"/>
				<polygon class="cls-3" points="49.444 57.62 46.394 54.57 46.394 54.55 44.394 52.55 42.272 52.55 42.268 52.546 36.628 52.546 40.32 56.237 40.32 70 44.32 70 44.32 58.135 45.444 59.26 45.444 70 49.444 70 49.444 63.26 49.444 63.26 49.444 57.62"/>
			</g>
		</g>
	</svg>

</template>


<script>

export default {

	Name: 'selfieIllustration',
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

	.cls-1, .cls-4 {
	fill: #fdab30;
	}

	.cls-2 {
	fill: #ff3d23;
	}

	.cls-3 {
	fill: #fff;
	}

	.cls-4, .cls-5 {
	stroke: #fff;
	stroke-miterlimit: 10;
	}

	.cls-5 {
	fill: none;
	}

</style>