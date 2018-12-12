<template>
  <div id="app">
    <section id="new">
      <div class="form-item">
        <label for="title">Titre:</label>
        <input
          v-model="newItem.title"
          id="title"
          class="form-control"
          type="text"
          placeholder=""
          @input="addErrorMessageShown = false"
        />
      </div>

      <div class="form-item">
        <label for="description">description:</label>
        <textarea
          v-model="newItem.description"
          id="description"
          class="form-control"
          type="text"
          placeholder=""
        ></textarea>
      </div>

      <div class="form-item">
        <label for="date">Date:</label>
        <input
          v-model="newItem.date"
          id="date"
          class="form-control"
          type="date"
          placeholder=""
          @input="addErrorMessageShown = false"
        />
      </div>

      <div
        class="form-item"
        style="text-align:right;"
      >
        <button
          class="btn btn-outline-primary"
          @click="add"
        >Ajouter</button>
      </div>
      <div
        class="form-item error"
        v-if="addErrorMessageShown"
      >
        Merci d'entrer un titre et une date pour votre tâche
      </div>
    </section>
    <section id="list">
      <div class="header">
        <div
          :class="{active:activeTabSelected}"
          @click="activeTabSelected = true"
        >Actives</div>
        <div
          :class="{active:!activeTabSelected}"
          @click="activeTabSelected = false"
        >Archivées</div>
      </div>
      <div
        class="filter"
        style="margin:4px 10px;"
      >
        <input
          class="form-control"
          v-model="filter"
          placeholder="Recherche"
        />
      </div>
      <div class="cmd">
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          @click="deleteAll"
        >Tout supprimer</button>
        <button
          type="button"
          class="btn btn-outline-dark btn-sm"
          @click="archiveAll"
        >
          <template>Tout archiver</template>
        </button>
      </div>
      <div class="items-holder">
        <task
          v-for="(task,index) in filteredItems"
          :task="task"
          :key="index"
          v-on:sel="sel"
          v-on:del="del"
          v-on:arch="arch"
          v-on:up="up"
        />
        <div v-if="filteredItems.length === 0">
          Aucune tache à afficher
        </div>
      </div>
    </section>
    <section id="update">
      <template v-if="!!itemToUpdate">
        <div class="form-item">
          <label for="title">Titre:</label>
          <input
            v-model="itemToUpdate.title"
            id="title"
            class="form-control"
            type="text"
            placeholder=""
          />
        </div>

        <div class="form-item">
          <label for="description">description:</label>
          <textarea
            v-model="itemToUpdate.description"
            id="description"
            class="form-control"
            type="text"
            placeholder=""
          ></textarea>
        </div>

        <div class="form-item">
          <label for="date">Date:</label>
          <input
            v-model="itemToUpdate.date"
            id="date"
            class="form-control"
            type="date"
            placeholder=""
          />
        </div>

        <div class="form-item">
          <button
            class="btn btn-outline-info"
            @click="update"
          >Finir</button>
        </div>
      </template>
      <div
        class="error"
        v-if="false"
      >
        Merci d'entrer un titre et un date pour votre tâche
      </div>
    </section>
  </div>
</template>
<script>
import Task from "@/components/task.vue";
export default {
  data() {
    return {
      updateErrorMessageShown: false,
      addErrorMessageShown: false,
      filter: "",
      activeTabSelected: true,
      newItem: {
        title: undefined,
        description: undefined,
        date: undefined
      },
      itemToUpdate: null,
      items: []
    };
  },
  methods: {
    add() {
      if (!this.newItem.title || !this.newItem.date) {
        this.addErrorMessageShown = true;
        return;
      }
      let item = {
        id: Date.now(),
        title: this.newItem.title,
        description: this.newItem.description,
        date: this.newItem.date,
        archived: false,
        selected: false
      };
      this.items.push(item);

      this.newItem.title = undefined;
      this.newItem.description = undefined;
      this.newItem.date = undefined;
    },
    update() {
      let item = this.items.find(item => {
        return item.id === this.itemToUpdate.id;
      });
      item = this.itemToUpdate;
      this.itemToUpdate = undefined;
    },
    sel(id) {
      let item = this.items.find(item => {
        return id === item.id;
      });
      item.selected = !item.selected;
    },
    del(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    arch(id) {
      let item = this.items.find(item => {
        return id === item.id;
      });
      item.archived = !item.archived;
    },
    up(id) {
      let item = this.items.find(item => {
        return id === item.id;
      });
      this.itemToUpdate = item;
    },
    archiveAll() {
      this.items = this.items.map(item => {
        if (item.selected) {
          if (this.activeTabSelected) {
            item.archived = true;
          } else {
            item.archived = false;
          }
        }
        return item;
      });
    },
    deleteAll() {
      this.items = this.items.filter(item => !item.selected);
    }
  },
  computed: {
    filteredItems: function() {
      let tmpItems = this.activeTabSelected
        ? this.items.filter(item => !item.archived)
        : this.items.filter(item => item.archived);

      return !!this.filter
        ? tmpItems.filter(item => item.title.includes(this.filter))
        : tmpItems;
    },
    allSelected() {
      return this.items.length == this.items.filter(item => item.selected);
    },
    allArchived() {
      return this.items.length == this.items.filter(item => item.archived);
    }
  },

  components: { Task },
  created() {}
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
  #new,
  #update {
    width: 30%;
    .form-item {
      width: 100%;
      margin: 20px 0px;
      padding: 0px 20px;
      text-align: right;
      button {
        font-weight: bold;
      }
    }
  }
  #list {
    padding: 0px 4px;
    width: 40%;
    background-color: antiquewhite;

    .header {
      display: flex;
      width: 100%;
      div {
        flex-basis: 50%;
        padding: 6px;
        cursor: pointer;
        font-weight: bold;
        &.active {
          border-bottom: 2px solid darkorange;
        }
      }
    }
    .cmd {
      margin: 4px 4px;
      display: flex;
      flex-direction: row-reverse;
      button {
        margin: 0px 2px;
      }
    }
  }
  #update {
    width: 30%;
    background-color: goldenrod;
  }
}

.error {
  color: red;
}
</style>
