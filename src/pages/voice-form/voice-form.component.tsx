import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  WithStyles,
  Grid,
  Avatar,
  Container,
  Button,
  MenuItem,
  TextField
} from "@material-ui/core";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

import CustomSelect from "../../components/custom-select";

const styles: any = {
  paper: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: "1.5rem",
    backgroundColor: "rgb(220, 0, 78)"
  },
  form: {
    width: "100%"
  },
  textInput: {
    display: "flex",
    justifyContent: "center"
  }
};

interface iProps extends WithStyles<typeof styles> {
  classes: any;
}

const initialForm = {
  voice: "",
  emotion: "",
  temp: "",
  text: ""
};

const VoiceForm: React.FC<iProps> = ({ classes }) => {
  const [formState, setFormState] = React.useState(initialForm);

  function mapItems(list: string[]) {
    return list.map(i => (
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    ));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setFormState(initialForm);
  }

  const voices = ["Man", "Woman", "Oldman", "Child"];
  const emotions = ["Angry", "Happy", "Confused", "Bored"];
  const temps = ["Very Fast", "Fast", "Normal", "Slow", "Very Slow"];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <RecordVoiceOverIcon />
        </Avatar>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item sm={4} xs={12}>
              <CustomSelect
                labelId="voice-label"
                onChange={onChange}
                name="voice"
                value={formState.voice}
                labelChildren="Voices"
                helperChildren="Choose the voice"
              >
                {mapItems(voices)}
              </CustomSelect>
            </Grid>
            <Grid item sm={4} xs={12}>
              <CustomSelect
                onChange={onChange}
                value={formState.emotion}
                labelId="emotion-label"
                name="emotion"
                labelChildren="Emotions"
                helperChildren="Choose the emotion"
              >
                {mapItems(emotions)}
              </CustomSelect>
            </Grid>
            <Grid item sm={4} xs={12}>
              <CustomSelect
                onChange={onChange}
                value={formState.temp}
                labelId="temps-label"
                name="temp"
                labelChildren="Temps"
                helperChildren="Choose the temp"
              >
                {mapItems(temps)}
              </CustomSelect>
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField
                onChange={onChange}
                value={formState.text}
                name="text"
                size="small"
                fullWidth
                label="Text"
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button color="secondary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const StyledVoiceForm = withStyles(styles)(VoiceForm);

export { StyledVoiceForm };
