<template>
  <div class="modal-base anima__zoom" :class="{'anima__fade-out':doClose}">
    <div class="modal">
      <div class="container">
        <div class="close" @click="close">
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
  data() {
    return {
      doClose: false,
    }
  },
  methods: {
    close() {
      this.doClose = true;
      setTimeout(() => {
        this.$emit('close');
        this.doClose = false;
      }, 0.5 * 1000);
    }
  }
}
</script>

<style lang="less" scoped>
.modal-base {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: auto;
  align-items: center;
  justify-content: center;
  background-color: #040A28;
  background-color: #040A28cc;
  z-index: 9999;
  animation-iteration-count: 1,1;
}

.modal {
  box-sizing: border-box;
  height: 90%;
  width: 90%;
  margin: 0;
  color: #111;
  text-shadow: none;
  h2,h3,h4,h5 {
    margin: 1em 0;
    color: #483703;
  }
  a {
    color: #3b5998;
  }
  cite {
    margin: 0 1em;
    color: #333;
  }

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
    padding: 0.4rem 1rem;
    text-shadow: none;
  }

  .header {
    padding: 0.4rem 3rem;
    text-shadow: none;
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
