<template>
  <div>
    <div class="columns" v-if="items">
      <div 
        class="column is-one-quarter"
        v-for="item in items"
        :key="item.id"
      >
        <div
          class="card"
        >
          <div class="card-image">
            <figure class="image is-square">
              <img :src="item.thumbnailUrl"/>
            </figure>
          </div>
          <div class="card-content">
            <router-link :to="`/${item.id}`">
              <h2>{{ item.title }}</h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <pre-loader v-else/>
  </div>
</template>

<script>
  import axios from 'axios';
  import PreLoader from '@/components/PreLoader';
  import 'bulma/css/bulma.css';

  export default {
    name: 'item-list',

    data() {
      return {
        endpoint: 'https://jsonplaceholder.typicode.com/photos',
        items: null,
      };
    },

    methods: {
      getItems() {
        axios.get(this.endpoint)
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

    mounted() {
      this.getItems();
    },

    components: {
      PreLoader,
    },
  };
</script>

<style scoped>
  .columns {
    flex-wrap: wrap;
  }
</style>