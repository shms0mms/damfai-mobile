import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<View className="mt-[100px]">
			<Text>Home Screen</Text>
			<Link href={"+not-found"}>Go to not found page</Link>
		</View>
	);
}
