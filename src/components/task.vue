<template>
  <div class="task">
    <div class="title">
      {{task.title}}
    </div>
    <fieldset class="description">
      <legend>Description:</legend>
      {{task.description}}
    </fieldset>
    <div
      class="date"
      style="display:flex;flex-direction:row;font-weight:bold;"
    >
      <div style="flex-basis:50%;">Date:</div>
      <div style="flex-basis:50%;">{{task.date | validDate}}</div>
    </div>
    <div class="cmd">
      <button
        type="button"
        class="btn btn-sm"
        :class="{'btn-primary':task.selected,'btn-outline-primary':!task.selected}"
        @click="sel"
      >
        <template v-if="!task.selected">Séléctionner</template>
        <template v-if="task.selected">Déléctionner</template>
      </button>
      <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        @click="del"
      >Supprimer</button>
      <button
        type="button"
        class="btn btn-sm"
        :class="{'btn-dark':task.archived,'btn-outline-dark':!task.archived}"
        @click="arch"
      >
        <template v-if="!task.archived">Archiver</template>
        <template v-if="task.archived">Désrchiver</template>
      </button>
      <button
        type="button"
        class="btn btn-outline-info btn-sm"
        @click="up"
      >Modifier</button>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      reaquired: true
    }
  },
  methods: {
    sel() {
      this.$emit("sel", this.task.id);
    },
    del() {
      this.$emit("del", this.task.id);
    },
    arch() {
      this.$emit("arch", this.task.id);
    },
    up() {
      this.$emit("up", this.task.id);
    }
  },
  filters: {
    validDate(value) {
      return new Date(value) < new Date() ? "Date non respéctée" : value;
    }
  }
};
</script>
<style lang="scss" scoped>
.task {
  width: 100%;
  padding: 4px;
  border-bottom: 1px solid grey;
  .title {
    height: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
    border-bottom: 2px solid grey;
  }
  .description {
    border: 1px solid grey;
    padding: 4px;
    border-radius: 4px;
    legend {
      font-size: 18px;
      padding-left: 6px;
    }
  }
  .cmd {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    button {
      margin: 0px 2px;
    }
  }
}
</style>
