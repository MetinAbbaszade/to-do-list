"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { type ReactElement, useState } from "react";
import ProjectList from "./ProjectList";
import SidebarElements from "./SidebarElements";

export type SubMenuLabel =
	| "Today"
	| "Upcoming"
	| "Projects"
	| "Archive"
	| "Trash";

export type FooterLabel = "Settings" | "Help";
export type ItemLabel = SubMenuLabel | FooterLabel;

type BaseElement = {
	id: number;
	icon: string;
	onClick?: () => void;
};

export type SidebarItem = BaseElement & {
	label: SubMenuLabel;
};

export type FooterItem = BaseElement & {
	label: FooterLabel;
};

const sidebarElements: SidebarItem[] = [
	{ id: 1, icon: "calendar_today", label: "Today" },
	{ id: 2, icon: "event_upcoming", label: "Upcoming" },
	{ id: 3, icon: "folder", label: "Projects" },
	{ id: 4, icon: "inventory_2", label: "Archive" },
	{ id: 5, icon: "delete", label: "Trash" },
];

const footerElements: FooterItem[] = [
	{ id: 6, icon: "settings", label: "Settings" },
	{ id: 7, icon: "help_outline", label: "Help" },
];

const subMenuItem: Record<SubMenuLabel, ReactElement> = {
	Today: <ProjectList />,
	Upcoming: <ProjectList />,
	Projects: <ProjectList />,
	Archive: <ProjectList />,
	Trash: <ProjectList />,
};

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState<SubMenuLabel | null>(null);

	return (
		<VStack alignItems={"flex-start"} gap="5px" h="full">
			<Flex alignItems={"center"} gap={"20px"} p={6}>
				<Flex
					bgColor={"#3e6374"}
					color={"#fff"}
					w={8}
					h={8}
					alignItems={"center"}
					justifyContent={"center"}
					borderRadius={"5px"}
				>
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "14px" }}
					>
						filter_hdr
					</span>
				</Flex>
				<VStack alignItems={"flex-start"} gap={"0"}>
					<Text fontSize={"1.3rem"} fontWeight={"bold"}>
						Workspace
					</Text>
					<Text
						textTransform={"uppercase"}
						fontSize={"0.8rem"}
						letterSpacing={"3px"}
					>
						Digital Sanctuary
					</Text>
				</VStack>
			</Flex>
			<Flex w="100%" direction={"column"} gap={"8px"} p={6}>
				{sidebarElements.map((element) => (
					<SidebarElements
						{...element}
						key={element.id}
						onClick={() => setActiveTab(element.label)}
						isActive={element.label === activeTab}
					/>
				))}
			</Flex>
			<Flex w="100%" direction={"column"} gap={"8px"} px={6} py={3}>
				{activeTab && subMenuItem[activeTab]}
			</Flex>
			<Footer />
		</VStack>
	);
};

const Footer = () => {
	return (
		<Box mt="auto" w="full" borderTop="1px solid" borderColor={"#ebedf0"} p={4}>
			{footerElements.map((element) => (
				<SidebarElements {...element} key={element.id}/>
			))}
		</Box>
	);
};

export default Sidebar;
