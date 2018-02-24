<template>
	<div>
	   <input class="edit"
	     v-show="row._edit" type="text"
	     v-model="row[col.prop]">
	   <span v-show="!row._edit">{{ text }}</span>
	 </div>
</template>
<script>
	export default {
	  props: ['row', 'col'],

	  computed: {
	    text () {
	      return this.row[this.col.prop]
	    }
	  }
	}
</script>
<style scoped>
	.edit{
		max-width: 90px;
		text-align: center;
	}
</style>
