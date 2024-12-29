export default {
    name: "code",
    type: "object",
    title: "Code Block",
    fields: [
      {
        name: "language",
        type: "string",
        title: "Language",
        options: {
          list: [
            { title: "JavaScript", value: "javascript" },
            { title: "HTML", value: "html" },
            { title: "CSS", value: "css" },
            { title: "React", value: "react" },
            { title: "Node.js", value: "node" },
            { title: "MySQL", value: "mysql" },
            { title: "ZH", value: "zh" },
          ],
        },
      },
      {
        name: "code",
        type: "text",
        title: "Code Snippet",
      },
    ],
  };
  