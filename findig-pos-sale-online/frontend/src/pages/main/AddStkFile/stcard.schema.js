export const stcardSchema = {
  type: "object",
  properties: {
    BranchCode: { type: "string", title: "Branch Code", default: "0" },
    S_Date: { type: "string", format: "date", title: "Date" },
    S_No: { type: "string", title: "No" },
    S_SubNo: { type: "string", title: "Sub No" },
    S_Que: { type: "integer", title: "Queue", default: 0 },
    S_PCode: { type: "string", title: "Product Code", default: "" },
    S_PName: { type: "string", title: "Product Name", default: "" },
    S_Stk: { type: "string", title: "Stock", maxLength: 3, default: "" },
    S_In: { type: "number", title: "Stock In", default: 0.0 },
    S_Out: { type: "number", title: "Stock Out", default: 0.0 },
    S_InCost: { type: "number", title: "In Cost", default: 0.0 },
    S_OutCost: { type: "number", title: "Out Cost", default: 0.0 },
    S_ACost: { type: "number", title: "Average Cost", default: 0.0 },
    S_Rem: { type: "string", title: "Remark", maxLength: 5, default: "" },
    S_User: { type: "string", title: "User", maxLength: 6, default: "" },
    S_EntryDate: { type: "string", format: "date", title: "Entry Date" },
    S_EntryTime: { type: "string", title: "Entry Time", default: "" },
    S_Link: { type: "string", title: "Link" },
    Source_Data: { type: "string", title: "Source", default: "" },
    Data_Sync: {
      type: "string",
      enum: ["Y", "N"],
      title: "Data Synced",
      default: "N"
    }
  },
  required: [
    "BranchCode", "S_Que", "S_PCode", "S_PName", "S_Stk",
    "S_In", "S_Out", "S_InCost", "S_OutCost", "S_ACost",
    "S_Rem", "S_User", "S_EntryTime", "Data_Sync"
  ]
};

// 🧠 แบ่งครึ่งอัตโนมัติ
const allFields = Object.keys(stcardSchema.properties);
const half = Math.ceil(allFields.length / 2);
const leftFields = allFields.slice(0, half);
const rightFields = allFields.slice(half);

export const stcardUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "VerticalLayout",
      elements: leftFields.map((key) => ({
        type: "Control",
        scope: `#/properties/${key}`
      }))
    },
    {
      type: "VerticalLayout",
      elements: rightFields.map((key) => ({
        type: "Control",
        scope: `#/properties/${key}`
      }))
    }
  ]
};
