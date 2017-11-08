<template>
  <div>
    <div class="columns">
      <div class=" column is-one-third">
        <figure class="image is-3by2">
          <img :src="item.picture"/>
        </figure>
      </div>
      <div class="column">
        <div class="title">
          {{ item.name }}
        </div>
        <div class="subtitle">
          {{ item.price }}
        </div>
        <div>
          {{ item.description }}
        </div>
        <router-link to="/"> < Back </router-link>
      </div>
    </div>
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
            this.item = response.data;

            // dispatch event to start prerender
            document.dispatchEvent(new Event('custom-post-render-event'));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

    mounted() {
      this.getItem();
    },
  };
</script>

<style scoped>

</style>