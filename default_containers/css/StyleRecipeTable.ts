export class StyleRecipeTable {
    background_box_color: string; // Hex or rgba(), supports transparency

    recipe_table_input_border_color: string; // Hex or rgba(), supports transparency
    recipe_table_input_fill_color: string; // Hex or rgba(), supports transparency

    recipe_table_output_border_color: string; // Hex or rgba(), supports transparency
    recipe_table_output_fill_color: string; // Hex or rgba(), supports transparency

    constructor(background_box_color: string, recipe_table_input_border_color: string, recipe_table_input_fill_color: string, recipe_table_output_border_color: string, recipe_table_output_fill_color: string) {
        this.background_box_color = background_box_color;
        this.recipe_table_input_border_color = recipe_table_input_border_color;
        this.recipe_table_input_fill_color = recipe_table_input_fill_color;
        this.recipe_table_output_border_color = recipe_table_output_border_color;
        this.recipe_table_output_fill_color = recipe_table_output_fill_color;
    }

    GenerateStyleRecipeTable():string {
        return `
.recipe_list {
    margin-left: 8vw;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 0;
    list-style-type: none;
}

.recipe_list li a:hover {
    transform: scale(1.2);
}

.recipe {
    border-radius: 1vh;
    height: auto;
}

.recipe_table {
    border-collapse: collapse;
    width: 10vw;
    height: 10vw;
    white-space: nowrap;
}

.recipe_table th, .recipe_table td {
    border: 2px solid ${this.recipe_table_input_border_color};
    background-color: ${this.recipe_table_input_fill_color};
    padding: 5px;
}

.crafting_table_item {
    width: 5vw;
    image-rendering: pixelated;
}

.crafting_table_item:hover {
    transform: scale(1.2);
}

.recipe_div {
    align-content: center;
    padding: 5px;
    border-radius: 5px;
}

.recipe_div table {
    margin-right: 2vw;
}

.recipe_div p{
    margin-right: 2vw;
}

.recipe_table_recipe {
    border-collapse: collapse;
    width: 10vw;
    height: 10vw;
    white-space: nowrap;
}

.recipe_table_result th, .recipe_table_result td {
    border: 2px solid ${this.recipe_table_output_border_color};
    background-color: ${this.recipe_table_output_fill_color};
    padding: 10px;
}
`
    }
}