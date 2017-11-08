<template>
  <div>
    <div class="columns" v-if="items">
      <div 
        class="column is-one-quarter"
        v-for="item in items"
      >
        <div
          class="card"
        >
          <div class="card-image">
            <figure class="image is-3by2">
              <img :src="item.picture"/>
            </figure>
          </div>
          <div class="card-content">
            <router-link :to="`/${item.id}`">
              <h2>{{ item.name }}</h2>
            </router-link>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import 'bulma/css/bulma.css';

  export default {
    name: 'item-list',

    data() {
      return {
        endpoint: 'http://localhost:3030/nodes',
        items: null,
        isLoading: true,
      };
    },

    methods: {
      getItems() {
        axios.get(this.endpoint)
          .then((response) => {
            this.items = response.data;
            this.isLoading = false;

            // dispatch event to start prerender
            document.dispatchEvent(new Event('custom-post-render-event'));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

    mounted() {
      this.getItems();
    },
  };
</script>

<style scoped>
  .columns {
    flex-wrap: wrap;
  }
</style>