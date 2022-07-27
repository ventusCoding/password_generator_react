import React, { useState, useEffect } from "react";
import "./password_generator.css";
import { useSnackbar } from "react-simple-snackbar";

const PasswordGenerator = () => {
  const [previousCharacter, setPreviousCharacter] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(4);
  const [password, setPassword] = useState(null);
  const [title, setTitle] = useState("Password generator");
  const [passwordLength, setPasswordLength] = useState(8);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const template =
    "!#$%&()*+/0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}";

  const animateTitle = () => {
    setTitle(title.substring(0, currentTitleIndex) + "$" + title.substring(currentTitleIndex + 1));
    setCurrentTitleIndex(currentTitleIndex + 1);
    console.log("looping...");
  };

  //   const animateTitle2 = () => {
  //     const array = []

  //     const password = "Password"

  //     for(let i = 0 ; i < password.length ; i++){
  //         const str = password.substring(0,i) + '$' + password.substring(i + 1,password.length);
  //         array.push(str)
  //     }

  //     console.log(array);
  //   }

  useEffect(() => {
    setInterval(() => {
      animateTitle();
    }, 500);
    // animateTitle2()
  }, []);

  const generatePassword = () => {
    var password = "";
    for (let index = 0; index < passwordLength; index++) {
      var random = Math.round(Math.random() * (template.length - 1));
      console.log(random);
      password += template[random];
    }
    setPassword(password);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    openSnackbar("Your password has been copied !");
  };

  return (
    <div>
      <h1>{title}</h1>
      {password && (
        <input
          type="text"
          className="input"
          value={password}
          readOnly
          onClick={() => {
            copyPassword();
          }}
        />
      )}
      <button
        onClick={() => {
          generatePassword();
        }}
      >
        Generate password
      </button>
    </div>
  );
};

export default PasswordGenerator;
