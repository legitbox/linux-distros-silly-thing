export class StyleObjectDescription{

    text_color: string; // Hex or rgb()
    font_family: string;

    background_box_color: string; // Hex or rgba(), supports transparency
    object_name_color: string; // Hex or rgb()

    object_name_image_renderer: string = "pixelated"; // defaults to pixelated, uses 16x16 or 32x32 textures, on auto
    object_name_image_renderer_size: number = 4;

    constructor(text_color: string, font_family: string, background_box_color: string, object_name_color: string, object_name_image_renderer: string, object_name_image_renderer_size: number) {
        this.text_color = text_color;
        this.font_family = font_family;

        this.background_box_color = background_box_color;
        this.object_name_color = object_name_color;
        this.object_name_image_renderer = object_name_image_renderer;
        this.object_name_image_renderer_size = object_name_image_renderer_size;
    }

    GenerateStyleObjectDescription():string {
        return `
.object_description {
    color: ${this.text_color};
    border-radius: 1vh;
    font-family: "${this.font_family}", sans-serif;
    font-size: 2.5vh;
    margin-left: 2vw;
}

.object_description p {
    overflow-wrap: break-word;
}

.object_name {
    text-align: left;

    padding: 10px;
    border-radius: 5px;

}

.object_name ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: left;
}

.object_name ul li h1{
    margin: 0;
    color: ${this.object_name_color};
    font-size: 5vw;
}

.object_display_image {
    width: 10vw;
    height: ${this.object_name_image_renderer_size}px;
}

.object_display_image_px {
    image-rendering: ${this.object_name_image_renderer};
    height: ${this.object_name_image_renderer_size}px;
}
`
    }
}