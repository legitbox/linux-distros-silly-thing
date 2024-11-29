export class StyleDataTable {
    background_box_color: string; // Hex or rgba(), supports transparency

    font_family: string;

    data_table_border_color: string; // Hex or rgba(), supports transparency
    data_table_fill_color: string; // Hex or rgba(), support transparency

    constructor(background_box_color: string, font_family: string, data_table_border_color: string, data_table_fill_color: string) {
        this.background_box_color = background_box_color;
        this.font_family = font_family;
        this.data_table_border_color = data_table_border_color;
        this.data_table_fill_color = data_table_fill_color;
    }

    GenerateStyleDataTable():string {
        return `
.data_table_div {
    padding: 5px;
    border-radius: 5px;
}

.data_table {
    font-family: "${this.font_family}", sans-serif;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: left;
    margin-left: 10vw;
    margin-bottom: 7vh;

    margin-top: 2vh;
}

.data_table th {
    border: 2px solid ${this.data_table_border_color};
    background-color: ${this.data_table_fill_color};
    padding: 10px;
}
`
    }
}