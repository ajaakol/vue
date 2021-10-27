<template>
  <p>Register the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      this.$router.push({
        // Call to API
        // If registered then redirect to event details
        name: 'EventDetails',
      });
    },
  },
};
</script>
