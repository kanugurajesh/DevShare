"use client";

import {ChangeEvent, SyntheticEvent, useState, useRef, useEffect} from "react";

import styles from "@/app/login/login.module.css";

import { 
    useRive,
    Layout,
    Fit,
    Alignment,
    StateMachineInput,
    useStateMachineInput,
    RiveState,
} from "rive-react";

const STATE_MACHINE_NAME = 'Login Machine'
const LOGIN_PASSWORD = 'teddy';

const page = () => {
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const [loginButtonText, setLoginButtonText] = useState('Login');
  const inputRef = useRef(null);

  useEffect(() => {
      if (inputRef?.current && !inputLookMultiplier) {
          // @ts-ignore
          setInputLookMultiplier(inputRef.current.offsetWidth / 100);
      }
  },[inputRef])

  const { rive: riveInstance, RiveComponent}:RiveState = useRive({
      src: '/animated-login-screen.riv',
      stateMachines: STATE_MACHINE_NAME,
      autoplay: true,
      layout: new Layout({
          fit: Fit.Cover,
          alignment: Alignment.Center
      }),
  });

  const onSubmit = (e: SyntheticEvent) => {
      setLoginButtonText('Checking...');
      setTimeout(() => {
          setLoginButtonText('Login');
          passValue === LOGIN_PASSWORD ? trigSuccessInput.fire() : trigFailInput.fire();
      }, 1500);
      e.preventDefault();
      return false;
  };

  // State Machine Inputs

  // @ts-ignore
  const isCheckingInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'isChecking');
  // @ts-ignore
  const numLookInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'numLook');
  // @ts-ignore
  const trigSuccessInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigSuccess');
  // @ts-ignore
  const trigFailInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigFail');
  // @ts-ignore
  const isHandsUpInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'isHandsUp');

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setUserValue(newVal);

      if(!isCheckingInput.value) {
          isCheckingInput.value = true;
      }

      const numChars = newVal.length;
      numLookInput.value = numChars * inputLookMultiplier;
  };

  const onUsernameFocus = () => {
      isCheckingInput.value = true;
      if(numLookInput.value !== userValue.length * inputLookMultiplier) {
          numLookInput.value = userValue.length * inputLookMultiplier;
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.rivecontainer}>
            <div className={styles.rivewrapper}>
                <RiveComponent className={styles.rivecontainer}/>
            </div>
            <div className={styles.formcontainer}>
              <form onSubmit={onSubmit}>
                  <label htmlFor="username">
                      <input type="text" className={styles.formusername}
                      name="username"
                      placeholder="Username"
                      onFocus={onUsernameFocus}
                      value={userValue}
                      onChange={onUsernameChange}
                      onBlur={()=> isCheckingInput.value = false}
                      ref={inputRef}
                      />
                  </label>
                  <label htmlFor="password">
                      <input type="password" 
                      className={styles.formpassword}
                      name="password"
                      placeholder="Password (ssh.. it's 'teddy'"
                      value={passValue}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setPassValue(e.target.value);
                      }}
                      onFocus={() => isHandsUpInput.value = true}
                      onBlur={() => isHandsUpInput.value = false}
                      />
                  </label>
                  <button className={styles.loginbtn}>{loginButtonText}</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default page