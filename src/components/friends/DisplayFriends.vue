<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.favorite"
      @toggle-favorite="toggleFavoriteStatus"
      @delete="deleteContact"
      ></friend-contact>
      
    </ul>
  </section>
</template>

<script>
import NewFriend from './NewFriend.vue';
import FriendContact from './FriendContact.vue'
export default {
  components: {
      NewFriend,
      FriendContact
  },  
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          favorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          favorite: false
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.favorite = !identifiedFriend.favorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        favorite: false

      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    }
  }
};
</script>

<style scope>

</style>