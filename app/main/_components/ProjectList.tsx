import { Button, Circle, Flex, List, Text } from "@chakra-ui/react";

const projects: Array<{ label: string; color: string }> = [
	{
		label: "Work",
		color: "#3e6374",
	},
	{
		label: "Personal",
		color: "#51626e",
	},
	{
		label: "Travel",
		color: "#acb3b7",
	},
];

const ProjectList = () => {
	return (
		<Flex
			direction={"column"}
			w="100%"
			gap="0.5rem"
			justifyContent="center"
			borderRadius="10px"
			transition="transform 0.5s ease-in"
            fontFamily={"system-ui"}
		>
			<Text
				textTransform={"uppercase"}
				fontSize={"14px"}
				py={2}
				px={4}
				fontWeight={"bold"}
			>
				My Projects
			</Text>
			<List.Root>
				{projects.map((project) => (
					<List.Item
						key={project.label}
						py={2}
						px={4}
						borderRadius={"10px"}
						_hover={{
							bgColor: "#fff",
							color: "#3e6374",
							cursor: "pointer",
						}}
					>
						<Flex alignItems={"center"} gap={"10px"}>
							<Circle size="10px" bg={project.color} />
							<Text color={"#71777b"} fontSize={"16px"}>
								{project.label}
							</Text>
						</Flex>
					</List.Item>
				))}
			</List.Root>
			<Button bgColor={"#3c6171"} color="#fff" borderRadius={"20px"} mt={"20px"}>
				<span>+</span>
				New Project
			</Button>
		</Flex>
	);
};

export default ProjectList;
