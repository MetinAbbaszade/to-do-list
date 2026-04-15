import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "@/components/ui/input-group";

const Navbar = () => {
	return (
		<Flex
			px={10}
			py={3}
			justifyContent="space-between"
			min-width={"100%"}
			alignItems={"center"}
		>
			<Flex gap={"2rem"}>
				<Text
					fontWeight={"bold"}
					fontSize={"2xl"}
					letterSpacing={"-1px"}
					color={"#2b3437"}
				>
					Sanctuary
				</Text>
				<InputGroup startElement={<LuSearch />} width={"500px"}>
					<Input placeholder="Search Tasks or Files..." />
				</InputGroup>
			</Flex>
			<Flex alignItems="center" gap={4}>
				<IconButton
					aria-label="Notifications"
					p={2}
					variant="ghost"
					color="#6b7280"
				>
					<span className="material-symbols-outlined">notifications</span>
				</IconButton>

				<IconButton
					aria-label="Settings"
					p={2}
					color="#6b7280"
					variant={"ghost"}
				>
					<span className="material-symbols-outlined">settings</span>
				</IconButton>

				<Box
					ml={2}
					boxSize="32px"
					borderRadius="full"
					overflow="hidden"
					bg="#e5e7eb"
					position="relative"
				>
					<Image
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBEZxM9cy3dXVS8qKsMNtmR75sydm09LIHq0BSrO9OlUhO-qA5iJvBKV4hfZwbLhJjdQwuavy9jiA8TohkZ6wLBVkywJBb2sCfjKwG_WO4z8bWUcz1nDjxo1gZYw5v-Iab0EsqWTvPBbIH_r6U0OpoDpWFFR_MfOzWIs6QnbV9Vscn25mCxgTRpJ6PKZLIY55TY6QXppAqIU8Xt-COYMmypVlMow7RJ-s91iabIbRXgBeo2rngm5gCceFm9xnFsR7YvTLNYimTDXNH"
						alt="User avatar"
						fill
						style={{ objectFit: "cover" }}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Navbar;
