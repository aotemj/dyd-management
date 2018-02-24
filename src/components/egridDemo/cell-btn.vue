<template>
	<div>
		<button v-on:click="todo">{{row._edit?"完成":"编辑"}}</button>
		<button>删除</button>
	</div>
</template>
<script>
	export default {
		props:['row','col'],
		methods:{
			todo(){
				this.$emit('row-editor', this.row)
				this.$set(this.row, '_edit', !this.row._edit)
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
