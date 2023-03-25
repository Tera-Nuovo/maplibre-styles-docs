import { SolidMd } from "../utils/SolidMd";
import CodeBlock from "../utils/CodeBlock";



function types() {
    const md1 = `MapLibre style contains values of various types, most commonly as values for the style properties of a layer.

## Color

The \`color\` type is a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB). Colors are JSON strings in a variety of permitted formats: HTML-style hex values, RGB, RGBA, HSL, and HSLA. Predefined HTML colors names, like \`yellow\` and \`blue\`, are also permitted.`;

const code1 = `{
    "line-color": "#ff0",
    "line-color": "#ffff00",
    "line-color": "rgb(255, 255, 0)",
    "line-color": "rgba(255, 255, 0, 1)",
    "line-color": "hsl(100, 50%, 50%)",
    "line-color": "hsla(100, 50%, 50%, 1)",
    "line-color": "yellow"
}`;


const md2 = `## Formatted

The \`formatted\` type is a string broken into sections annotated with separate formatting options.`;

const code2 = `{
    "text-field": ["format",
        "foo", { "font-scale": 1.2 },
        "bar", { "font-scale": 0.8 }
    ]
}`;


const md3 = `## ResolvedImage

The \`resolvedImage\` type is an image (e.g., an icon or pattern) which is used in a layer. An input to the \`image\` expression operator is checked against the current map style to see if it is available to be rendered or not, and the result is returned in the \`resolvedImage\` type. This approach allows developers to define a series of images which the map can fall back to if previous images are not found, which cannot be achieved by providing, for example, \`icon-image\` with a plain string (because multiple strings cannot be supplied to \`icon-image\` and multiple images cannot be defined in a string).`;

const code3 = `{
    "icon-image": ["coalesce", ["image", "myImage"], ["image", "fallbackImage"]]
}`;


const md4 = `## String

A string is text. In MapLibre styles, strings are in quotes.`;

const code4 = `{
    "source": "mySource"
}`;


const md5 = `## Boolean

Boolean means yes or no, so it accepts the values \`true\` or \`false\`.`;

const code5 = `{
    "fill-enabled": true
}`;


const md6 = `## Number

A number value, often an integer or floating point (decimal number). Written without quotes.`;

const code6 = `{
    "text-size": 24
}`;


const md7 = `## Array

Arrays are comma-separated lists of one or more numbers in a specific order. For example, they're used in line dash arrays, in which the numbers specify intervals of line, break, and line again. If an array is used as an argument in an expression, the array must be wrapped in a \`literal\` expression.`;

const code7 = `{
    "line-dasharray": [2, 4]
}

{
    "circle-color": ["in", 1, ["literal", [1, 2, 3]]]
}`;


    return (
        <div>
            <SolidMd content={md1} />
            <CodeBlock code={code1} language="json" />
            <SolidMd content={md2} />
            <SolidMd content={md3} />
            <CodeBlock code={code3} language="json" />
            <SolidMd content={md4} />
            <CodeBlock code={code4} language="json" />
            <SolidMd content={md5} />
            <CodeBlock code={code5} language="json" />
            <SolidMd content={md6} />
            <CodeBlock code={code6} language="json" />
            <SolidMd content={md7} />
            <CodeBlock code={code7} language="json" />
        </div>
    )
}

export default types;


