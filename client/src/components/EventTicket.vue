<template>
  <div>
    
    <span @click="openModal">
      <icon-ticket class="action"/>
    </span>

    <modal
      v-if="showModal"
      @close="closeModal"
    >
      <iframe class="iframe-class" width="100%" height="600px" src="https://jeffersoncenterforthearts.thundertix.com/events/158781" frameborder="0" scrolling="auto" marginheight="0" marginwidth="0" allowtransparency="true" ></iframe>
    </modal>
  </div>
</template>

<script>
import IconTicket from '@/components/icons/IconTicket.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'EventTicket',
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
    }
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

</style>
