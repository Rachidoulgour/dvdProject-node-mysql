<template>
  <div>
    
  </div>
</template>

<script>
import { SalesService } from "../../services/services";

export default {
  name: "Sales",
  data() {
    return {
      sales: []
    };
  },
  mounted() {
    this.getSales();
  },
  methods: {
    getSales() {
      SalesService.getSales()
        .then((res) => {
          
          return res.data;
        })
        .then((movies) => (this.movies = movies))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movies couldn't be get",
          });
        });
    },
  },
};
</script>
