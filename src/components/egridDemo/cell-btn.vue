<template>
	<div>
		<button v-on:click="todo">{{row._edit?"完成":"编辑"}}</button>
		<button v-on:click="del">删除</button>
	</div>
</template>
<script>
	export default {
		props:['row','col'],
		methods:{
			todo(){
				this.$emit('row-editor', this.row)
				this.$set(this.row,'_edit', !this.row._edit)
			},
			del(){
				console.log(this.row);
			}
		}
	}
</script>
<style scoped>
	/*.con-box{
		background-color: pink;
		text-align: center;
	}*/
</style>
