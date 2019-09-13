<template>
  <div class="modal-base anima__zoom">
    <div class="modal">
      <div class="container">
        <div class="close" @click="$emit('close')">
          <icon-x class="close-icon action"/>
        </div>
        <div class="header">
          <slot name="header"></slot>
        </div>

        <div class="body">
          <slot></slot>
        </div>

        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconX from '@/components/icons/IconX.vue';

export default {
  name: 'Modal',
  components: {
    IconX,
  },
}
</script>

<style lang="less" scoped>
@padding: 0.5rem 1rem;

.modal-base {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
  align-items: center;
  justify-content: center;
  background-color: #040A28cc;
  z-index: 9999;
}

.modal {
  box-sizing: border-box;
  height: 90%;
  width: 90%;

  .body {
    height: 100%;
    padding: 0.75rem 1rem;
    background-color: #ccc;
  }

  .container {
    margin: 0 auto;
    background-color: #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .footer {
    padding: @padding;
  }

  .header {
    padding: @padding;
    background-color: #ccc;
  }

  .close {
    float: right;
    .close-icon {
      width: 30px;
      height: 30px;
      color: #333;
    }
  }
}
</style>
