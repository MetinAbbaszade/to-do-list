import { Box, Flex } from "@chakra-ui/react";
import type React from "react";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Flex h="100vh" fontFamily={"system-ui"}>
			<Box
				w={80}
				bgColor={"#f2f4f6"}
				borderRight="1px solid"
				borderColor="gray.200"
			>
				<Sidebar />
			</Box>
			<Box width={"100%"}>
				<Navbar />
				<Box>{children}</Box>
			</Box>
		</Flex>
	);
}
