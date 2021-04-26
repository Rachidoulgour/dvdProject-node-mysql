<template>
<div>
  <div v-for="sale in sales" :key="sale.id">
        
      <a-card :title="sale.id" style="width: 300px">
        <p>Movie_id: {{ sale.movie_id }}</p>
        <p>User_id: {{ sale.client_id }}</p>
      </a-card>
     
    </div>
    
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
          console.log(res.data.sales)
          return res.data.sales;
        })
        .then((sales) => (this.sales = sales))
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
