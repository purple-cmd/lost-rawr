<script lang="ts">
import { CSSProperties, defineComponent } from "vue";

export interface ColumnConfig {
  id: string;
  name?: string;
  type?: ColumnTypes;
  style?: CSSProperties;
}

enum ColumnTypes {
  TEXT,
  IMAGE,
  CHECKBOX,
  ACTION,
}

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
    columnsConfig: {
      type: Array as () => ColumnConfig[],
      required: true,
    },
  },
  data() {
    return {
      ColumnTypes,
    };
  },
  mounted() {
    console.log(this.items);
  },
});
</script>
<template>
  <table class="lo-table">
    <thead>
      <tr>
        <th
          v-for="col in columnsConfig"
          :key="col.id"
        >
          {{ col.id }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td
          v-for="col in columnsConfig"
          :key="col.id"
          :style="col.style"
        >
          <!-- <img v-if="col.type === ColumnTypes.IMAGE" :src="item[col.name]" />
          <input v-if="col.type === ColumnTypes.CHECKBOX" type="checkbox" />
          <button v-if="col.type === ColumnTypes.ACTION" type="button" />
          <span v-if="!col.type || col.type === ColumnConfigTypes.TEXT"> -->
          {{ item[col.id] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss" scoped>
.lo-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  // min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  height: 100%;
  width: 100%;
}

.lo-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.lo-table th,
.lo-table td {
  padding: 12px 15px;
}

.lo-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.lo-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.lo-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

</style>