<template>
  <div>
    <AdminHeader />

    <h3>Sales</h3>
    <a-table
      class="companies-table"
      :columns="columns"
      :dataSource="sales"
      :rowSelection="{
        selectedRowKeys: selectedIds,
        onChange: onSelectChange,
      }"
      :pagination="false"
    >
      <a-icon type="setting" />
    </a-table>
  </div>
</template>

<script>
import AdminHeader from "../../components/AminHeader";
import { SalesService } from "../../services/services";
const columns = [
  {
    title: "Sales_id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Client",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Movie",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  name: "Sales",
  components: {
    AdminHeader,
  },
  data() {
    return {
      sales: [],
      columns,
      selectedIds: [],
    };
  },
  mounted() {
    this.getSales();
  },
  methods: {
    onSelectChange(selectedRowIds) {
      this.selectedIds = selectedRowIds;
    },

    //Getting sales
    getSales() {
      SalesService.getSales()
        .then((res) => {
          return res.data.sales;
        })
        .then((
          sls //Adding key to tables rows (conditions of ant desing library)
        ) =>
          sls.map((sl) => {
            sl.key = sl.id;
            return sl;
          })
        )
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
