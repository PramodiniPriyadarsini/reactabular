webpackJsonp([22],{1133:function(n,e,o){var t=o(1),r=o(11),s=o(12).PageRenderer;s.__esModule&&(s=s.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1162)}},componentWillMount:function(){},render:function(){return t.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,n.exports=a},1162:function(n,e){n.exports="Given sometimes you might want to display rows in a nested manner, you can use resolvers for this purpose. One way to do this is to use a `children` field and then convert the tree structure to something flat that Reactabular understands. Reactabular core doesn't know anything about trees but it works thanks to this conversion step.\n\n**Example:**\n\n```jsx\n/*\nimport React from 'react';\nimport * as Table from 'reactabular-table';\nimport * as resolve from 'table-resolver';\n*/\n\nconst columns = [\n  {\n    property: 'color',\n    headerCell: 'Color'\n  },\n  {\n    headerCell: 'Name'\n    children: [\n      {\n        property: 'name.first',\n        headerCell: 'First Name'\n      },\n      {\n        property: 'name.last',\n        headerCell: 'Last Name'\n      }\n    ]\n  },\n  {\n    headerCell: 'About'\n    children: [\n      {\n        property: 'company',\n        headerCell: 'Company'\n      },\n      {\n        property: 'sentence',\n        headerCell: 'Sentence'\n      }\n    ]\n  }\n];\n\nconst rows = [\n  {\n    id: 1,\n    color: 'red',\n    name: {\n      first: 'John',\n      last: 'Johnson'\n    },\n    company: 'John Inc.',\n    sentence: 'consequatur nihil minima corporis omnis nihil rem'\n  },\n  {\n    id: 2,\n    color: 'blue',\n    name: {\n      first: 'Mike',\n      last: 'Mikeson'\n    },\n    company: 'Mike Inc.',\n    sentence: 'a sequi doloremque sed id quo voluptatem voluptatem ut voluptatibus'\n  }\n];\n\nconst NestedColumnsTable = () => {\n  const resolvedColumns = resolve.columnChildren({ columns });\n  const resolvedRows = resolve.resolve({\n    columns: resolvedColumns,\n    method: resolve.nested\n  })(rows);\n\n  return (\n    <Table.Provider columns={resolvedColumns}>\n      <Table.Header\n        headerRows={resolve.headerRows({ columns })}\n      />\n\n      <Table.Body\n        rows={resolvedRows}\n        rowKey=\"id\"\n      />\n    </Table.Provider>\n  );\n};\n\n<NestedColumnsTable />\n```\n\n## See Also\n\n* [Resolving](/resolving)\n"}});