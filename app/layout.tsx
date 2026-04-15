import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

export const metadata: Metadata = {
	title: "To do app",
	description: "To do app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
			</head>
			<body style={{ height: "100vh" }} suppressHydrationWarning>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
