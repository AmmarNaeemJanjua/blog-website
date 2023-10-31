<template>
    <v-container class="pa-0">
        <div class="d-flex flex-column justify-center align-center" style="height: 100vh;">
            <div>
                <v-btn class="mb-4" color="indigo" @click="openAddCategoryDialog">ADD CATEGORY</v-btn>
                <v-card min-width="809px">
                    <v-card-title>Manage Categories</v-card-title>
                    <v-table fixed-header height="450px">
                        <thead>
                            <tr>
                                <th class="text-center">Sr#</th>
                                <th class="text-center">ID</th>
                                <th class="text-center">Name</th>
                                <th class="text-center">Edit</th>
                                <th class="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(category, index) in categories" :key="category.id">
                                <td class="text-center">{{ index + 1 }}</td>
                                <td class="text-center">{{ category.id }}</td>
                                <td class="text-center">{{ category.name }}</td>
                                <td class="text-center">
                                    <button @click="openEditCategoryDialog(category)">
                                        <v-icon color="green" style="cursor: pointer">mdi-pencil</v-icon>
                                    </button>
                                </td>
                                <td class="text-center">
                                    <button @click="removeCategory(category)">
                                        <v-icon color="red" style="cursor: pointer">mdi-delete</v-icon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </div>
        </div>
    </v-container>

    <!-- Add Category Dialog -->
    <v-dialog v-model="addCategoryDialog" max-width="500">
        <v-card>
            <v-card-title>Add Category</v-card-title>
            <v-card-text>
                <v-text-field variant="outlined" v-model="newCategoryName" label="Category Name"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="addCategory">Add</v-btn>
                <v-btn color="red" @click="closeAddCategoryDialog">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- Edit Category Dialog -->
    <v-dialog v-model="editCategoryDialog" max-width="500">
        <v-card>
            <v-card-title>Edit Category</v-card-title>
            <v-card-text>
                <v-text-field variant="outlined" v-model="editedCategoryName" label="Category Name"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="editCategory">Save</v-btn>
                <v-btn color="red" @click="closeEditCategoryDialog">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            addCategoryDialog: false,
            editCategoryDialog: false,
            newCategoryName: "",
            editedCategoryName: "",
            selectedCategory: null,
        };
    },
    computed: {
        ...mapGetters("mcategories", ['GET_CATEGORIES']),
        categories() {
            return this.GET_CATEGORIES;
        },
    },
    methods: {
        ...mapActions("mcategories", ['FETCH_CATEGORIES', 'CREATE_CATEGORY']),
        openAddCategoryDialog() {
            this.newCategoryName = "";
            this.addCategoryDialog = true;
        },
        closeAddCategoryDialog() {
            this.addCategoryDialog = false;
        },
        openEditCategoryDialog(category) {
            this.editedCategoryName = category.name;
            this.selectedCategory = category;
            this.editCategoryDialog = true;
        },
        closeEditCategoryDialog() {
            this.editCategoryDialog = false;
        },
        addCategory() {
            if (this.newCategoryName) {
                const payload = { name: this.newCategoryName };
                this.CREATE_CATEGORY(payload)
                    .then(() => {
                        this.newCategoryName = "";
                        this.closeAddCategoryDialog();
                        this.FETCH_CATEGORIES();
                    })
                    .catch((error) => {
                        console.error("Error adding category:", error);
                    });
            }
        },
    },
    created() {
        this.FETCH_CATEGORIES();
    }
}
</script>

<style scoped></style>