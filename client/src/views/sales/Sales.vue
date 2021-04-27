<template>
<div>
  <AdminHeader/>
    <a-table
      class="companies-table"
      :columns="columns"
      :dataSource="sales"
      :rowSelection="{
        selectedRowKeys: selectedIds,
        onChange: onSelectChange,
      }"
      :pagination="false"
      :locale="{ emptyText: 'No hemos encontrado ninguna empresa' }"
    >
      <span slot="management_office" slot-scope="management_office">{{
        management_office ? 'Si' : 'No'
      }}</span>

      <div slot="action" class="actions" slot-scope="company">
        <router-link :to="`/employer/edit-company/${company.id}`">
          <a-icon type="setting" />
        </router-link>
      </div>
    </a-table>
    
    </div>
    
</template>

<script>
import AdminHeader from '../../components/AminHeader';
import { SalesService } from "../../services/services";
const columns = [
  {
    title: 'Sales_id',
    dataIndex: 'id',
    key: 'id',
    
  },
  {
    title: 'Client',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Movie',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

export default {
  name: "Sales",
  components: {
    AdminHeader
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
        .then(sls =>  //Adding key to tables rows (conditions of ant desing library)
          sls.map(sl => { 
            sl.key = sl.saleId;
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
