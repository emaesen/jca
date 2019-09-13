<template>
  <div>
    
    <button @click="openModal" class="action">
      Buy ticket <icon-ticket class="action"/>
    </button>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe class="iframe-class" width="100%" :height="frameHeight" src="https://jeffersoncenterforthearts.thundertix.com/events/158781" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" ></iframe>
    </modal>
  </div>
</template>

<script>
import IconTicket from '@/components/icons/IconTicket.vue';
import Modal from '@/components/Modal.vue';

import windowSize from './mixins/window_size.js'


export default {
  name: 'EventTicket',
  mixins: [windowSize],
  components: {
    IconTicket,
    Modal,
  },
  props: {
    id: {
      type: String
    },
  },
  data() {
    return {
      showModal: false,
      baseUrl: "https://jeffersoncenterforthearts.thundertix.com/events/",
    }
  },
  computed: {
    href() {
      return this.baseUrl + this.id;
    },
    frameHeight() {
      return (this.windowHeight - 150) + "px";
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  }
};
</script>

<style lang="less" scoped>
button {
  margin:0 0 0 .5em;
}
.icon-ticket {
  vertical-align: bottom;
}
</style>
