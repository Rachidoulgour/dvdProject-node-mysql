<template>
  <div>
    <div v-for="purchase in purchases" :key="purchase.id">
      <a-card :title="purchase.name" style="width: 300px">
        <p>{{ purchase.genre }}</p>
        <p>Price: {{ purchase.price }}€</p>
      </a-card>
    </div>
  </div>
</template>

<script>
import { SalesService } from "../../services/services";
export default {
  name: "UserProfile",
  data() {
    return {
      purchases: [],
    };
  },
  mounted() {
    this.getMyPurchases();
  },
  methods: {
    getMyPurchases() {
      SalesService.getPurchasesUser(this.$route.params.id)
        .then((res) => {
          return res.data.purchases;
        })
        .then((purchases) => (this.purchases = purchases))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Purchases couldn't be get",
          });
        });
    },
  },
};
</script>
