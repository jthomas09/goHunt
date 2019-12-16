import axios from "axios";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import useReactRouter from "use-react-router";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

const Search: React.FC = () => {
  const classes = useStyles()
  const { history } = useReactRouter();
  const [cities, setCities] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string>();

  const handleSelect = (city: string) => (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!_.isEmpty(cities)) {
      setCity(city);
    }
    setCities([]);
  };

  const handleSearch = async (city: string) => {
    const { data } = await axios.get(
      `https://mock-autocomplete.herokuapp.com/autocomplete?q=${city}`
    );
    setCities(data.data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
    setCity(event.target.value);
    history.push(`?q=${event.target.value}`);
  };

  return (
    <React.Fragment>
      <Grid container={true} justify="center" spacing={3}>
        <Grid item={true} xs={10} sm={10} md={6} lg={6} xl={6}>
          <Card className={classes.root}>
            <CardHeader title="Search for a City from A to Z" />
            <CardContent>
              <TextField
                autoFocus={true}
                fullWidth={true}
                onChange={handleChange}
                placeholder={"Search Cities"}
                value={city || ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />

              {!_.isEmpty(cities) && (
                <Card>
                  <List
                    style={{
                      border: "solid inherit 1px",
                      borderRadius: 4
                    }}
                  >
                    {cities.map((city, index) => (
                      <ListItem
                        button={true}
                        key={index}
                        onClick={handleSelect(city)}
                      >
                        <ListItemText primary={city} />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Search;
