export class StyleBody{
    font_family:string;
    font_source_path:string;
    font_format:string; // sets the file type of the font file, example: truetype

    default_text_color:string; // hex or rgb(), for example #FFFFFF
    use_background_image:boolean;
    // non image background settings
    background_color:string; // hex or rgb(), for example #FFFFFF
    // image background settings
    background_image_path:string;
    background_image_blur:boolean;
    background_image_blur_amount:number;

    constructor(font_family:string, font_source_path:string, font_format:string,default_text_color:string, use_background_image:boolean, background_color:string, background_image_path:string = "", background_image_blur:boolean = false, background_image_blur_amount:number = 0) {
        this.font_family = font_family;
        this.font_source_path = font_source_path;
        this.font_format = font_format;

        this.default_text_color = default_text_color;
        this.use_background_image = use_background_image;
        this.background_color = background_color

        this.background_image_path = background_image_path;
        this.background_image_blur = background_image_blur;
        this.background_image_blur_amount = background_image_blur_amount;

    }

    GenerateStyleBody():string {
        return `
@font-face {
    font-family: '${this.font_family}';
    src: url('${this.font_source_path}') format('${this.font_format}');
}

body {
    background-color: ${this.background_color};
    color: ${this.default_text_color};
    margin: 0;
    padding: 0;
    height: 200vh;
    display: block;
    justify-content: left;
    align-items: center;
    font-family: '${this.font_family}', sans-serif;        
    background-image: url("${this.background_image_path}");
    backdrop-filter: blur(${this.background_image_blur_amount});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`;
    }
}