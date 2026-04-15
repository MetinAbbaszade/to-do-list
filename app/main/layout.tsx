import { Box, Flex } from "@chakra-ui/react";
import type React from "react";
import Sidebar from "./_components/Sidebar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Flex h="100vh" fontFamily={"system-ui"}>
			<Box
				w={72}
				bgColor={"#f2f4f6"}
				borderRight="1px solid"
				borderColor="gray.200"
			>
				<Sidebar />
			</Box>
			<Box>{children}</Box>
		</Flex>
	);
}
