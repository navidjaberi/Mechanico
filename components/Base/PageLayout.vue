<template>
  <v-app-bar color="grey-lighten-5" elevation="1">
    <v-col cols="12" class="relative flex justify-center items-center">
      <div class="absolute left-3">
        <v-btn prepend-icon="mdi-arrow-left" block @click="baseRouteBackHandler">
          <template v-slot:prepend>
            <v-icon></v-icon>
          </template>
        </v-btn>
      </div>
      <div>
        <p class="text-center font-black">{{ props.title }}</p>
      </div>
    </v-col>
  </v-app-bar>
  
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
});
const emit = defineEmits(["baseRouteBackHandler"]);
//emit the back button
const baseRouteBackHandler = () => {
  emit("baseRouteBackHandler");
};
</script>
