import { Flex, Text } from "@chakra-ui/react";
import type { ItemLabel } from "./Sidebar";

type SidebarElementsProps = {
	icon: string;
	label: ItemLabel;
	onClick?: () => void;
	isActive?: boolean;
};

const SidebarElements = ({
	icon,
	label,
	onClick,
	isActive = false,
}: SidebarElementsProps) => {
	return (
		<Flex
			w="100%"
			gap="1rem"
			py={2}
			px={4}
			alignItems="center"
			borderRadius="10px"
			_hover={{
				bgColor: "#fff",
				color: "#3e6374",
				cursor: "pointer",
				transform: "translateY(-4px)",
			}}
			transition="transform 0.5s ease-in"
			onClick={onClick}
			bg={isActive ? "#fff" : "transparent"}
			color={isActive ? "#3e6374" : "inherit"}
			fontWeight={isActive ? "600" : "normal"}
		>
			<span className="material-symbols-outlined text-[22px]">{icon}</span>
			<Text fontWeight={500} fontSize="16px">
				{label}
			</Text>
		</Flex>
	);
};

export default SidebarElements;
