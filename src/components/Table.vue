<template>
    <v-card>
        <search-input></search-input>
        <v-data-table
                :headers="headers"
                :items="tableData"
                class="elevation-1"
        >
            <template v-slot:top>
                <modal-window></modal-window>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import Modal from "./Modal"
    import Search from "./Search";
    import headers from "../store/headers"
    import { mapGetters, mapMutations } from "vuex"
    export default {
        name: "Table",

        components: {
           'modal-window': Modal,
           'search-input': Search,
        },

        data: () => ({
            headers,
        }),


        computed: {
            ...mapGetters([
                'getData',
                'getSearch'
            ]),

            tableData: {
                get() {
                    let data = this.getData
                    let result = this.getSearch
                        ? data.filter(e => e.name.toUpperCase().indexOf(this.getSearch.toUpperCase()) > -1)
                        : data

                    return result.map(e => {
                        return {
                            ...e,
                            price: this.numberFormat(e.price),
                            weight: this.numberFormat(e.weight),
                            quantity: this.numberFormat(e.quantity)
                        }
                    })

                },
            }
        },

        methods: {

            editItem (item) {
                this.updateIndex(item)
                this.updateEditedItem(Object.assign({}, item))
                this.updateDialog(true)
            },

            deleteItem (item) {
                confirm('Are you sure you want to delete this item?') && this.delete(item)
            },

            ...mapMutations([
                'updateIndex',
                'updateDialog',
                'updateEditedItem',
            ]),

            numberFormat(x) {
                if (typeof (+x) === "number")
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                return x
            },

            ...mapMutations({
                delete: 'deleteItem',
            })
        },
    }
</script>

<style scoped>

</style>