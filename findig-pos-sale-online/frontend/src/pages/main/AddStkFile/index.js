import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers, materialCells } from "@jsonforms/material-renderers";
import { Button, Box } from "@mui/material";

import { stcardSchema, stcardUiSchema } from "./stcard.schema";

const STCardForm = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
    // ส่ง formData ไป backend เช่นผ่าน fetch หรือ axios
  };

  return (
    <Box sx={{ padding: 1, margin: "auto", marginTop: 4 }}>
      <JsonForms
        schema={stcardSchema}
        uischema={stcardUiSchema}
        data={formData}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setFormData(data)}
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default STCardForm;
