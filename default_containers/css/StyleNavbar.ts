export class StyleNavbar {

    text_color: string; // hex or rgb(), for example #FFFFFF

    blur_amount: number;

    background_color:string; // hex or rgba(), for example #FFFFFF, supports transparency

    constructor(text_color: string,blur_amount: number, background_color:string) {
        this.text_color = text_color;
        this.blur_amount = blur_amount
        this.background_color = background_color;
    }

    GenerateStyleNavbar(): string {
        return `
h1 {
    margin-top: 10vh;
    text-align: center;
}

.navbar {
    margin-top: -1.5vh;
    margin-left: 2vw;
    margin-right: 2vw;
    background-color: ${this.background_color};
    padding-top: 0.2vh;
    padding-bottom: 0.2vh;

    background-repeat: repeat;
    background-size: contain;

    border-radius: 2vh;
    
    backdrop-filter: blur(${this.blur_amount}px);
}


.navbar ul {
    list-style-type: none;
    display: flex;
}

.navbar ul li {
    margin-right: 3vw;
}

.navbar ul li a {
    text-decoration: none;
    color: ${this.text_color};
    font-size: 3vh;
    display: inline-block;
    transition: transform 0.1s ease;
}

.navbar ul li a:hover {
    transform: scale(1.2);
}
`;
    }
}