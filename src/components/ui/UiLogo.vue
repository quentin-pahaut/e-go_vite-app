<template>
	<div class="logo" >
		<h1 class="title logo__title" :intro-title="intro">
			E<span class="txt--right big-dash"> – </span><span class="my-friend-br txt--right">go</span>
		</h1>
	</div>
</template>


<script>

export default {

	Name: 'logo',
    //DATA = Variables statiques définies dans le composant
	props:{
		intro:Boolean
	},
	data(){
		return {
			}
	},

}
</script>

<style lang="scss" scoped>
.logo{
	box-sizing:border-box;
	border-left: solid 0.54vw black;
	border-right: solid 0.54vw black;
	width: 100%;
	display:flex;
	
	&__title{
		position:relative;
		display:block;
		width: 100%;

		&[intro-title="false"]{
			margin: 9.6vw 0 auto 0;
		}
		&[intro-title="true"]{
			margin: auto 0 4.5vw 0;
		}
	}

}
.big-dash{
	position:relative;
	right: -13%;
}

</style>