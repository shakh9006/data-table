<template>
    <v-card-title>
        <v-text-field
                v-model.trim="search"
                @input="applySearch"
                label="Search"
                single-line
                hide-details
        ></v-text-field>
    </v-card-title>
</template>

<script>
    import { mapMutations } from "vuex"
    export default {
        name: "Search",
        data: () => ({
            search: "",
        }),
        methods: {
            ...mapMutations([
                "updateSearch"
            ]),

            applySearch() {
                this.updateSearch(this.search)
            }
        }
    }
</script>