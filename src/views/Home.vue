<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api/api";
import Pet from "@/interfaces/Pet";
import LoTable, { ColumnConfig } from "@/components/LoTable.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    LoTable,
  },
  data() {
    const lostPets: Pet[] = [];
    const columnsConfig: ColumnConfig[] = [
      {
        id: "id",
      },
      {
        id: "name",
      },
      {
        id: "chipId",
      },
      {
        id: "race",
      },
      {
        id: "color",
      },
      {
        id: "gender",
      },
      {
        id: "pictureUrl",
      },
      {
        id: "lostDate",
      },
      {
        id: "locationLiving",
      },
      {
        id: "locationLastSeen",
      },
      {
        id: "notes",
      },
    ];

    return {
      lostPets,
      columnsConfig,
    };
  },
  mounted() {
    api({ type: "getLostPets" }).then((res) => {
      this.lostPets = res.data;
    });
  },
  methods: {},
});
</script>

<template>
  <div class="home">
    <LoTable
      :items="lostPets"
      :columns-config="columnsConfig"
    />
  </div>
</template>
