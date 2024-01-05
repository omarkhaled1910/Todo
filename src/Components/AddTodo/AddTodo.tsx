import { Button, Divider, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TODO_OPTIONS } from "../../Constants";

const AddTodo = () => {
  return (
    <div style={{
        borderBottom:"2px solid #d8d8d8",
        paddingBlock:20
    }}>
      <h4>Add a New Todo</h4>
      <div className="flex-center-col" style={{ gap: 20 }}>
        <TextField
          style={{
            width: 450,
          }}
          label="TODO Name"
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={1}
            name="todoStatus"
            row
          >
            {TODO_OPTIONS.map((opt) => (
              <FormControlLabel
                value={opt.id}
                control={<Radio />}
                label={opt.option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      <Button style={{ border:"2px solid #d8d8d8"}}>ADD Todo</Button>
      </div>
    </div>
  );
};

export default AddTodo;
