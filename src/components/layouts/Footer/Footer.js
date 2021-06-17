import React from "react";
import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";
import { IoCall as OutCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useCompanyContext, useNavbarContext } from "#root/context/";

const Bars = styled.div`
	cursor: pointer;
	display: ${({ displayProp }) => (displayProp ? "none" : "inline-block")};
	visibility: ${({ displayProp }) => (displayProp ? "hidden" : "visible")};
	font-size: 1.5em;
	font-weight: 900;
	color: #fff;
	position: absolute;
	left: 0.9em;
	bottom: 13%;

	@media (max-width: 600px) {
		display: block;
		visibility: visible;
		position: relative;
		left: 0.6em;
		bottom: -6%;
	}
`;

const FooterBar = styled.div`
	height: 50px;
	width: 100vw;
	background: #0000005c;
	position: fixed;
	display: flex;
	flex-direction: row;
	padding: 0 4.5em;
	justify-content: space-between;
	align-items: center;
	bottom: 0;
	z-index: 2;

	@media (max-width: 600px) {
		padding: 0 1em;
		background: #000000b3;
	}
`;

const LinkHome = styled(Link)``;

const NameLogo = styled.h3`
	font-size: clamp(1rem, 3.5vw, 2.2rem);
	color: #fff;

	${LinkHome} {
		color: #fff;
		text-decoration: none;
	}
`;

const Socials = styled.a`
	cursor: pointer;
	color: #fff;
	display: inline-block;
	padding-top: 4%;
	border-radius: 50%;
	margin: 0 0.9vw;
	border: 1px solid #fff;
	text-align: center;
	font-size: 1rem;
	width: 2em;
	height: 2em;
	transition: transform 0.15s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}

	@media (max-width: 600px) {
		/* border: 1px solid #fff; */
	}
`;

const Footer = () => {
	const { name } = useCompanyContext();
	const { navState, toggleNav } = useNavbarContext();

	return (
		<FooterBar>
			<Bars onClick={() => toggleNav()} displayProp={navState}>
				<VscThreeBars />
			</Bars>

			<NameLogo>
				<LinkHome to="/">{name}</LinkHome>
			</NameLogo>

			<div className="socials">
				<Socials href="https://wa.link/3w7y4m" target="_blank">
					<FaWhatsapp />
				</Socials>
				<Socials href="mailto:palmerbideconcepts@gmail.com">
					<GrMail />
				</Socials>
				<Socials href="tel:08151248495">
					<OutCall />
				</Socials>
			</div>
		</FooterBar>
	);
};

export default Footer;
