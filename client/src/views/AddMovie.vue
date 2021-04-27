<template>
  <div>
    <AdminHeader />
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Title">
        <a-input
          v-decorator="[
            'title',
            { rules: [{ required: true, message: 'Please input the title!' }] },
          ]"
        />
      </a-form-item>
      <a-form-item label="Genre">
        <a-select
          v-decorator="[
            'genre',
            {
              rules: [{ required: true, message: 'Please select your genre!' }],
            },
          ]"
          placeholder="Select a option"
        >
          <a-select-option value="action">
            Action
          </a-select-option>
          <a-select-option value="horror">
            Horror
          </a-select-option>
          <a-select-option value="romantic">
            Romantic
          </a-select-option>
          <a-select-option value="comedy">
            Comedy
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Price">
        <a-input
          v-decorator="[
            'price',
            {
              rules: [
                {
                  required: true,
                  message: 'Please enter the price!',
                },
                { validator: checkPrice },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Add Movie
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import AdminHeader from "../components/AminHeader";
import { MoviesService } from "../services/services";

export default {
  name: "AddMovie",
  components: {
    AdminHeader,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          MoviesService.addMovie(values)
            .then(this.$router.push("/admin-panel"))
            .catch((err) => {
              console.error(err);
              this.$notification.error({
                message: "Movie couldn't be added",
              });
            });
        }
      });
    },

    checkPrice(rule, value, callback) {
      if (value > 0) {
        callback();
        return;
      }
      callback("Price must greater than zero!");
    },
  },
};
</script>
