<template>
<div>
    <AdminHeader/>
    <a-table
      class="clients-table"
      :columns="columns"
      :dataSource="clients"
      :rowSelection="{
        selectedRowKeys: selectedIds,
        onChange: onSelectChange,
      }"
      :pagination="false"
    >

      <div slot="action" class="actions">
        
          <a-icon type="setting" />
        
      </div>
    </a-table>
    
    </div>
    
</template>

<script>
import AdminHeader from '../../components/AminHeader'
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
  components: {
      AdminHeader
  },
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
