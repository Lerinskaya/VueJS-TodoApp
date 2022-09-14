<template>
  <footer :class="$style.todo__state">
    <TaskLeft />
    <AllTab />
    <ActiveTab />
    <CompletedTab />
  </footer>
</template>

<script>
import TaskLeft from "@/components/atoms/TaskLeft";
import AllTab from "@/components/atoms/AllTab";
import ActiveTab from "@/components/atoms/ActiveTab";
import CompletedTab from "@/components/atoms/CompletedTab";
export default {
  components: {
    TaskLeft,
    AllTab,
    ActiveTab,
    CompletedTab,
  },
};
</script>

<style lang="scss" module>
@import "@/styles/main.scss";
.todo__state {
  font-family: "Open Sans";
  background-color: $lightOrange;
  display: flex;
  flex-direction: row;
  color: $lightBrown;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0.7rem 1.875rem;
  align-items: center;
}
@media (max-width: 450px) {
  .todo__state {
    font-size: 0.8rem;
  }
}
@media (max-width: 980px) {
  .todo__state {
    font-size: 1rem;
    padding: 0.3rem 1.875rem;
  }
}
</style>
