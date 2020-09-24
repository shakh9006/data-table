<template>
    <v-btn
            dark
            v-on="on"
            class="mb-2"
            color="teal"
            v-bind="attrs"
    >
        <v-icon left>mdi-plus</v-icon>
        {{title}}
    </v-btn>
</template>

<script>
    export default {
        name: "AddNewButton",
        props: {
            title: {
                type: String,
                default: "Create new Product",
            },
            on : {},
            attrs: {},
        }
    }
</script>

<style scoped>

</style>