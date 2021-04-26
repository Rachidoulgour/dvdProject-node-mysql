<template>
<div>
  <!-- <div v-for="sale in sales" :key="sale.id">
        
      <a-card :title="sale.id" style="width: 300px">
        <p>Movie_id: {{ sale.movie_id }}</p>
        <p>User_id: {{ sale.client_id }}</p>
      </a-card>
     
    </div> -->
    <a-table
      class="companies-table"
      :columns="columns"
      :dataSource="clients"
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
import { SalesService } from "../../services/services";
const columns = [
  {
    title: 'Client_id',
    dataIndex: 'client_id',
    key: 'client_id',
    
  },
  {
    title: 'Client',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

export default {
  name: "Clients",
  data() {
    return {
      clients: [],
      columns,
      selectedIds: [],
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    onSelectChange(selectedRowIds) {
      this.selectedIds = selectedRowIds;
    },

    //Getting sales
    getClients() {
      SalesService.getClients()
        .then((res) => {
          return res.data.clients;
        })
        .then(sls =>  //Adding key to tables rows (conditions of ant desing library)
          sls.map(sl => { 
            sl.key = sl.saleId;
            return sl;
          })
        )
        .then((clients) => (this.clients = clients))
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
