<template>
    <div>
<AdminHeader/>
    </div>
</template>
<script>
import AdminHeader from '../../components/AminHeader'
export default {
    name: "AdminPanel",
    components: {
    AdminHeader
  },
  data() {
    return {
      movies: [],
    };
  },
}
</script>