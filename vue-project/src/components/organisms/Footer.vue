<template>
  <footer :class="$style.footer">
    <TabButton v-for="tab in tabs" :key="tab.id" :title="tab.title" />
  </footer>
</template>

<script>
import TabButton from "@/components/atoms/TabButton";
export default {
  data() {
    return {
      tabs: [
        { id: 1, title: "1/3 left" },
        { id: 2, title: "All" },
        { id: 3, title: "Active" },
        { id: 4, title: "Completed" },
      ],
    };
  },
  components: {
    TabButton,
  },
};
</script>

<style lang="scss" module>
.footer {
  font-family: "Open Sans";
  background-color: $lightOrange;
  display: flex;
  flex-direction: row;
  color: $lightBrown;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0.7rem 1.875rem;
  align-items: center;
  div:nth-child(2) {
    margin-left: 8rem;
    border: 1px solid $brownBorder;
    border-radius: 0.625rem;
    padding: 0.3rem;
    margin-right: 1.56rem;
  }
}
@media (max-width: 450px) {
  .footer {
    font-size: 0.8rem;
  }
}
@media (max-width: 980px) {
  .footer {
    font-size: 1rem;
    padding: 0.3rem 1.875rem;
  }
}
</style>
