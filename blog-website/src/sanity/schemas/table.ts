export default {
    name: "table",
    type: "object",
    title: "Table",
    fields: [
      {
        name: "rows",
        type: "array",
        title: "Rows",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "columns",
                type: "array",
                title: "Columns",
                of: [{ type: "string" }],
              },
            ],
          },
        ],
      },
    ],
  };
  