<template>
  <div>
    <div v-for="purchase in purchases" :key="purchase.id">
      <a-card :title="purchase.name" style="width: 300px">
        <p>{{ purchase.genre }}</p>
        <p>Price: {{ purchase.price }}€</p>
        <a-button
          type="primary"
          @click="returnBook(purchase.id)"
          v-if="purchase.is_returned == false"
        >
          Return The Movie
        </a-button>
        <a-button type="dashed" v-if="purchase.is_returned == true" disabled>
          Returned
        </a-button>
      </a-card>
    </div>
  </div>
</template>

<script>
import salesService from "../../services/salesService";
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
    //Get purchases by user
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

    //Return the movie
    returnBook(id) {
      console.log(id);
      const userId = JSON.parse(localStorage.getItem("user")).id;
      salesService
        .returnMovie(id, userId)
        .then((res) => {
          this.getMyPurchases();
          return res.data;
        })
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
