<template>
  <footer :class="$style.footer">
    <TaskCounter />
    <TabButton v-for="tab in tabs" :key="tab.id" :title="tab.title" />
  </footer>
</template>

<script>
import TabButton from "@/components/atoms/TabButton";
import TaskCounter from "@/components/atoms/TaskCounter";
export default {
  data() {
    return {
      tabs: [
        { id: 1, title: "All" },
        { id: 2, title: "Active" },
        { id: 3, title: "Completed" },
      ],
    };
  },
  components: {
    TabButton,
    TaskCounter,
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
  @media (max-width: 980px) {
    font-size: 1rem;
    padding: 0.3rem 1.875rem;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
  div:nth-child(2) {
    margin-left: 8rem;
    border: 1px solid $brownBorder;
    border-radius: 0.625rem;
    padding: 0.3rem;
    margin-right: 1.56rem;
    @media (max-width: 980px) {
      margin-left: 5rem;
    }
    @media (max-width: 450px) {
      margin-left: 2rem;
    }
  }
}
</style>
