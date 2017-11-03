<template>
  <div>
    <router-link to="/"> < Back </router-link>
    <pre v-if="item">
      {{ item }}
    </pre>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'singe-item',

    props: {
      id: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        endpoint: 'http://localhost:3030/nodes',
        item: null,
        isLoading: true,
      };
    },

    methods: {
      getItem() {
        axios.get(`${this.endpoint}/${this.id}`)
          .then((response) => {
            console.log('answer');
            this.item = response.data;

            // dispatch event to start prerender
            document.dispatchEvent(new Event('custom-post-render-event'));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

    created() {
      this.getItem();
    },
  };
</script>

<style scoped>

</style>