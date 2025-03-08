import { blogRollData } from "../sharedData";
// Todo: implement
export async function GET() {
    const xmlContent = `<
    ?xml version="1.0" encoding="UTF-8"?>
    <opml version="1.0">
    <head>
        <title>RSS Feeds for Aidan Loughney's Blogroll</title>
        <dateCreated>3/7/25</dateCreated>
    </head>
    <body></body>
    </opml>`;

    console.log(xmlContent)
  
    return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
  }

