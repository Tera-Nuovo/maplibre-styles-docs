import { Title } from "solid-start";
import CodeBlock from "~/utils/CodeBlock";
import { SolidMd } from "~/utils/SolidMd";
import { Header } from "~/components/Header/Header";

function Home() {
  
  const code = `The \`color\` type is a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB). Colors are JSON strings in a variety of permitted formats: HTML-style hex values, RGB, RGBA, HSL, and HSLA. Predefined HTML colors names, like \`yellow\` and \`blue\`, are also permitted.

  \`\`\`json
  {
      "line-color": "#ff0",
      "line-color": "#ffff00",
      "line-color": "rgb(255, 255, 0)",
      "line-color": "rgba(255, 255, 0, 1)",
      "line-color": "hsl(100, 50%, 50%)",
      "line-color": "hsla(100, 50%, 50%, 1)",
      "line-color": "yellow"
  }
  \`\`\`
  
  This URL template should include two tokens:

- \`{fontstack}\` When requesting glyphs, this token is replaced with a comma separated list of fonts from a font stack specified in the [\`text-font\`](/maplibre-gl-js-docs/style-spec/layers/#layout-symbol-text-font) property of a symbol layer.
- \`{range}\` When requesting glyphs, this token is replaced with a range of 256 Unicode code points. For example, to load glyphs for the [Unicode Basic Latin and Basic Latin-1 Supplement blocks](https://en.wikipedia.org/wiki/Unicode_block), the range would be \`0-255\`. The actual ranges that are loaded are determined at runtime based on what text needs to be displayed.

  `;

  return (
    <div>
      <Header />
      <SolidMd content={code} />
    </div>
    );
  }
  
  export default Home;
  