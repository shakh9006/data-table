<template>
    <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="500px">

            <template v-slot:activator="{ on, attrs }">
                <add-new-button v-bind:on="on" v-bind:attrs="attrs" title="Create New Product"></add-new-button>
            </template>

            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.artnumber" label="Art Number"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.name" label="Product name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.brand" label="Brand"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.weight" label="Weight"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.quantity" label="Quantity"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.stock" label="Stock"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex"
    import AddNewButton from "./AddNewButton"
    export default {
        name: "Modal",

        components: {
            AddNewButton
        },

        created() {

        },

        data: () => ({
            defaultItem: {
                artnumber: 0,
                name: "",
                brand: "",
                weight: 0,
                quantity: 0,
                price: 0,
                stock: 0
            },
        }),

        computed: {
            ...mapGetters([
                'getData',
                'getIndex',
                'getDialog',
                'getDataByIndex',
                'getEditedItem',
            ]),

            editedItem: {
                get() {
                    return this.getEditedItem
                },

                set(value) {
                    this.updateEditedItem(value)
                }
            },

            editedIndex: {
                get() {
                    console.log('sss')
                    return this.getIndex
                },

                set(value) {
                    this.updateIndex(value)
                }
            },

            dialog: {
                get() {
                    return this.getDialog
                },

                set(value) {
                    this.updateDialog(value)
                }
            }
        },

        methods: {

            ...mapMutations([
                'addNewItem',
                'updateIndex',
                'updateDialog',
                'updateEditedItem',
            ]),

            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.getDataByIndex(this.editedIndex), this.editedItem)
                } else {
                    this.addNewItem(this.editedItem)
                }
                this.close()
            },
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
        },
    }
</script>

<style scoped>

</style>