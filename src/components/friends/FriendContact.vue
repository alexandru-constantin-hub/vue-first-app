<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(favorite)' : ''}}</h2>
    <button @click="toggleDetails">Show Details</button>
     <button @click="toggleFavourite">Favourite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props: ['name', 'phoneNumber', 'emailAddress'],
  props: {
    id: {type:String, required: true},
    name: {type:String, required: true},
    phoneNumber: {type:String, required: true},
    emailAddress: {type:String, required: true},
    isFavorite: {type:Boolean, required: false},
    
  },
  emits: ['toggle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false,
    }
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavourite() {
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>