import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "#root/components/layouts/Heading";
import { ctaTemplate } from "#root/components/layouts/CTA";
import { useNavbarContext } from "#root/context/";
import axios from "axios";
import { Link } from "react-router-dom";

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
	background: linear-gradient(254.54deg, #a9c9ff -1.02%, #ffbbec 100%);
	padding: 4em 0;
	padding-left: 7em;
	padding-left: ${({ displayProp }) => (displayProp ? "7em" : "3em")};
	padding-right: 4em;
	display: grid;
	grid-gap: 2em;
	grid-template-columns: ${({ grid }) => (grid ? grid : "6fr 4fr")};
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

const Right = styled.div``;

const NameInput = styled.input`
	${baseInputStyle};
	grid-area: n;
	${({ error, showError }) => {
		if (showError === false) {
			return error
				? `
            border: 2px solid ${color_green};
        `
				: `border: 2px solid ${color_red}`;
		}
	}};
`;

const MessageInput = styled.textarea`
	${baseInputStyle};
	grid-area: m;
	min-height: 10em;
	${({ error, showError }) => {
		if (showError === false) {
			return error
				? `
            border: 2px solid ${color_green};
        `
				: `border: 2px solid ${color_red}`;
		}
	}};
`;

const SubjectInput = styled.input`
	${baseInputStyle};
	grid-area: s;
	${({ error, showError }) => {
		if (showError === false) {
			return error
				? `
            border: 2px solid ${color_green};
        `
				: `border: 2px solid ${color_red}`;
		}
	}};
`;

const EmailInput = styled.input`
	${baseInputStyle};
	grid-area: e;
	${({ error, showError }) => {
		if (showError === false) {
			return error
				? `
            border: 2px solid ${color_green};
        `
				: `border: 2px solid ${color_red}`;
		}
	}};
`;

const ContactSignPara = styled.p`
	margin: 0 25px;
	font-size: clamp(0.869rem, 1.8vw, 1.07rem);
	line-height: 175%;
	text-align: center;
	vertical-align: Top;

	@media (max-width: 400px) {
		/* display: ${(props) => props.hideProp}; */
	}
`;

const ContactSubmit = styled.button`
	${ctaTemplate}
`;

const Warning = styled.p`
	font-size: clamp(0.869rem, 1.8vw, 1.07rem);
	background-color: ${({ errorColor }) =>
		errorColor !== "All fields are required" ? "#2fd07f" : color_red};
	font-weight: 600;
	color: white;
	padding: 1.07em;
	text-align: center;
	width: 60%;
	margin-bottom: 1.68em;
	border-radius: 10px;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const Lin = styled(Link)`
	text-decoration: none;
	/* color: #fff; */
	font-size: clamp(0.869rem, 1.8vw, 1.07rem);
`;

const Loader = styled.div`
	border: 10px solid #f3f3f3;
	border-radius: 50%;
	border-top: 10px solid #dcdcdc;
	border-bottom: 10px solid #dcdcdc;

	margin: 0 20px;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email);
};

const sendData = async (data) => {
	try {
		const res = await axios.post(
			"https://nameless-anchorage-40130.herokuapp.com/api/v1/data/new",
			data
		);
		const {
			data: { ok },
		} = res;
		return ok;
	} catch (error) {
		console.log(`${error}`);
		return false;
	}
};

const SuccessMessage = styled.div``;

const ContactContent = () => {
	const submitForm = async (e) => {
		e.preventDefault();
		if (subject && message && name && validateEmail(email)) {
			// console.log("next step");
			const myMsg = {
				subject,
				message,
				name,
				email,
				isEmail: true,
			};
			e.target.setAttribute("disabled", true);
			setButtonMsg(<Loader />);
			const result = await sendData(myMsg);
			if (result) {
				setMessageSent(
					<Warning>
						{" "}
						Thank you for contacting us! <br /> We would get in touch with you
						shortly. via mail<br></br>
						<Lin to="/">Go Home</Lin>
					</Warning>
				);
			} else {
				setMessageSent(
					<Warning errorColor="All fields are required">
						{" "}
						Sorry! <br /> An error occured please try again later.
					</Warning>
				);
			}
		} else {
			setHideError(false);
		}
	};

	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [hideError, setHideError] = useState(true);
	const [userMessage, setUserMessage] = useState("All fields are required");
	const [messageSent, setMessageSent] = useState();
	const [buttonMsg, setButtonMsg] = useState("Send Message");

	const setInput = (e, fn) => {
		fn(e.target.value);
	};

	useEffect(() => {
		if (subject && message && name && validateEmail(email)) {
			setUserMessage("All fields are complete");
		} else {
			setUserMessage("All fields are required");
		}
	});

	useEffect(() => {
		if (subject && message && name && validateEmail(email)) {
			setUserMessage("All fields are complete");
		} else {
			setUserMessage("All fields are required");
		}
	});

	const { navState } = useNavbarContext();

	return (
		<MainContent displayProp={navState} grid={messageSent && "1fr"}>
			{messageSent || (
				<>
					<Left>
						{hideError || (
							<Warning errorColor={userMessage}> {userMessage} </Warning>
						)}
						<ContactSignPara hideProp="none">
							Take a sneak peek into the different businesses we have had the
							opportunity to work with and see how we brought their visions to
							life
						</ContactSignPara>

						<ContactForm action="/" method="post" id="contact">
							<SubjectInput
								type="text"
								placeholder="Subject"
								value={subject}
								onChange={(e) => setInput(e, setSubject)}
								required=""
								error={subject}
								showError={hideError}
							/>

							<MessageInput
								placeholder="Your Message"
								value={message}
								onChange={(e) => setInput(e, setMessage)}
								required=""
								error={message}
								showError={hideError}
							/>

							<NameInput
								type="text"
								placeholder="Your name"
								value={name}
								onChange={(e) => setInput(e, setName)}
								required=""
								error={name}
								showError={hideError}
							/>

							<EmailInput
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setInput(e, setEmail)}
								required=""
								error={validateEmail(email)}
								showError={hideError}
							/>
						</ContactForm>

						<ContactSubmit type="submit" onClick={(e) => submitForm(e)}>
							{buttonMsg}
						</ContactSubmit>
					</Left>

					<Right>
						<Heading
							before="<"
							after=" />"
							content="contact us"
							align="center"
						/>
						<ContactSignPara>Let's build something together</ContactSignPara>
						<br />
						<br />
					</Right>
				</>
			)}
		</MainContent>
	);
};

export default ContactContent;
