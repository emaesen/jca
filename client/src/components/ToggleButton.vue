<template>
	<!--Binding css variables to use as height/width of :before -> the slider -->
	<div class="toggle-slider">
		<label class="switch">
			<input v-model="isActive" type="checkbox" @click="setNewToggleState">
			<span class="track">
				<span class="handle">
          <slot></slot>
        </span>
			</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ToggleButton',
	data() {
		return {
			isActive: true,
		}
	},
	computed: {
	},
	methods: {
		setNewToggleState() {
			this.isActive = !this.isActive;
			this.$emit('setIsActive', this.isActive);
		}
	},
}
</script>

<style scoped lang="less">
@handle-width: 85px;
@offset: 26px;
@height: 26px;
@color-on: rgb(0, 119, 6);
@color-off: rgb(104, 4, 1);

.switch {
	position: relative;
	display: inline-block;
	width: @handle-width + @offset;
	height: @height;
	input {
		display: none;
	}
	.track {
		display: flex;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: @color-off;
		cursor: pointer;
		border: 1px solid @color-off;
		border-radius: @height/2;
		transition: .4s;
		.handle {
			display: flex;
			width: @handle-width;
			height: @height;
			background-color: #00f;
			border-radius: @height/2;
			transition: .4s;
		}
	}
	input:checked+.track {
		background-color: @color-on;
		border: 1px solid @color-on;
	}
	input:focus+.track {
		box-shadow: 0 0 1px @color-on;
	}
	input:checked+.track>.handle {
		transform: translateX(@offset);
	}
}
</style>
