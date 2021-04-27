<template>
    <div>
<AdminHeader/>
<h3>Users:</h3>
<a-table
      class="clients-table"
      :columns="columns"
      :dataSource="users"
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
import { AuthService } from "../../services/services";
import AdminHeader from '../../components/AminHeader';

const columns = [
  {
    title: 'User_id',
    dataIndex: 'id',
    key: 'id',
    
  },
  {
    title: 'User Name',
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
    name: "AdminPanel",
    components: {
    AdminHeader
  },
  data() {
    return {
      columns,
    users: [],
    selectedIds: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    onSelectChange(selectedRowIds) {
      this.selectedIds = selectedRowIds;
    },

    //Getting users
    getUsers() {
      AuthService.getUsers()
        .then((res) => {
          return res.data.users;
        })
        .then(usrs =>  //Adding key to tables rows (conditions of ant desing library)
          usrs.map(usr => { 
          usr.key = usr.id;
            return usr;
          })
        )
        .then((users) => (this.users = users))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movies couldn't be get",
          });
        });
    },
  }
}
</script>