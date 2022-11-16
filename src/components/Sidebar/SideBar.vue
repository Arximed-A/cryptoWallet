<template>
  <aside class="sidebar">
    <MenuItem name="Dashboard" direction="dashboard" icon="dashboard" />
    <MenuItem name="Trade" direction="trade" icon="trade" />
    <MenuItem name="Deposits" direction="deposits" icon="donate" />
    <MenuItem name="Protocols" direction="protocols" icon="protocols" />
    <MenuItem name="Settings" direction="settings" icon="setting" />
    <MenuItem name="Profile" direction="profile" icon="user" class="space" />
    <MenuItem name="Log Out" icon="logout" />
  </aside>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  components: { MenuItem },
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.space {
  flex: 1 1 auto;
}
</style>
