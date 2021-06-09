import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Heading from '#root/components/layouts/Heading';
import CTA, {ctaTemplate} from '#root/components/layouts/CTA';
import {useNavbarContext} from '#root/context/';

const color_red = "#ffa5a5";
const color_green = "#66ffb2";

const baseInputStyle = `
    background-color: #fff;
    border: none;
    padding: 1em 10px;
    border-radius: 6px;
    
    &:focus{
        outline: none;
        box-sizing: border-box;
        border: 1px solid #b5c7fc;
    }
`;


const MainContent = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(254.54deg, #A9C9FF -1.02%, #FFBBEC 100%);
    padding: 4em 0;
    padding-left: 7em;
    padding-left: ${({displayProp}) => displayProp ? "7em" : "3em" };
    padding-right: 4em;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 6fr 4fr;
    place-items: center;
    transition: padding-left 0.19s ease-in-out;

    @media (max-width: 600px) {
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 5em;
        /* grid-template-columns: 1fr; */
    }

    @media (max-width: 1150px) {
        grid-template-columns: 1fr;
    }
`;


const ContactForm = styled.form`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    "s s s"
    "m m m"
    "n n e";
    margin-top: 3em;
    overflow: hidden;

    @media (max-width: 600px) {
        grid-template-areas: 
        "s s s"
        "m m m"
        "n n n"
        "e e e";
    }

`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Right = styled.div`

`;

const NameInput = styled.input`
    ${baseInputStyle};
    grid-area: n;
    ${({error}) => (
        error ? `
            border: 2px solid ${color_green};
        `: `border: 2px solid ${color_red}`
    )};
`;

const MessageInput = styled.textarea`
    ${baseInputStyle};
    grid-area: m;
    min-height: 10em;
    ${({error}) => (
        error ? `
            border: 2px solid ${color_green};
        `: `border: 2px solid ${color_red}`
    )};
`;

const SubjectInput = styled.input`
    ${baseInputStyle};
    grid-area: s;
    ${({error}) => (
        error ? `
            border: 2px solid ${color_green};
        `: `border: 2px solid ${color_red}`
    )};
`;

const EmailInput = styled.input`
    ${baseInputStyle};
    grid-area: e;
    ${({error}) => (
        error ? `
            border: 2px solid ${color_green};
        `: `border: 2px solid ${color_red}`
    )};
`;

const ContactSignPara = styled.p`
    margin:0  25px;
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    line-height: 175%;
    text-align: center;
    vertical-align: Top;

    @media(max-width: 400px){
        /* display: ${props=> props.hideProp}; */
    }
`;

const ContactSubmit = styled.button`
    ${ctaTemplate}
`;

const Warning = styled.p`
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    background-color: #ffa5a5;
    font-weight: 600;
    color: white;
    padding: 1.07em;
    text-align: center;
    width: 100%;
    margin-bottom: 1.68em;
    border-radius: 10px;
`;

const validateEmail = (email) => {
    
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
}

const ContactContent = () => {
    
    const submitForm = e => {
        
        e.preventDefault();
        details.subject || setReady(false);
        details.message || setReady(false);
        details.name || setReady(false);
        details.email || setReady(false);
        validateEmail(details.email) || setReady(false);
        if(ready){
            console.log("next step");
        }
    }

    useEffect(() => {
        setReady(true);
    }, []);

    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [ready, setReady] = useState(false);

    const details = {
        subject, message, name, email,
    }
    const setInput = (e, fn) => {
        fn(e.target.value);
    }

    const {navState} = useNavbarContext();

    return (

        <MainContent displayProp={navState}>
            <Left>
                {ready || <Warning> All fields are required</Warning>}
                <ContactSignPara hideProp="none">
                    Est reprehenderit cillum in culpa. Consequat laborum ipsum laborum nulla Lorem irure et quis culpa sunt esse laboris. Est reprehenderit cillum in culpa. Consequat laborumt cillum in culpa. Consequat laborum ipsum laborum nulla Lorem irure et quis  esse laboris.
                </ContactSignPara>

                <ContactForm action="/" method="post" id="contact">

                    <SubjectInput type="text" placeholder="Subject" value={subject} onChange={e=>setInput(e, setSubject)} required="" error={subject} />

                    <MessageInput placeholder="Your Message" value={message} onChange={e=>setInput(e, setMessage)} required="" error={message} />

                    <NameInput type="text" placeholder="Your name" value={name} onChange={e=>setInput(e, setName)} required="" error={name} />

                    <EmailInput type="email" placeholder="Your email" value={email} onChange={e=>setInput(e, setEmail)} required="" error={validateEmail(email)} />

                </ContactForm>

                <ContactSubmit type="submit" onClick={(e)=>submitForm(e)} >
                    Send Message
                </ContactSubmit>
            </Left>

            <Right>
                <Heading  before="<" after=" />" content="contact us" align="center" />
                <ContactSignPara>
                    Est reprehenderit cillum in culpa. Consequat laborum ipsum laborum nulla Lorem irure!!
                </ContactSignPara>
                <br />
                <br />
            </Right> 

        </MainContent>
    )
}

export default ContactContent;
