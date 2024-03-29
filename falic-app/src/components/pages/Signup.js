import {
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";
import AuthNav from "../comPeice/AuthNav";
import { TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";

const currencies = [
  {
    value: "د.إ",
    label: "د.إ",
  },
  {
    value: "Kz",
    label: "Kz",
  },
  {
    value: "R$",
    label: "R$",
  },
  {
    value: "P",
    label: "P",
  },
  {
    value: "₣",
    label: "₣",
  },
  {
    value: "¥",
    label: "¥",
  },
  {
    value: "₡",
    label: "₡",
  },
  {
    value: "Kč",
    label: "Kč",
  },
  {
    value: "kr",
    label: "kr",
  },
  {
    value: "د.ج",
    label: "د.ج",
  },
  {
    value: "€",
    label: "€",
  },
  {
    value: "£",
    label: "£",
  },
  {
    value: "₵",
    label: "₵",
  },
  {
    value: "D",
    label: "D",
  },
  {
    value: "₪",
    label: "₪",
  },
  {
    value: "₹",
    label: "₹",
  },
  {
    value: "MK",
    label: "MK",
  },
  {
    value: "RM",
    label: "RM",
  },
  {
    value: "₦",
    label: "₦",
  },
  {
    value: "$",
    label: "$",
  },
  {
    value: "R",
    label: "R",
  },
];

const countries = [
  {
    value: "Afghanistan",
    label: "Afghanistan",
  },
  {
    value: "Albania",
    label: "Albania",
  },
  {
    value: "Algeria",
    label: "Algeria",
  },
  {
    value: "Aland Islands",
    label: "Aland Islands",
  },
  {
    value: "American Samoa",
    label: "American Samoa",
  },
  {
    value: "Anguilla",
    label: "Anguilla",
  },
  {
    value: "Andorra",
    label: "Andorra",
  },
  {
    value: "Angola",
    label: "Angola",
  },
  {
    value: "Antilles - Netherlands",
    label: "Antilles - Netherlands",
  },
  {
    value: "Antigua and Barbuda",
    label: "Antigua and Barbuda",
  },
  {
    value: "Antarctica",
    label: "Antarctica",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
  {
    value: "Armenia",
    label: "Armenia",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "Austria",
    label: "Austria",
  },
  {
    value: "Aruba",
    label: "Aruba",
  },
  {
    value: "Azerbaijan",
    label: "Azerbaijan",
  },
  {
    value: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina",
  },
  {
    value: "Barbados",
    label: "Barbados",
  },
  {
    value: "Bangladesh",
    label: "Bangladesh",
  },
  {
    value: "Belgium",
    label: "Belgium",
  },
  {
    value: "Burkina Faso",
    label: "Burkina Faso",
  },
  {
    value: "Bulgaria",
    label: "Bulgaria",
  },
  {
    value: "Bahrain",
    label: "Bahrain",
  },
  {
    value: "Burundi",
    label: "Burundi",
  },
  {
    value: "Benin",
    label: "Benin",
  },
  {
    value: "Bermuda",
    label: "Bermuda",
  },
  {
    value: "Brunei Darussalam",
    label: "Brunei Darussalam",
  },
  {
    value: "Bolivia",
    label: "Bolivia",
  },
  {
    value: "Brazil",
    label: "Brazil",
  },
  {
    value: "Bahamas",
    label: "Bahamas",
  },
  {
    value: "Bhutan",
    label: "Bhutan",
  },
  {
    value: "Bouvet Island",
    label: "Bouvet Island",
  },
  {
    value: "Botswana",
    label: "Botswana",
  },
  {
    value: "Belarus",
    label: "Belarus",
  },
  {
    value: "Belize",
    label: "Belize",
  },
  {
    value: "Cambodia",
    label: "Cambodia",
  },
  {
    value: "Cameroon",
    label: "Cameroon",
  },
  {
    value: "Canada",
    label: "Canada",
  },
  {
    value: "Cape Verde",
    label: "Cape Verde",
  },
  {
    value: "Central African Republic",
    label: "Central African Republic",
  },
  {
    value: "Chad",
    label: "Chad",
  },
  {
    value: "Chile",
    label: "Chile",
  },
  {
    value: "China",
    label: "China",
  },
  {
    value: "Cocos (Keeling) Islands",
    label: "Cocos (Keeling) Islands",
  },
  {
    value: "Colombia",
    label: "Colombia",
  },
  {
    value: "Cote D'Ivoire (Ivory Coast)",
    label: "Cote D'Ivoire (Ivory Coast)",
  },
  {
    value: "Cook Islands",
    label: "Cook Islands",
  },
  {
    value: "Costa Rica",
    label: "Costa Rica",
  },
  {
    value: "Croatia (Hrvatska)",
    label: "Croatia (Hrvatska)",
  },
  {
    value: "Cuba",
    label: "Cuba",
  },
  {
    value: "Cyprus",
    label: "Cyprus",
  },
  {
    value: "Czech Republic",
    label: "Czech Republic",
  },
  {
    value: "Democratic Republic of the Congo",
    label: "Democratic Republic of the Congo",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
  {
    value: "Dominican Republic",
    label: "Dominican Republic",
  },
  {
    value: "Ecuador",
    label: "Ecuador",
  },
  {
    value: "Egypt",
    label: "Egypt",
  },
  {
    value: "El Salvador",
    label: "El Salvador",
  },
  {
    value: "Equatorial Guinea",
    label: "Equatorial Guinea",
  },
  {
    value: "Ethiopia",
    label: "Ethiopia",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "France",
    label: "France",
  },
  {
    value: "Gambia",
    label: "Gambia",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "Ghana",
    label: "Ghana",
  },
  {
    value: "Great Britain (UK)",
    label: "Great Britain (UK)",
  },
  {
    value: "Georgia",
    label: "Georgia",
  },
  {
    value: "Greece",
    label: "Greece",
  },
  {
    value: "Greenland",
    label: "Greenland",
  },
  {
    value: "Hungary",
    label: "Hungary",
  },
  {
    value: "Indonesia",
    label: "Indonesia",
  },
  {
    value: "Ireland",
    label: "Ireland",
  },
  {
    value: "Israel",
    label: "Israel",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "Iran",
    label: "Iran",
  },
  {
    value: "Italy",
    label: "Italy",
  },
  {
    value: "Jamaica",
    label: "Jamaica",
  },
  {
    value: "Japan",
    label: "Japan",
  },
  {
    value: "Kenya",
    label: "Kenya",
  },
  {
    value: "Korea (North)",
    label: "Korea (North)",
  },
  {
    value: "Korea (South)",
    label: "Korea (South)",
  },
  {
    value: "Kuwait",
    label: "Kuwait",
  },
  {
    value: "Libya",
    label: "Libya",
  },
  {
    value: "Malaysia",
    label: "Malaysia",
  },
  {
    value: "MY",
    label: "Malaysia",
  },
  {
    value: "Mexico",
    label: "Mexico",
  },
  {
    value: "Morocco",
    label: "Morocco",
  },
  {
    value: "Niger",
    label: "Niger",
  },
  {
    value: "Nigeria",
    label: "Nigeria",
  },
  {
    value: "Netherlands",
    label: "Netherlands",
  },
  {
    value: "New Zealand (Aotearoa)",
    label: "New Zealand (Aotearoa)",
  },
  {
    value: "Philippines",
    label: "Philippines",
  },
  {
    value: "Pakistan",
    label: "Pakistan",
  },
  {
    value: "Poland",
    label: "Poland",
  },
  {
    value: "Portugal",
    label: "Portugal",
  },
  {
    value: "Romania",
    label: "Romania",
  },
  {
    value: "Russian Federation",
    label: "Russian Federation",
  },
  {
    value: "Rwanda",
    label: "Rwanda",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
  },
  {
    value: "Senegal",
    label: "Senegal",
  },
  {
    value: "Singapore",
    label: "Singapore",
  },
  {
    value: "South Africa",
    label: "South Africa",
  },
  {
    value: "Spain",
    label: "Spain",
  },
  {
    value: "Sudan",
    label: "Sudan",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Switzerland",
    label: "Switzerland",
  },
  {
    value: "Syria",
    label: "Syria",
  },
  {
    value: "Taiwan",
    label: "Taiwan",
  },
  {
    value: "Thailand",
    label: "Thailand",
  },
  {
    value: "Togo",
    label: "Togo",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
  {
    value: "Ukraine",
    label: "Ukraine",
  },
  {
    value: "Uganda",
    label: "Uganda",
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
  },
  {
    value: "United States",
    label: "United States",
  },
  {
    value: "Venezuela",
    label: "Venezuela",
  },
  {
    value: "Yemen",
    label: "Yemen",
  },
  {
    value: "Zambia",
    label: "Zambia",
  },
  {
    value: "Zimbabwe",
    label: "Zimbabwe",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "95%",
    },
  },
}));

export default function Signup() {
  const classes = useStyles();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleCountrryChange = (event) => {
    setCountry(event.target.value);
  };

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [inputPassError, setInputPassError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // change button color
  const btnColor = loading === true ? "#f57071" : "#e73c3e";

  // Input value states

  const [firstNameVale, setFirstNameVale] = useState("");
  const [emailNameVale, setEmailNameVale] = useState("");
  const [phoneVale, setPhoneVale] = useState("");
  const [currency, setCurrency] = React.useState("$");
  const [country, setCountry] = React.useState("South Africa");
  const [passwordVale, setPasswordVale] = useState("");
  const [pwdConfirmVale, setPwdConfirmVale] = useState("");

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      firstNameVale === "" ||
      emailNameVale === "" ||
      phoneVale === "" ||
      country === "" ||
      currency === "" ||
      passwordVale === "" ||
      pwdConfirmVale === ""
    ) {
      setLoading(false);
      setInputError("Field cannot be blank");
      setInputPassError("Field cannot be blank");
    } else if (passwordVale !== pwdConfirmVale) {
      setLoading(false);
      setInputError("");
      setInputPassError("Passwords do not match");
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(
          emailNameVale,
          passwordVale,
          firstNameVale,
          phoneVale,
          country,
          currency
        );
        history.push("/");
      } catch {
        setError("Failed to create an account");
      }
    }
  };

  return (
    <div className="body">
      <div className="header">
        <div className="nav">
          <AuthNav />
        </div>
      </div>
      <Container>
        <div
          className="main"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "100px auto 20px auto",
          }}
        >
          <Paper elevation={1} style={{ width: "80%", maxWidth: 450 }}>
            <div className="signupForm">
              <div className="formHeader" style={{ margin: 20, padding: 10 }}>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  Create an account
                </Typography>
                <Divider />
              </div>
              {error && <Alert severity="error">{error}</Alert>}

              <div className="form">
                <form noValidate autoComplete="off" className={classes.root}>
                  <TextField
                    id="fullName"
                    label="Name"
                    type="text"
                    helperText={
                      inputError === "" ? "Enter your full name" : inputError
                    }
                    error={inputError ? true : false}
                    onKeyUp={(e) => setFirstNameVale(e.target.value)}
                  />

                  <TextField
                    id="email"
                    label="Email"
                    type="text"
                    helperText={
                      inputError === "" ? "Enter your email" : inputError
                    }
                    error={inputError ? true : false}
                    onKeyUp={(e) => setEmailNameVale(e.target.value)}
                  />

                  <TextField
                    id="phone"
                    label="Phone"
                    type="number"
                    helperText={
                      inputError === "" ? "Enter your phone number" : inputError
                    }
                    error={inputError ? true : false}
                    onKeyUp={(e) => setPhoneVale(e.target.value)}
                  />

                  <TextField
                    id="selectCountry"
                    select
                    label="Country"
                    value={country}
                    onChange={handleCountrryChange}
                    helperText={
                      inputError === ""
                        ? "Please select your country"
                        : inputError
                    }
                    error={inputError ? true : false}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="seleceCurrncy"
                    select
                    label="Currency"
                    value={currency}
                    onChange={handleChange}
                    helperText={
                      inputError === ""
                        ? "Please select your currency"
                        : inputError
                    }
                    error={inputError ? true : false}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="pwd"
                    label="Password"
                    type="password"
                    helperText={
                      inputPassError === ""
                        ? "Enter your password"
                        : inputPassError
                    }
                    error={inputPassError ? true : false}
                    onKeyUp={(e) => setPasswordVale(e.target.value)}
                  />

                  <TextField
                    id="pwdConfirm"
                    label="confirm Password"
                    type="password"
                    helperText={
                      inputPassError === ""
                        ? "Please confirm your password"
                        : inputPassError
                    }
                    error={inputPassError ? true : false}
                    onKeyUp={(e) => setPwdConfirmVale(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </Paper>
          <div className="submitBtn">
            <Button
              variant="contained"
              style={{
                backgroundColor: btnColor,
                color: "#fff",
                marginTop: 20,
              }}
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="options">
          <div style={{ textAlign: "center", marginBottom: 25 }}>
            <span>
              Already have an account? <Link to="/signin">Sign in</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
