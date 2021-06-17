import React from "react";
import styled from "styled-components";
import bgImage from "#root/images/obj.jpg";
import Heading from "#root/components/layouts/Heading";
import { useNavbarContext } from "#root/context/";

const ObjectiveSection = styled.section`
	min-height: 100vh;
	width: 100vw;
	background-image: linear-gradient(104.4deg, #8bc6ec 6.37%, #9599e2 100%);
	padding: 3em 0;
	padding-left: 7em;
	padding-left: ${({ displayProp }) => (displayProp ? "7em" : "3em")};
	padding-right: 4em;
	overflow: hidden;
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(2, 1fr);
	place-items: center;
	transition: padding-left 0.19s ease-in-out;

	@media (max-width: 600px) {
		padding-left: 2em;
		padding-right: 2em;
		/* grid-template-columns: 1fr; */
	}

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;
	}
`;

const Image = styled.div`
	height: auto;
`;

const Img = styled.img`
	width: 100%;
	border-radius: 2em;
`;

const OurObjective = styled.div``;

const Para = styled.p`
	font-size: clamp(0.869rem, 1.8vw, 1.07rem);
	line-height: 175%;
	text-align: justify;
	vertical-align: Top;
`;

const Objective = () => {
	const { navState } = useNavbarContext();

	return (
		<>
			<ObjectiveSection id="objective" displayProp={navState}>
				<Image>
					<Img src={bgImage} alt="" />
				</Image>

				<OurObjective>
					<Heading align="left" content="<our>" />

					<Para>
						Our single purpose is to help both existing and new businesses
						navigate the online market. We analyze your market and help
						integrate technology into your business, we come up with creative
						ways to sell your businesses and brands online.
					</Para>

					<Heading align="right" content="</objective>" />
				</OurObjective>
			</ObjectiveSection>
		</>
	);
};

export default Objective;
