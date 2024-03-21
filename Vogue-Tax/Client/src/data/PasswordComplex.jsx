// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import FormProgressBar from "../components/FormProgressBar";


import zxcvbn from 'zxcvbn';
export const PasswordComplex =({valueOfNewPassword}) => {
const testResult =  zxcvbn(valueOfNewPassword);
const num = (testResult.score * 450) / 6;
console.log(testResult.score)

    const [passwordValidity, setPasswordValidity] = useState(
        {
            minLength:null,
            minLowerCase:null,
            minUpperCase:null,
            minSpecSymbols:null,

        });
    const isNumberRegex = /\d/;
    const oneLowerCase = /^(?=.*?[a-z])/;
    const oneUpperCase = /^(?=.*?[A-Z])/;
    const SpecialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

useEffect(() => {
    setPasswordValidity({
        minLength:valueOfNewPassword?.length>= 10,
        minLowerCase:!!oneLowerCase.test(valueOfNewPassword),
        minUpperCase:!!oneUpperCase.test(valueOfNewPassword),
        minNumbers:!!isNumberRegex.test(valueOfNewPassword),
        minSpecSymbols:!!SpecialCharacterRegx.test(valueOfNewPassword)
    })
},[valueOfNewPassword])
    const PasswordStrengthIndicatorItem = ({isValid, text}) =>{
        return <li style = {{color: isValid ? "limegreen" : "grey"}}>{text}</li>
    }

    const funcProgressLabel =  () => {
        switch (testResult.score) {
            case 0:
                return " Very Weak";
            case 1:
                return " Weak";
            case 2:
                return " Fair";
            case 3:
                return " Strong";
            case 4:
                return " Very Strong";
            default:
                return  " none"

        }
    }

const funcProgressColor =  () => {
    switch (testResult.score) {
        case 0:
            return "grey";
        case 1:
            return "orangered";
        case 2:
            return "orange";
        case 3:
            return "green";
        case 4:
            return "limegreen";
        default:
            return  "none"

    }
}


    return (
        <>
        <div style={{color: 'grey' , marginTop:'2px', fontSize:'1rem', fontWeight:'bold'}}>
            Password Strength :
            <span style={{
                color: funcProgressColor(),
                fontSize:'1rem',
                fontWeight: '500'
            }}>
                {funcProgressLabel()}
            </span>
        </div>
             <div style={{
                 background: "#e9ecef",
                 borderRadius: '4px'
             }}>
                 <FormProgressBar value={num} maxValue={300} color={funcProgressColor()}
                 />
            </div>
            <div style={{
                color: 'grey', marginTop:'3px', fontSize:'1rem', fontWeight:'bold'
            }}>
                Password must Contain:
            </div>
            <ul style={{
                fontSize:'1rem'
            }}>
                <PasswordStrengthIndicatorItem
                    text = "Have at least 10 Characters"
                 isValid={passwordValidity?.minLength}
                />
                <PasswordStrengthIndicatorItem
                    text = "Have at least 1 lowercase english character"
                    isValid={passwordValidity?.minLowerCase}
                />
                <PasswordStrengthIndicatorItem
                    text = "Have at least 1 Uppercase english character"
                    isValid={passwordValidity?.minUpperCase}
                />
                <PasswordStrengthIndicatorItem
                    text = "Have at least one special symbol"
                    isValid={passwordValidity?.minSpecSymbols}
                />
                <PasswordStrengthIndicatorItem
                    text = "Have at least one Number"
                    isValid={passwordValidity?.minNumbers}
                />

            </ul>
            </>


    );
};


