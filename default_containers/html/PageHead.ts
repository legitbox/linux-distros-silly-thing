export class PageHead {
    title: string;
    favicon_path: string;

    meta_title: string;
    meta_image_path: string;

    constructor(title: string, favicon_path: string, meta_title: string, meta_image_path: string) {
        this.title = title;
        this.favicon_path = favicon_path;

        this.meta_title = meta_title;
        this.meta_image_path = meta_image_path;
    }

    GeneratePageHead(): string {
        return `
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${this.title}</title>
          <link rel="stylesheet" href="/assets/styles/wiki_styles.css">
          <link rel="icon" href="${this.favicon_path}" type="image/png">
          <meta property="og:title" content="${this.meta_title}" />
          <meta property="og:image" content="${this.meta_image_path}"/>
        </head>
        `;
    }
}
