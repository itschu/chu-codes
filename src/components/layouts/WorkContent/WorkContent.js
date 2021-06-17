import React from "react";
import styled from "styled-components";
import Heading from "#root/components/layouts/Heading";
import { ctaTemplate } from "#root/components/layouts/CTA";
import { allJobs } from "#root/data";
import { Link } from "react-router-dom";
import { useNavbarContext } from "#root/context/";

const MainContent = styled.section`
	background: linear-gradient(283.36deg, #114357 0%, #f29492 109.03%);
	width: 100vw;
	min-height: 100vh;
	padding: 4em 0;
	padding-left: 7em;
	padding-left: ${({ displayProp }) => (displayProp ? "7em" : "3em")};
	padding-right: 4em;
	display: grid;
	place-items: center;
	grid-template-columns: 6fr 4fr;
	gap: 1em;
	transition: padding-left 0.19s ease-in-out;

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 600px) {
		padding-left: 2em;
		padding-right: 2em;
		grid-template-columns: 1fr;
		padding-bottom: 6em;
		padding-top: 6em;
	}
`;

const ViewWorks = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.7em;
	place-content: center;
	margin-bottom: 3em;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const Works = styled.div`
	margin-bottom: 4.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Para = styled.p`
	font-size: clamp(0.869rem, 1.8vw, 1.07rem);
	line-height: 175%;
	text-align: center;
	vertical-align: Top;
	color: #fff;
`;

const Cell = styled.a`
	background-color: ${(props) => props.bg};
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
		url(${(props) => props.bgImg}) no-repeat;
	background-position: center;
	background-size: cover;
	color: ${(props) => props.color};
	color: #fff;
	padding: 5em 2em;
	font-size: clamp(1rem, 2vw, 1.23rem);
	font-weight: 900;
	font-family: "Catamaran", sans-serif;
	text-decoration: none;
	border-radius: 10px;
	text-align: center;
	transition: transform 0.25s ease, border-radius 0.25s ease,
		box-shadow 0.6s ease;
	position: relative;

	&::before,
	&::after {
		content: "";
		border-radius: 10px;
		position: absolute;
		top: 0.7em;
		left: 0.7em;
		bottom: 0.7em;
		right: 0.7em;
		z-index: 1;
		transition: transform 0.55s ease-in-out;
	}

	&::before {
		transform: scale(0, 1);
	}

	&::after {
		transform: scale(1, 0);
	}

	&:hover::before,
	&:focus::before {
		border-radius: 0px;
		border: 1px solid currentColor;
		border-left: 0px solid transparent;
		transform: scale(1.057, 1);
		border-right: 0px solid transparent;
	}

	&:hover::after,
	&:focus::after {
		border-radius: 0px;
		border: 1px solid currentColor;
		border-top: 0px solid transparent;
		transform: scale(1, 1.057);
		border-bottom: 0px solid transparent;
	}

	&:hover,
	&:focus {
		transform: scale(1.2);
		z-index: 2;
		box-shadow: 0 1em 1em 0em #324f6063;
		border-radius: 0px;
	}

	@media (max-width: 600px) {
		padding: 2em 2em;
	}
`;

const WorkCTA = styled(Link)`
	${ctaTemplate};
	color: white;
	font-weight: 600;
`;

const WorkContent = () => {
	const { navState } = useNavbarContext();

	return (
		<MainContent displayProp={navState}>
			<ViewWorks>
				{allJobs.map((el) => (
					<Cell
						bg={el.bgColor}
						color={el.color}
						href={el.link}
						key={el.id}
						target="_blank"
						bgImg={el.bgImg}
					>
						{el.title}
					</Cell>
				))}
			</ViewWorks>

			<Works>
				<Heading
					before="<"
					after=" />"
					content="our work"
					align="center"
					color="#fff"
				/>

				<Para>
					Take a sneak peak into the different businesses we have had the
					opportunity to work with and see how we broght their visions to life
				</Para>

				<WorkCTA to="/contact">Get In Touch</WorkCTA>
			</Works>
		</MainContent>
	);
};

export default WorkContent;
